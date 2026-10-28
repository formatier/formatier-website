<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const linkContainer = useTemplateRef("linkContainer");

const slot = defineSlots<{
	default: () => any;
}>();

const animateContainer = () => {
	/*let children = linkContainer.value?.children;
	if (!children) return;

	const state = Flip.getState(children, {
		props: "width",
		simple: true,
	});

	nextTick(() => {
		Flip.from(state, {
			duration: 0.75,
			absolute: true,
			ease: "power2.out",
		});
	});*/
};

defineExpose({ animateContainer });
</script>

<template>
	<div class="fixed bottom-4 sm:bottom-6 w-full flex justify-center px-4">
		<div
			class="grid grid-cols-6 lg:hidden bg-primary-light rounded-full max-w-lg w-full gap-1 items-center p-1 shadow-md border border-surface-border"
			ref="linkContainer"
		>
			<slot></slot>
		</div>
	</div>
</template>
