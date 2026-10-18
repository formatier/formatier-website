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
		class="prose max-w-none prose-sm prose-h2:mt-4 prose-h2:mb-2 prose-h3:mt-3 prose-h3:mb-1 prose-h1:mb-3 prose-headings:text-content prose-p:text-content-body prose-p:my-2 prose-p:first:mt-0 prose-p:last:mb-0"
	></div>
</template>
