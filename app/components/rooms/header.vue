<template>
    <div class="py-6 flex justify-between px-vision bg-linear-to-b from-0% from-primary-light to-60% to-surface-canvas">
        <div>
            <slot name="left"/>
        </div>

        <div class="flex gap-4">
            <slot name="right"/>
        </div>
    </div>
</template>