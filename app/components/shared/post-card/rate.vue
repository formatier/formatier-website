<script setup lang="ts">
const props = defineProps<{
	isUserLiked: boolean;
	isUserSaved: boolean;
	likeCount: number;
	commentCount: number;
	saveCount: number;
}>();
</script>

<template>
	<div class="flex justify-between">
		<div class="flex gap-2">
			<UiButton variant="common" size="sm" :icon="props.isUserLiked ? 'ph:heart-fill' : 'ph:heart'" :active="props.isUserLiked">
				{{ props.likeCount || "First" }}
			</UiButton>
			<UiButton variant="common" size="sm" icon="ph:chat">
                {{ props.commentCount || "First" }}
            </UiButton>
			<UiButton variant="common" size="sm" icon="ph:bookmark-simple">
				{{ props.saveCount || "First" }}
			</UiButton>
		</div>

        <div>
            <UiButton variant="common" size="sm" icon="ph:share-network">
				Share
			</UiButton>
        </div>
	</div>
</template>
