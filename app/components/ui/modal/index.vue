<script setup lang="ts">
const props = defineProps<{
    show: boolean;
}>();

const modalViewRef = useTemplateRef("modal-view");

watch(props, (newProps, oldProps) => {
    if (newProps.show !== oldProps.show) {
        if (newProps.show) {
        }
    }
});
</script>

<template>
    <slot name="outer"></slot>
    <Teleport to="body">
        <div
            ref="modal-view"
            v-if="props.show"
            class="fixed z-50 w-dvw h-dvh top-0 flex flex-col justify-center items-center backdrop-blur-xs bg-surface-low/10"
        >
            <slot></slot>
        </div>
    </Teleport>
</template>
