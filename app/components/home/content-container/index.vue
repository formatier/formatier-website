<template>
    <div class="px-vision pb-6 grid lg:grid-cols-[1fr_2fr_1fr] gap-6 items-start">
        <div class="hidden lg:flex flex-col gap-6 sticky top-6 max-h-dvh">
            <slot name="left"></slot>
        </div>
        <div class="flex flex-col gap-6">
            <slot></slot>
        </div>
        <div class="hidden lg:flex flex-col gap-6 sticky top-6 max-h-dvh">
            <slot name="right"></slot>
        </div>
    </div>
</template>
