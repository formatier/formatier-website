<script setup lang="ts">
const emitter = defineEmits<{ toggle: ["bold" | "underline" | "italic"], convertBlock: ["h1" | "h2" | "h3" | "p"] }>();

const isHeadingListOpen = ref(false)
</script>

<template>
	<div class="flex gap-2 overflow-visible">
		<UiDropdown v-model:open="isHeadingListOpen" @select="(v) => emitter('convertBlock', v as any)">
			<UiButton
				icon="ph:text-h-bold"
				variant="common"
				iconOnly
				size="sm"
				@click="isHeadingListOpen = !isHeadingListOpen"
			></UiButton>
            <template #content="{select}">
                <UiDropdownContent>
                    <UiDropdownItem @select="select('p')">Paragraph</UiDropdownItem>
                    <UiDropdownItem @select="select('h1')">Heading 1</UiDropdownItem>
                    <UiDropdownItem @select="select('h2')">Heading 2</UiDropdownItem>
                    <UiDropdownItem @select="select('h3')">Heading 3</UiDropdownItem>
                </UiDropdownContent>
            </template>
		</UiDropdown>
		<UiButton
			icon="ph:text-b-bold"
			variant="common"
			iconOnly
			size="sm"
			@click="emitter('toggle', 'bold')"
		>
		</UiButton>
		<UiButton
			icon="ph:text-underline-bold"
			iconOnly
			size="sm"
			variant="common"
			@click="emitter('toggle', 'underline')"
		>
		</UiButton>
		<UiButton
			icon="ph:text-italic-bold"
			iconOnly
			size="sm"
			variant="common"
			@click="emitter('toggle', 'italic')"
		>
		</UiButton>
	</div>
</template>
