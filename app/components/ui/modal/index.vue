<script setup lang="ts">
import gsap from "gsap";

const props = defineProps<{
	show: boolean;
    blur?: boolean
}>();

const onEnter = (el: Element, done: () => void) => {
	gsap.fromTo(
		el,
		{ opacity: 0, scale: 0.85 },
		{
			opacity: 1,
			scale: 1,
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
		duration: 0.2,
		ease: "power1.in",
		onComplete: done,
	});
};
</script>

<template>
	<slot name="outer"></slot>
	<Teleport to="body">
		<Transition @enter="onEnter" @leave="onLeave">
			<div
				v-if="props.show"
				class="fixed z-50 w-dvw h-dvh top-0 flex flex-col justify-center items-center p-10"
                :class="{
                    'backdrop-blur-xs bg-surface-low/10': props.blur,
                }"
			>
				<slot></slot>
			</div>
		</Transition>
	</Teleport>
</template>
