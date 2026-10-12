<script setup lang="ts">
const emitter = defineEmits<{ toggle: ["bold" | "underline" | "italic"] }>();
</script>

<template>
    <div class="flex overflow-x-scroll gap-2">
        <UiButton
            icon="ph:text-b-bold"
            variant="common"
            iconOnly
            size="sm"
            @click="emitter('toggle', 'bold')"
        >
        </UiButton>
        <UiButton
            icon="ph:text-underline-bold"
            iconOnly
            size="sm"
            variant="common"
            @click="emitter('toggle', 'underline')"
        >
        </UiButton>
        <UiButton
            icon="ph:text-italic-bold"
            iconOnly
            size="sm"
            variant="common"
            @click="emitter('toggle', 'italic')"
        >
        </UiButton>
    </div>
</template>
