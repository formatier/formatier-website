<template>
	<nav
		class="bg-surface-card flex items-center justify-between border-b border-b-surface-border py-4 px-vision"
	>
		<ul class="flex items-center gap-4">
			<NuxtLink to="/" class="h-6 lg:h-7 aspect-31/5">
				<Icon name="forma:logo" class="w-full h-full" />
			</NuxtLink>
			<slot name="links"></slot>
		</ul>

		<ul class="flex items-center gap-4">
			<slot name="additional"></slot>
			<NuxtImg
				src="https://picsum.photos/200"
				class="size-10 rounded-full"
			></NuxtImg>
		</ul>
	</nav>
</template>
