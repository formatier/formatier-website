<script setup lang="ts">
definePageMeta({
	pageId: "home",
});

const showDropper = ref(false);
</script>

<template>
	<div class="px-vision pt-6 mb-8">
		<HomeBanner>
			<template #labels>
				<div class="flex gap-2">
					<UiLabel variant="primary">Welcome to Formatier</UiLabel>
					<UiLabel variant="common">Add Integration</UiLabel>
				</div>
				<div class="flex gap-2">
					<SharedDropper v-model="showDropper">
						<UiButton
							icon="ph:package-bold"
							@click="showDropper = true"
							>Drop Content</UiButton
						>
					</SharedDropper>
				</div>
			</template>
			<HomeBannerInstantContainer>
				<HomeBannerInstant
					imageBucketId="https://picsum.photos/200"
					status="event"
					name="GornChanX"
					v-for="value in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
				></HomeBannerInstant>
			</HomeBannerInstantContainer>
		</HomeBanner>
	</div>

	<HomeContentContainer>
		<template #left>
			<UiCard>
				<UiCardTitle>Room and Zone</UiCardTitle>
				<UiCardContainer>
					<div class="flex flex-col gap-2">
						<HomeRoomAndZone
							id=""
							name="แก้งคร้อวิทยา"
							shortDescription="โรงเรียนดังหลังวัดชัย"
							iconBucketId="https://picsum.photos/200"
							v-for="value in [0, 1, 2, 3]"
						/>
					</div>
				</UiCardContainer>
			</UiCard>
		</template>

		<SharedPostCard
			:room="{
				name: 'Rethink.z',
				id: 'ax2byc0',
			}"
			:profile="{
				name: 'GornChanZ',
				verified: true,
				username: 'gornchan.z',
				image: 'https://picsum.photos/200',
			}"
			:content="{
				content: 'Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this. Dont put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this.',
				tags: ['first post'],
				createdAt: 0,
				spacialTag: {
					title: 'Waiting for response',
					color: '#000000',
				},
			}"
			:rate="{
				isUserLiked: true,
				isUserSaved: true,
				likeCount: 100,
				commentCount: 1000,
				saveCount: 100,
			}"
			v-for="value in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
		></SharedPostCard>

		<template #right>
			<UiCard>
				<UiCardTitle>
					Trandings
					<template #link>
						Realtime
					</template>
				</UiCardTitle>
				<UiCardContainer>
					<div class="flex flex-col gap-4">
						<div class="flex justify-between items-center" v-for="value in ['first post', 'สรุปฟิสิกส์', 'พลีชีพปลายภาค']">
							<div class="flex flex-col">
								<span class="text-content-body text-sm font-bold">#{{ value.toUpperCase() }}</span>
								<span class="text-content-muted text-xs">320 Posts Today!</span>
							</div>
							<div>
								<Icon name="ph:chart-line-up" class="size-5 text-primary"></Icon>
							</div>
						</div>
					</div>
				</UiCardContainer>
			</UiCard>
		</template>
	</HomeContentContainer>
</template>
