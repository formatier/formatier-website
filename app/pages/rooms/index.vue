<script setup lang="ts">
definePageMeta({
	pageId: "rooms",
});
</script>

<template>
	<RoomsHeader>
		<template #left>
			<UiLabel> Formatier Room </UiLabel>
		</template>

		<template #right>
			<UiButton size="md" icon="ph:book-bookmark" variant="common">
				Room rules set
			</UiButton>
			<UiButton size="md" icon="ph:plus"> Create new room </UiButton>
		</template>
	</RoomsHeader>

	<SharedHeader>
		<SharedHeaderLabel>
			study space and community zones
			<UiLabel variant="primary-inverse" size="xs">
				V1.VALENTINA
			</UiLabel>
		</SharedHeaderLabel>

		<SharedHeaderHero>
			Rooms and Zones
		</SharedHeaderHero>
		<SharedHeaderDescription>
			Explore you frind. Meet with you new frinds. Share your new knowladge. Do everthing on Formatier room.
		</SharedHeaderDescription>
	</SharedHeader>

    <SharedLayoutLCcR>
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

        <template #right>
            
        </template>

        <UiCard>
			
		</UiCard>
    </SharedLayoutLCcR>
</template>
