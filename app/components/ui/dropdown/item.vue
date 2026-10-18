<script setup lang="ts">
const emiiter = defineEmits<{ select: [] }>();
</script>

<template>
    <div
        class="p-2 text-nowrap flex flex-nowrap rounded-lg hover:bg-surface-low px-3 py-1"
        @click="emiiter('select')"
    >
        <slot></slot>
    </div>
</template>
