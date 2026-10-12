<script setup lang="ts">
const emitter = defineEmits<{
    close: [];
}>();
</script>

<template>
    <div
        class="bg-surface-card border-surface-border border shadow-sm rounded-4xl flex flex-col min-w-xs md:min-w-sm lg:min-w-md xl:min-w-lg 2xl:min-w-xl"
    >
        <div
            class="px-5 py-3 flex justify-between items-center border-b border-b-surface-border"
        >
            <div>
                <slot name="title-bar"></slot>
            </div>
            <div>
                <UiButton
                    @click="emitter('close')"
                    variant="primary-inverse"
                    icon="ph:x"
                    iconOnly
                >
                </UiButton>
            </div>
        </div>
        <div>
            <slot name="title-menu"></slot>
        </div>
        <div class="p-5">
            <slot></slot>
        </div>
    </div>
</template>
