<script setup lang="ts">
const links = [
    {
        path: "/",
        pageId: "home",
        icon: "ph:house",
        label: "Home",
    },
    {
        path: "/rooms",
        pageId: "rooms",
        icon: "ph:users-three",
        label: "Rooms",
    },
    {
        path: "/vault",
        pageId: "vault",
        icon: "ph:vault",
        label: "Vault",
    },
    {
        path: "/mail",
        pageId: "mail",
        icon: "ph:envelope-open",
        label: "Mail",
    },
    {
        path: "/integrations",
        pageId: "integrations",
        icon: "ph:lightbulb",
        label: "Integrations",
    },
    {
        path: "/profile",
        pageId: "profile",
        icon: "ph:user",
        label: "Profile",
    },
];

const linkContainerRef = useTemplateRef("linkContainer");

function animateContainer() {
    linkContainerRef.value?.animateContainer();
}
</script>

<template>
    <Layout>
        <template #nav>
            <LayoutNav>
                <template #links>
                    <LayoutNavLinkContainer ref="linkContainer">
                        <LayoutNavLink
                            v-for="link in links"
                            :key="link.pageId"
                            :pageId="link.pageId"
                            :path="link.path"
                            :icon="link.icon"
                            @activeChanged="animateContainer()"
                        >
                            {{ link.label }}
                        </LayoutNavLink>
                    </LayoutNavLinkContainer>
                </template>

                <template #additional>
                    <UiInputValue placeholder="Search"></UiInputValue>
                </template>
            </LayoutNav>
        </template>

        <slot></slot>
    </Layout>
</template>
