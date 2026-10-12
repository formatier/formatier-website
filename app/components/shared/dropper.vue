<script setup lang="ts">
const model = defineModel<boolean>({ default: false });

const content = ref();
const tags = ref<string[]>([]);

const roomNames = ref<string[]>(["Room 1", "Room 2", "Room 3"]);

const isOpen = ref(false);
</script>

<template>
    <UiModal :show="model">
        <template #outer>
            <slot></slot>
        </template>
        <UiModalWindow @close="model = false">
            <template #title-bar>
                <UiModalWindowTitle
                    icon="ph:package"
                    title="Drop some post"
                    description="You can drop a post here to publish it."
                ></UiModalWindowTitle>
            </template>
            <template #title-menu>
                <UiModalWindowTitleMenu>
                    <div class="flex items-center gap-2">
                        <span class="text-sm text-content-muted">
                            Drop into
                        </span>
                        <UiDropdown @select="console.log" v-model:open="isOpen">
                            <UiButton
                                icon="ph:caret-down-bold"
                                variant="common"
                                size="xs"
                                @click="isOpen = !isOpen"
                                >Select</UiButton
                            >
                            <template #content="{ select }">
                                <UiDropdownContent>
                                    <UiDropdownItem
                                        v-for="roomName in roomNames"
                                        @select="select(roomName)"
                                    >
                                        {{ roomName }}
                                    </UiDropdownItem>
                                </UiDropdownContent>
                            </template>
                        </UiDropdown>
                    </div>
                </UiModalWindowTitleMenu>
            </template>
            <UiEditor containerClass="max-h-[70dvh] overflow-y-auto">
                <template #toolbar="{ toggle, convertBlock }">
                    <UiEditorToolbar
                        @toggle="toggle"
                        @convertBlock="convertBlock"
                    >
                    </UiEditorToolbar>
                </template>
                <template #placeholder> Write your post here... </template>
            </UiEditor>
        </UiModalWindow>
    </UiModal>
</template>
