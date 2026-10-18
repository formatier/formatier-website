<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		variant?:
			| "primary"
			| "primary-inverse"
			| "secondary"
			| "secondary-inverse"
			| "common"
			| "ghost";
		active?: boolean;
		disabled?: boolean;
		size?: "xs" | "sm" | "md" | "lg";
		icon?: string;
		iconOnly?: boolean;
	}>(),
	{
		variant: "primary",
		active: false,
		disabled: false,
		size: "md",
		icon: undefined,
	},
);

const emitter = defineEmits({
	click: [],
});

const variantClass = computed(() => {
	let defaultClass: string[] = ["disabled:opacity-50"];
	switch (props.variant) {
		case "primary":
			defaultClass.push("text-primary-light hover:bg-primary-hover");
			if (props.active) defaultClass.push("bg-primary-active");
			else defaultClass.push("bg-primary");
			break;
		case "primary-inverse":
			defaultClass.push("hover:bg-primary", "hover:text-primary-light");
			if (props.active)
				defaultClass.push("text-primary-light", "bg-primary-active");
			else defaultClass.push("bg-primary-light", "text-primary");
			break;
		case "secondary":
			defaultClass.push("text-white hover:bg-tertiary-hover");
			if (props.active) defaultClass.push("bg-tertiary-dark");
			else defaultClass.push("bg-tertiary");
			break;
		case "secondary-inverse":
			defaultClass.push("hover:bg-tertiary-hover", "hover:text-white");
			if (props.active)
				defaultClass.push("text-white", "bg-tertiary-dark");
			else defaultClass.push("bg-tertiary-light", "text-tertiary-dark");
			break;
		case "common":
			defaultClass.push("text-primary-active", "border");
			if (props.active)
				defaultClass.push(
                    "hover:bg-surface-card",
					"bg-primary-light",
					"border-surface-border-focus",
				);
			else
				defaultClass.push(
					"hover:bg-primary-light",
					"bg-surface-card",
					"border-surface-border",
				);
			break;
		case "ghost":
			defaultClass.push("bg-transparent", "hover:bg-primary-light", "text-primary");
			break;
	}
	return defaultClass;
});

const sizeClass = computed(() => {
	let classNames: string[] = [];
	if (props.iconOnly) {
		switch (props.size) {
			case "xs":
				classNames.push("text-xs", "size-6");
				break;
			case "sm":
				classNames.push("text-xs", "size-8");
				break;
			case "md":
				classNames.push("text-sm", "size-9");
				break;
			case "lg":
				classNames.push("text-base", "size-11");
				break;
		}
	} else {
		switch (props.size) {
			case "xs":
				classNames.push("text-xs", "h-6", "px-2");
				break;
			case "sm":
				classNames.push("text-xs", "h-8", "px-4");
				break;
			case "md":
				classNames.push("text-sm", "h-9", "px-5");
				break;
			case "lg":
				classNames.push("text-base", "h-11", "px-6");
				break;
		}
	}
	return classNames;
});

const classes = computed(() => {
	return [variantClass.value.join(" "), sizeClass.value.join(" ")];
});
</script>

<template>
	<button
		class="gap-2 font-semibold flex items-center justify-center transition-all duration-75 rounded-full"
		:class="`${props.iconOnly ? '' : 'min-w-16'} ${classes.join(' ')}`"
		:disabled="props.disabled"
		@click="emitter('click')"
	>
		<Icon
			v-if="props.icon"
			:name="props.icon"
			:class="{
				'size-3': props.size == 'xs',
				'size-4': props.size == 'sm',
				'size-5': props.size == 'md',
				'size-6': props.size == 'lg',
			}"
		></Icon>
		<slot></slot>
	</button>
</template>
