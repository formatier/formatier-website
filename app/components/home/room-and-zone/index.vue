<script setup lang="ts">
const props = defineProps<{
    id: string;
    name: string;
    iconBucketId: string;
    shortDescription?: string;
}>();
</script>

<template>
    <div
        class="flex gap-3 p-2 hover:bg-primary-light hover:text-primary hover:**:text-inherit hover:shadow-sm transition duration-75 rounded-3xl font-inter"
    >
        <NuxtImg
            class="size-12 rounded-2xl"
            :src="props.iconBucketId"
        ></NuxtImg>
        <div class="flex h-full w-full flex-col justify-between">
            <h2
                class="text-content font-semibold transition-colors duration-75"
            >
                {{ props.name }}
            </h2>
            <p class="text-content-subtle transition-colors duration-75">
                {{ props.shortDescription }}
            </p>
        </div>
    </div>
</template>
