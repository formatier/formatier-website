<script setup lang="ts">
const props = defineProps<{
	variant?: "expand" | "overview";
	maxLine: number;
}>();

const isTruncated = ref(false);
const isExpanderOpen = ref(false);

const textRef = useTemplateRef("text");

watchEffect(() => {
	if (textRef.value) {
		isTruncated.value =
			textRef.value.scrollHeight > textRef.value.clientHeight;
	}
});

defineExpose({
	compute: () => {
		if (textRef.value) {
			isTruncated.value =
				textRef.value.scrollHeight > textRef.value.clientHeight;
		}
	},
});
</script>

<template>
	<template v-if="variant == 'overview' || !variant">
		<div class="flex flex-col gap-1 items-start">
			<div class="relative">
				<div
					class="text-wrap wrap-break-word overflow-y-hidden text-ellipsis"
					:style="{
						display: '-webkit-box',
						'-webkit-line-clamp': props.maxLine,
						'-webkit-box-orient': 'vertical',
					}"
					ref="text"
				>
					<slot></slot>
				</div>
				<UiUtility
					class="absolute top-0 left-0 z-10"
					v-model="isExpanderOpen"
				>
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

	<template v-else>
		<div class="flex flex-col gap-1 items-start">
			<div
				class="text-wrap wrap-break-word overflow-y-hidden text-ellipsis"
				:style="isExpanderOpen ? {} : {
					display: '-webkit-box',
					'-webkit-line-clamp': props.maxLine,
					'-webkit-box-orient': 'vertical',
				}"
				ref="text"
			>
				<slot></slot>
			</div>
			<UiButton
				size="xs"
				:icon="isExpanderOpen ? 'ph:arrows-in-simple-bold' : 'ph:arrows-out-simple-bold'"
				variant="ghost"
				@click="isExpanderOpen = !isExpanderOpen"
				v-if="isTruncated"
				:active="isExpanderOpen"
			>
				<template v-if="isExpanderOpen">Show Less</template>
				<template v-else>Show More</template>
			</UiButton>
		</div>
	</template>
</template>
