<script setup lang="ts">
const props = defineProps<{
	room?: {
		name: string
		id: string
	},
	profile: {
		name: string
		username: string
		image: string
		verified: boolean
	},
	content: {
		content: string
		tags: string[]
		createdAt: number
		spacialTag?: {
			title: string
			color: string
		}
	},
	rate: {
		isUserLiked: boolean
		isUserSaved: boolean
		likeCount: number
		commentCount: number
		saveCount: number
	}
}>();
</script>

<template>
	<UiCard>
		<UiCardContainer>
			<SharedPostCardProfile
				:room="props.room"
				:profile="props.profile"
				:created-at="props.content.createdAt"
				:spacial-tag="props.content.spacialTag"
			>
			</SharedPostCardProfile>
			<SharedPostCardContent :content="content.content"></SharedPostCardContent>
			<div class="flex gap-4" v-if="props.content.tags.length > 0">
				<UiLabel size="xs" variant="common" v-for="tag in props.content.tags">#{{ tag.toUpperCase() }}</UiLabel>
			</div>
			<UiDivider></UiDivider>
			<SharedPostCardRate
				:is-user-liked="props.rate.isUserLiked"
				:is-user-saved="props.rate.isUserSaved"
				:like-count="props.rate.likeCount"
				:comment-count="props.rate.commentCount"
				:save-count="props.rate.saveCount"
			></SharedPostCardRate>
		</UiCardContainer>
	</UiCard>
</template>
