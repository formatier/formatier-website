<script lang="ts" setup>
const props = defineProps<{
    path: string;
    pageId: string;
    icon: string;
}>();
const emitter = defineEmits<{
    activeChanged: [];
}>();

const route = useRoute();

const isActive = computed(() => {
    return route.meta.pageId == props.pageId;
});

watch(isActive, (value) => {
    if (value) {
        emitter("activeChanged");
    }
});
</script>

<template>
    <NuxtLink
        class="h-10 rounded-full sm:h-full px-4 flex-col items-center justify-center transition-colors duration-100 text-base flex gap-1 flex-1 relative p-1"
        :class="{
            'bg-primary-light text-primary hover:bg-white': !isActive,
            'bg-primary text-white hover:bg-primary-hover': isActive,
        }"
        :to="props.path"
        ref="link"
    >
        <Icon
            :name="props.icon + (isActive ? '-fill' : '-bold')"
            class="size-4 min-w-4 min-h-4"
        />
        <span
            class="hidden sm:block overflow-x-hidden font-semibold font-inter leading-none text-xs text-nowrap"
        >
            <slot></slot>
        </span>
    </NuxtLink>
</template>
