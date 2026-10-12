<script setup lang="ts">
const props = defineProps<{
    watched?: boolean;
    imageBucketId: string;
    borderColor?: string;

    status?: "live" | "event" | "meeting";
    instantMessage?: string;

    name: string;
}>();
</script>

<template>
    <div class="flex flex-col items-center gap-2 font-inter">
        <div
            class="rounded-full border-4 size-20 relative"
            ref="instant"
            :style="{
                borderColor: props.watched
                    ? '#e2e8f0'
                    : props.borderColor || '#00596a',
            }"
        >
            <div
                v-if="props.status"
                class="-top-2 -right-2 absolute leading-none px-2 py-1 text-xs text-white font-bold rounded-full"
                :class="{
                    'bg-status-info': props.status == 'meeting',
                    'bg-status-warning': props.status == 'live',
                    'bg-status-purple': props.status == 'event',
                }"
            >
                <template v-if="props.status == 'live'">LIVE</template>
                <Icon
                    v-else
                    :name="
                        props.status == 'event'
                            ? 'ph:shooting-star-fill'
                            : 'ph:video-camera-fill'
                    "
                    class="size-3"
                ></Icon>
            </div>
            <NuxtImg :src="props.imageBucketId" class="rounded-full"> </NuxtImg>
        </div>
        <span class="max-w-18 truncate text-xs font-semibold text-content">{{
            name
        }}</span>
    </div>
</template>
