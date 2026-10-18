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
				<span class="hidden sm:block">{{ props.likeCount || "First" }}</span>
			</UiButton>
			<UiButton variant="common" size="sm" icon="ph:chat">
                <span class="hidden sm:block">{{ props.commentCount || "First" }}</span>
            </UiButton>
			<UiButton variant="common" size="sm" icon="ph:bookmark-simple">
				<span class="hidden sm:block">{{ props.saveCount || "First" }}</span>
			</UiButton>
		</div>

        <div>
            <UiButton variant="common" size="sm" icon="ph:share-network">
				<span class="hidden sm:block">Share</span>
			</UiButton>
        </div>
	</div>
</template>
