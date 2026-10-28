<script setup lang="ts">
const colorMode = useColorMode()

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
		path: "/explore",
		pageId: "explore",
		icon: "ph:magnifying-glass",
		label: "Explore",
	},
	{
		path: "/mail",
		pageId: "mail",
		icon: "ph:envelope-open",
		label: "Mail",
	},
	{
		path: "/connect",
		pageId: "connect",
		icon: "ph:lightbulb",
		label: "Connect",
	},
];

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const linkContainerRef = useTemplateRef("linkContainer");

function animateContainer() {
	linkContainerRef.value?.animateContainer();
}

const linkMobileContainerRef = useTemplateRef("linkMobileContainer");

function animateMobileContainer() {
	linkMobileContainerRef.value?.animateContainer();
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
					<UiButton variant="common" size="sm" icon-only :icon="colorMode.value === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'" @click="toggleTheme()"/>
				</template>
			</LayoutNav>
		</template>

		<slot></slot>

		<template #mobile-nav>
			<LayoutMobileNavLinkContainer ref="linkMobileContainer">
				<LayoutMobileNavLink
					v-for="link in links"
					:key="link.pageId"
					:pageId="link.pageId"
					:path="link.path"
					:icon="link.icon"
					@activeChanged="animateMobileContainer()"
				>
					{{ link.label }}
				</LayoutMobileNavLink>
			</LayoutMobileNavLinkContainer>
		</template>
	</Layout>
</template>
