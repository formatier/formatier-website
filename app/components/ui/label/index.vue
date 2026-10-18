<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        variant?: "primary" | "primary-inverse" | "common";
        size?: "xs" | "sm"
    }>(),
    {
        variant: "common",
        size: "sm"
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

    if (props.size == "sm") {
        classNames.push("text-sm", "shadow-sm hover:shadow-md")
    } else {
        classNames.push("text-xs", "shadow-xs hover:shadow-sm")
    }

    return classNames;
});
</script>

<template>
    <div
        class="font-semibold font-plus-jakarta-sans py-1 px-4 rounded-full transition duration-75"
        :class="classes"
    >
        <slot></slot>
    </div>
</template>
