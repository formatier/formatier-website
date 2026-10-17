<template>
	<UiCard>
		<UiCardContainer>
			<SharedPostCardProfile
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
				:created-at="0"
				:spacial-tag="{
					color: '#000000',
					title: 'Waiting for response',
				}"
			>
			</SharedPostCardProfile>
			<SharedPostCardContent></SharedPostCardContent>
			<div class="flex gap-4"></div>
			<SharedPostCardRate></SharedPostCardRate>
		</UiCardContainer>
	</UiCard>
</template>
