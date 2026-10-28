<script setup lang="ts">
const props = defineProps<{
	markdown: string;
}>();

const emitter = defineEmits(["onLoaded"]);

const contentRef = useTemplateRef("content");

onMounted(async () => {
	const { default: MarkdownIt } = await import("markdown-it");
	const md = new MarkdownIt({});
	const res = md.render(props.markdown);
	if (contentRef.value) {
		contentRef.value.innerHTML = res;
	}
	await nextTick();

    emitter("onLoaded")
});
</script>

<template>
	<div
		ref="content"
		class="ui-prose font-plus-jakarta-sans"
	></div>
</template>
