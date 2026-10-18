<script setup lang="ts">
const openModel = defineModel<boolean>("open", { default: false });

const emitter = defineEmits<{
    select: [string];
}>();

const handleSelect = (value: string) => {
    emitter("select", value);
    openModel.value = false;
};
</script>

<template>
    <div class="flex flex-col relative">
        <slot></slot>
        <div class="absolute mt-8 z-500" v-if="openModel">
            <slot name="content" :select="handleSelect"></slot>
        </div>
    </div>
</template>
