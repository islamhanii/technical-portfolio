<script setup>
import {
    Github,
    Linkedin,
    Mail,
    ArrowUp,
} from 'lucide-vue-next'

import { personal } from '@/data/personal'

const year = new Date().getFullYear()
</script>

<template>
    <footer class="border-t border-white/5 bg-zinc-950">
        <div class="container-custom flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p class="font-semibold text-white">
                    Islam Hani<span class="text-indigo-400">.</span>
                </p>

                <p class="mt-1 text-sm text-zinc-500">
                    Software Engineer · PHP & Laravel Backend Specialist
                </p>

                <p class="mt-3 text-xs text-zinc-600">
                    © {{ year }} Islam Hani. All rights reserved.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <a :href="personal.social.github" target="_blank" rel="noopener noreferrer"
                    class="rounded-lg border border-zinc-800 p-2.5 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    aria-label="GitHub">
                    <Github :size="18" />
                </a>

                <a :href="personal.social.linkedin" target="_blank" rel="noopener noreferrer"
                    class="rounded-lg border border-zinc-800 p-2.5 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    aria-label="LinkedIn">
                    <Linkedin :size="18" />
                </a>

                <a :href="`mailto:${personal.email}`"
                    class="rounded-lg border border-zinc-800 p-2.5 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    aria-label="Email">
                    <Mail :size="18" />
                </a>

                <a href="#home"
                    class="ml-2 rounded-lg border border-zinc-800 p-2.5 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    aria-label="Back to top">
                    <ArrowUp :size="18" />
                </a>
            </div>
        </div>
    </footer>
</template>