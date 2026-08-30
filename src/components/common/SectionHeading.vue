<script setup>
defineProps({
    eyebrow: {
        type: String,
        default: '',
    },

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        default: '',
    },

    centered: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div :class="[
        'mb-14 max-w-3xl',
        centered ? 'mx-auto text-center' : ''
    ]">
        <p v-if="eyebrow" class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            {{ eyebrow }}
        </p>

        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {{ title }}
        </h2>

        <p v-if="description" class="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
            {{ description }}
        </p>
    </div>
</template>