<script setup lang="ts">
const props = defineProps<{
	content: string;
}>();

const maxRef = useTemplateRef("max")
</script>

<template>
	<ClientOnly>
		<UiMaxContent :max-line="6" ref="max" variant="expand">
			<UiMdx :markdown="props.content" @on-loaded="maxRef?.compute()"></UiMdx>
		</UiMaxContent>
	</ClientOnly>
</template>
