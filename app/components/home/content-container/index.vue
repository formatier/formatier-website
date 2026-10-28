<template>
    <div class="px-vision pb-6 grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] gap-6 items-start mt-8">
        <div class="hidden lg:flex flex-col gap-6 sticky top-25 h-[calc(100dvh-(--spacing(19))-(--spacing(12)))]">
            <slot name="left"></slot>
        </div>
        <div class="flex flex-col gap-6">
            <slot></slot>
        </div>
        <div class="hidden xl:flex flex-col gap-6 sticky top-25 h-[calc(100dvh-(--spacing(19))-(--spacing(12)))]">
            <slot name="right"></slot>
        </div>
    </div>
</template>
