<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        variant?: "primary" | "primary-inverse" | "common";
    }>(),
    {
        variant: "common",
    },
);

const classes = computed(() => {
    let classNames: string[] = [];
    switch (props.variant) {
        case "primary":
            classNames.push(
                "bg-primary text-primary-light hover:bg-primary-hover",
            );
            break;
        case "primary-inverse":
            classNames.push("bg-primary-light text-primary hover:opacity-80");
            break;
        case "common":
            classNames.push(
                "bg-white border-surface-border border text-content-body",
            );
    }
    return classNames;
});
</script>

<template>
    <div
        class="font-semibold font-plus-jakarta-sans py-1 px-4 text-sm rounded-full shadow-sm hover:shadow-md transition duration-75"
        :class="classes"
    >
        <slot></slot>
    </div>
</template>
