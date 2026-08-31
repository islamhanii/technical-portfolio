<script setup>
import { Icon } from '@iconify/vue'
import {
    ArrowUpRight,
    ExternalLink,
} from 'lucide-vue-next'

import Badge from '@/components/common/Badge.vue'

defineProps({
    project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article
        class="group overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/20 hover:bg-zinc-900/50">
        <div class="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-zinc-900">
            <img v-if="project.image" :src="project.image" :alt="project.name"
                class="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />

            <div v-else
                class="flex h-full items-center justify-center bg-gradient-to-br from-indigo-950/50 to-zinc-950">
                <span class="text-5xl font-black text-white/5">
                    {{ project.name.charAt(0) }}
                </span>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>

            <div
                class="absolute bottom-4 left-4 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
                {{ project.category }}
            </div>
        </div>

        <div class="p-6">
            <div class="flex items-start justify-between gap-4">
                <div>
                    <h3 class="text-xl font-bold text-white">
                        {{ project.name }}
                    </h3>

                    <p class="mt-2 text-sm leading-6 text-zinc-500">
                        {{ project.shortDescription }}
                    </p>
                </div>

                <ArrowUpRight :size="20" class="shrink-0 text-zinc-700 transition group-hover:text-indigo-400" />
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
                <Badge v-for="technology in project.technologies.slice(0, 5)" :key="technology" :text="technology" />
            </div>

            <div class="mt-6 flex items-center gap-4">
                <RouterLink :to="`/projects/${project.slug}`"
                    class="text-sm font-semibold text-indigo-400 transition hover:text-indigo-300">
                    Case Study
                </RouterLink>

                <a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-white">
                    <Icon icon="simple-icons:github" class="h-[15px] w-[15px]" />
                    Code
                </a>

                <a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-white">
                    <ExternalLink :size="15" />
                    Live
                </a>
            </div>
        </div>
    </article>
</template>