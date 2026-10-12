<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const linkContainer = useTemplateRef("linkContainer");

const slot = defineSlots<{
    default: () => any;
}>();

const animateContainer = () => {
    let children = linkContainer.value?.children;
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
    });
};

defineExpose({ animateContainer });
</script>

<template>
    <div
        class="flex h-10 bg-primary-light rounded-full w-md gap-1 relative items-center px-1"
        ref="linkContainer"
    >
        <slot></slot>
    </div>
</template>
