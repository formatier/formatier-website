<script setup lang="ts">
const props = defineProps<{
    closeIcon?: string
}>()
const emitter = defineEmits<{
    close: [];
}>();
</script>

<template>
    <div
        class="bg-surface-card border-surface-border border shadow-sm rounded-4xl flex flex-col min-w-xs sm:max-w-sm md:min-w-sm md:max-w-md lg:min-w-md lg:max-w-lg xl:min-w-lg xl:max-w-xl 2xl:min-w-xl "
    >
        <div
            class="px-5 py-3 flex justify-between items-start border-b border-b-surface-border"
        >
            <div>
                <slot name="title-bar"></slot>
            </div>
            <div>
                <UiButton
                    @click="emitter('close')"
                    variant="primary-inverse"
                    :icon="closeIcon ? closeIcon : 'ph:x'"
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
