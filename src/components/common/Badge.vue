<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <span
        class="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-300">
        {{ text }}
    </span>
</template>