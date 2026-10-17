<script setup lang="ts">
import gsap from 'gsap';
const model = defineModel<boolean>({ default: false });

const onEnter = (el: Element, done: () => void) => {
	gsap.fromTo(
		el,
		{ opacity: 0, scale: 0.85, y: -20 },
		{
			opacity: 1,
			scale: 1,
			y: 0,
			duration: 0.2,
			ease: "power1.out",
			onComplete: done,
		},
	);
};

const onLeave = (el: Element, done: () => void) => {
	gsap.to(el, {
		opacity: 0,
		scale: 0.85,
		y: -20,
		duration: 0.2,
		ease: "power1.in",
		onComplete: done,
	});
};
</script>

<template>
	<Transition
        @enter="onEnter"
        @leave="onLeave"
    >
		<div
			class="p-2 bg-surface-card border-surface-border border rounded-lg shadow flex flex-col gap-2"
			v-if="model"
		>
			<div
				class="flex justify-between items-center border-b border-b-surface-border pb-2"
			>
				<div
					class="flex items-center gap-1 text-content-muted font-bold"
				>
					<Icon name="ph:arrows-out-simple-bold"></Icon>
					<p class="text-sm">Expanded Text</p>
				</div>
				<UiButton
					variant="primary-inverse"
					size="xs"
					icon="ph:x-bold"
					@click="model = false"
					>Close</UiButton
				>
			</div>
			<slot></slot>
		</div>
	</Transition>
</template>
