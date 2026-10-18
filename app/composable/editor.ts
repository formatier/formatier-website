import { createEditor, type LexicalEditor } from "lexical";
import { HeadingNode, registerRichText } from "@lexical/rich-text";

export const useEditor = (
  namespace: string,
  rootRef: Ref<HTMLElement | null, HTMLElement | null>,
) => {
  let state = ref<"loading" | "ready" | "error">("loading");
  const editor = ref<LexicalEditor | undefined>(undefined);

  onMounted(() => {
    const editorInstance = createEditor({
      namespace,
      theme: {
        blockCursor: "",
        text: {
          base: "text-sm",
        },
      },
      onError: console.error,
    });
    registerRichText(editorInstance);

    if (rootRef.value) {
      editorInstance.setRootElement(rootRef.value);
      editor.value = editorInstance;
      state.value = "ready";
    } else {
      state.value = "error";
    }
  });

  const toggle = (toToggle: "bold" | "italic" | "underline") => {
    editor.value?.dispatchCommand();
  };

  const convertBlock = (
    format: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
  ) => {};

  return {
    editor,
    state,
    toggle,
    convertBlock,
  };
};
