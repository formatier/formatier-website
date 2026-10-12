<template>
    <div class="px-vision grid grid-cols-[1fr_2fr_1fr] gap-6">
        <div class="flex flex-col gap-6">
            <slot name="left"></slot>
        </div>
        <div class="flex flex-col gap-6">
            <slot></slot>
        </div>
        <div class="flex flex-col gap-6">
            <slot name="right"></slot>
        </div>
    </div>
</template>
