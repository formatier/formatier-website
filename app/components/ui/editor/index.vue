<script setup lang="ts">
import { useEditor } from "@/composable/editor";
import {
	$getRoot,
	BLUR_COMMAND,
	COMMAND_PRIORITY_BEFORE_LOW,
	FOCUS_COMMAND,
	mergeRegister,
} from "lexical";
import {
	$convertFromMarkdownString,
	$convertToMarkdownString,
	TRANSFORMERS,
} from "@lexical/markdown";

const props = defineProps<{
	class?: string;
	containerClass?: string;
	disabled?: boolean;
}>();

const emitter = defineEmits({
	onUpdate: ["content"],
});

const editorRef = useTemplateRef("editor");
const { editor, state, toggle, convertBlock } = useEditor(
	"formatier",
	editorRef,
);

const focused = ref(false);
const placeholderShow = ref(false);

let cleanUpRegisters: () => void | undefined;

watch({ disabled: props.disabled, state }, ({ disabled, state }) => {
	if (disabled && state.value === "ready") {
		editor.value?.setEditable(false);
		placeholderShow.value = false;
	} else if (!disabled && state.value === "ready") {
		editor.value?.setEditable(true);
		placeholderShow.value = true;
	}
});

watch(state, (state) => {
	if (state === "ready") {
		placeholderShow.value = true;
	}
});

onMounted(() => {
	if (editor.value) {
		cleanUpRegisters = mergeRegister(
			editor.value.registerUpdateListener((payload) => {
				payload.editorState.read(() => {
					const root = $getRoot();
					placeholderShow.value = root.getTextContentSize() < 1;

					const markdown = $convertToMarkdownString(TRANSFORMERS);
					emitter("onUpdate", markdown);
				});
			}),
			editor.value.registerCommand(
				FOCUS_COMMAND,
				() => {
					focused.value = true;
					return false;
				},
				COMMAND_PRIORITY_BEFORE_LOW,
			),
			editor.value.registerCommand(
				BLUR_COMMAND,
				() => {
					focused.value = false;
					return false;
				},
				COMMAND_PRIORITY_BEFORE_LOW,
			),
		);
	}
});

onUnmounted(() => {
	cleanUpRegisters();
});
</script>

<template>
	<div class="flex flex-col gap-3">
		<div
			:class="
				props.containerClass +
				(state === 'loading'
					? ' animate-pulse bg-surface-low rounded-xl'
					: '')
			"
			class="relative"
			@click="editor?.focus()"
		>
			<div
				ref="editor"
				contenteditable
				class="p-2 focus:outline-none font-plus-jakarta-sans bg-transparent z-10 relative"
				:class="props.class"
			></div>
			<p
				class="top-2 left-2 text-sm text-content-muted absolute leading-[1.75] z-1 select-none cursor-text"
				v-if="placeholderShow && !focused"
			>
				<slot name="placeholder"></slot>
			</p>
		</div>
		<slot
			name="toolbar"
			:toggle="toggle"
			:convertBlock="convertBlock"
		></slot>
		<slot></slot>
	</div>
</template>
