<template>
    <div
        class="bg-surface-card border-surface-border border shadow-sm rounded-4xl gap-4 flex flex-col p-4 lg:p-6"
    >
        <div class="flex items-center justify-between">
            <slot name="labels"></slot>
        </div>
        <UiDivider></UiDivider>
        <div class="flex">
            <slot></slot>
        </div>
    </div>
</template>
