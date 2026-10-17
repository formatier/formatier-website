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

    <UiContentContainer>
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

        <SharedPostCard>
        </SharedPostCard>

        <template #right></template>
    </UiContentContainer>
</template>
