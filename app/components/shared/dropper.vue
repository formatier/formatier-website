<script setup lang="ts">
const model = defineModel<boolean>({ default: false });
const isSelectorOpen = ref<boolean>(false);
const isDraftsOpen = ref<boolean>(false);

const content = ref("");
const tags = ref<string[]>([]);

const roomNames = ref<string[]>(["Room 1", "Room 2", "Room 3"]);

const searchValue = ref("");

watch(searchValue, (searchValue) => {
	console.log(searchValue);
});
</script>

<template>
	<UiModal :show="model" blur>
		<template #outer>
			<slot></slot>
		</template>
		<UiModalWindow
			@close="model = false"
			:close-icon="content ? 'ph:file-dashed' : undefined"
		>
			<template #title-bar>
				<UiModalWindowTitle
					icon="ph:package"
					title="Drop a Post"
					description="You can drop a post here to publish it."
				></UiModalWindowTitle>
			</template>
			<template #title-menu>
				<UiModalWindowTitleMenu>
					<div class="flex items-center gap-2">
						<span class="text-sm text-content-muted">
							Drop into
						</span>

						<UiModal :show="isSelectorOpen">
							<template #outer>
								<UiButton
									icon="ph:arrows-out-bold"
									variant="common"
									size="xs"
									@click="isSelectorOpen = true"
									>Select</UiButton
								>
							</template>
							<UiModalWindow @close="isSelectorOpen = false">
								<template #title-bar>
									<UiModalWindowTitle
										icon="ph:list-magnifying-glass"
										title="Where Will The Post be Dropped"
										description="You can select where you want the post to be dropped here. Multiple selection is allowed. You can use drop trigger to set action before drop or after drop the post."
									>
									</UiModalWindowTitle>
								</template>
								<template #title-menu>
									<UiModalWindowTitleMenu>
										<UiInputValue
											placeholder="search"
											v-model="searchValue"
										></UiInputValue>
									</UiModalWindowTitleMenu>
								</template>
							</UiModalWindow>
						</UiModal>
					</div>
					<div>
						<UiModal :show="isDraftsOpen">
							<template #outer>
								<UiButton
									icon="ph:file-dashed-bold"
									variant="primary-inverse"
									size="xs"
									@click="isDraftsOpen = true"
									>Drafts</UiButton
								>
							</template>
							<UiModalWindow @close="isDraftsOpen = false">
								<template #title-bar>
									<UiModalWindowTitle
										icon="ph:file-magnifying-glass"
										title="Continue Writing With a Draft"
										description="You can select draft to continue writing. Although, you can delete draft you want too."
									>
									</UiModalWindowTitle>
								</template>
								<template #title-menu>
									<UiModalWindowTitleMenu>
										<UiInputValue
											placeholder="search"
											v-model="searchValue"
										></UiInputValue>
									</UiModalWindowTitleMenu>
								</template>
							</UiModalWindow>
						</UiModal>
					</div>
				</UiModalWindowTitleMenu>
			</template>
			<UiEditor
				containerClass="max-h-[70dvh] overflow-y-auto"
				@on-update="
					(newContent) => {
						content = newContent;
					}
				"
			>
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
