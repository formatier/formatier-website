<script setup lang="ts">
const props = defineProps<{
	room?: {
		name: string;
		id: string;
	};
	profile: {
		name: string;
		username: string;
		image: string;
		verified: boolean;
	};
	createdAt: number;
	spacialTag?: {
		title: string;
		color: string;
	};
}>();
</script>

<template>
	<div class="flex gap-4 items-start">
		<NuxtImg
			:src="props.profile.image"
			class="size-12 rounded-full"
		></NuxtImg>
		<div class="flex flex-col gap-1 font-plus-jakarta-sans">
			<div class="flex gap-1">
				<NuxtLink
					v-if="props.room?.name"
					:to="`/rooms/${props.room.id}`"
					class="text-content-body hover:underline font-semibold"
				>
					{{ props.room.name }}
				</NuxtLink>
				<span v-if="props.room" class="text-content-subtle">//</span>
				<NuxtLink
					class="flex gap-1 items-center text-content-body hover:underline font-semibold"
					:to="`/profile/${props.profile.username}`"
				>
					<span>
						{{ props.profile.name }}
					</span>
					<Icon name="ph:seal-check-fill" class="text-primary size-4">
					</Icon>
				</NuxtLink>
			</div>
			<div class="flex gap-2">
				<span class="text-xs text-content-subtle">
					{{ new Date(props.createdAt).toLocaleString() }}
				</span>

				<span
					class="text-xs"
					v-if="props.spacialTag"
					:style="{
						color: props.spacialTag.color,
					}"
				>
					{{ props.spacialTag.title }}
				</span>
			</div>
		</div>
	</div>
</template>
