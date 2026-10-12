<script lang="ts" setup>
const props = defineProps<{
    icon?: string;
    title: string;
    description?: string;
}>();
</script>

<template>
    <div class="flex gap-3 items-center">
        <div class="size-10 rounded-full p-2 bg-primary-surface">
            <Icon
                :name="props.icon"
                v-if="props.icon"
                class="size-full text-primary"
            />
        </div>
        <div class="flex flex-col">
            <h1 class="text-lg font-semibold text-content font-inter">
                {{ props.title }}
            </h1>
            <p class="text-sm text-content-subtle font-inter">
                {{ props.description }}
            </p>
        </div>
    </div>
</template>
