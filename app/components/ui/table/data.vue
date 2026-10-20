<script setup lang="ts">
const props = defineProps<{
    head?: boolean
}>()
</script>

<template>
    <th v-if="props.head">
        <slot></slot>
    </th>
    <td v-else>
        <slot></slot>
    </td>
</template>