<template>
	<div
		class="bg-surface-card border-surface-border border shadow-sm rounded-4xl flex flex-col"
	>
		<div class="flex items-center justify-between p-4 lg:px-6 lg:pt-6">
			<slot name="labels"></slot>
		</div>
		<UiDivider></UiDivider>
		<div class="overflow-x-auto p-4 lg:px-6 lg:pb-6">
			<div class="flex">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
