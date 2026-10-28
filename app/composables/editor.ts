import {
	$createParagraphNode,
	$getSelection,
	$isRangeSelection,
	createEditor,
	FORMAT_TEXT_COMMAND,
	type LexicalEditor,
} from "lexical";
import {
	$createHeadingNode,
	$isHeadingNode,
	HeadingNode,
	QuoteNode,
	registerRichText,
	type HeadingTagType,
} from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { $isCodeNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, createLinkMatcherWithRegExp, LinkNode, registerAutoLink } from "@lexical/link";
import { $setBlocksType } from "@lexical/selection";
import {
	HEADING,
	LINK,
	registerMarkdownShortcuts,
	TRANSFORMERS,
	type ElementTransformer,
} from "@lexical/markdown";

var httpRegex =
	/((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const LIMITED_HEADING: ElementTransformer = {
	dependencies: [HeadingNode],
	export: (node, exportChildren) => {
		if (!$isHeadingNode(node)) return null;
		const level = Number(node.getTag().slice(1));
		return "#".repeat(level) + " " + exportChildren(node);
	},
	regExp: new RegExp(`^(#{1,3})\\s`),
	replace: (parentNode, children, match, isImport) => {
		const tag = `h${match[1]?.length || "3"}` as HeadingTagType;
		const node = $createHeadingNode(tag);
		node.append(...children);
		parentNode.replace(node);
		if (!isImport) node.select(0, 0);
	},
	type: "element",
};

const LIMITED_TRANSFORMERS = [
	LIMITED_HEADING,
	...TRANSFORMERS.filter((t) => t !== HEADING && t !== LINK),
];

export const useEditor = (
	namespace: string,
	rootRef: Ref<HTMLElement | null, HTMLElement | null>,
) => {
	let state = ref<"loading" | "ready" | "error">("loading");
	const editor = ref<LexicalEditor | undefined>(undefined);
	let unregister: (() => void)[] = [];

	onMounted(() => {
		const editorInstance = createEditor({
			namespace,
			nodes: [
				HeadingNode,
				QuoteNode,
				ListNode,
				ListItemNode,
				CodeNode,
				AutoLinkNode,
			],
			onError: console.error,
			theme: {
				text: {
					underline: "underline",
				},
			},
		});
		unregister.push(registerRichText(editorInstance));
		unregister.push(
			registerMarkdownShortcuts(editorInstance, LIMITED_TRANSFORMERS),
		);
		unregister.push(
			registerAutoLink(editorInstance, {
				matchers: [
					createLinkMatcherWithRegExp(httpRegex, (text) =>
						text.startsWith("http") ? text : `https://${text}`,
					),
				],
				excludeParents: [$isCodeNode, $isHeadingNode],
				changeHandlers: [],
			}),
		);

		if (rootRef.value) {
			editorInstance.setRootElement(rootRef.value);
			editor.value = editorInstance;
			state.value = "ready";
		} else {
			state.value = "error";
		}
	});

	onBeforeUnmount(() => {
		unregister.forEach((u) => {
			u();
		});
		editor.value?.setRootElement(null);
		editor.value = undefined;
	});

	const toggle = (toToggle: "bold" | "italic" | "underline") => {
		editor.value?.dispatchCommand(FORMAT_TEXT_COMMAND, toToggle);
	};

	const convertBlock = (format: "h1" | "h2" | "h3" | "p") => {
		editor.value?.update(() => {
			const selection = $getSelection();
			if (!$isRangeSelection(selection)) return;

			$setBlocksType(selection, () =>
				format === "p"
					? $createParagraphNode()
					: $createHeadingNode(format),
			);
		});
	};

	return {
		editor,
		state,
		toggle,
		convertBlock,
	};
};
