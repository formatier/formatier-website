<script setup lang="ts">
const props = defineProps<{
	placeholder?: string;
}>();

const model = defineModel()
</script>

<template>
	<input
		type="text"
		class="rounded-full border border-surface-border bg-surface-card px-3 py-1.5 font-inter text-sm text-content-body placeholder:text-content-muted outline-none transition-[border-color,box-shadow] duration-100 focus:border-primary/50 focus:ring-4 focus:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/25"
		:placeholder="props.placeholder"
		v-model="model"
	/>
</template>
