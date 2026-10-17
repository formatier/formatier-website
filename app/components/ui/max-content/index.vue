<script setup lang="ts">
const props = defineProps<{
	variant?: "expand" | "overview";
	maxLine: number;
}>();

const isTruncated = ref(false);
const isExpanderOpen = ref(false);

const textRef = useTemplateRef("text")

onMounted(async () => {
	await nextTick()
	if (textRef.value) {
		isTruncated.value = textRef.value.scrollHeight > textRef.value.clientHeight
	}
})
</script>

<template>
	<template v-if="variant == 'overview' || !variant">
		<div class="flex flex-col gap-1 items-start">
			<div class="relative">
				<p
					class="text-wrap wrap-break-word overflow-y-hidden text-ellipsis"
					:style="{
						display: '-webkit-box',
						'line-clamp': props.maxLine,
						'box-orient': 'vertical',
					}"
					ref="text"
				>
					<slot></slot>
				</p>
				<UiUtility class="absolute top-0 left-0 z-10" v-model="isExpanderOpen">
					<slot></slot>
				</UiUtility>
			</div>
			<UiButton
				size="xs"
				icon="ph:arrows-out-simple-bold"
				variant="common"
				@click="isExpanderOpen = true"
				v-if="isTruncated"
			>
				Show More
			</UiButton>
		</div>
	</template>

	<template v-else> </template>
</template>
