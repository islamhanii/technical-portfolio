<script setup>
import { ref } from 'vue'
import {
    Menu,
    X,
    Download,
} from 'lucide-vue-next'

import { personal } from '@/data/personal'

const mobileOpen = ref(false)

const links = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Skills',
        href: '#skills',
    },
    {
        label: 'Experience',
        href: '#experience',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Engineering',
        href: '#engineering',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
]

function closeMobile() {
    mobileOpen.value = false
}
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50">
        <div class="border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
            <nav class="container-custom flex h-20 items-center justify-between">
                <a href="#home" class="text-lg font-bold tracking-tight" @click="closeMobile">
                    <span class="text-white">IH</span>
                    <span class="text-indigo-400">.</span>
                </a>

                <!-- Desktop -->
                <div class="hidden items-center gap-7 md:flex">
                    <a v-for="link in links" :key="link.href" :href="link.href"
                        class="text-sm text-zinc-400 transition hover:text-white">
                        {{ link.label }}
                    </a>

                    <a :href="personal.cv" download
                        class="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:border-indigo-500 hover:bg-zinc-800">
                        <Download :size="15" />
                        CV
                    </a>
                </div>

                <!-- Mobile Button -->
                <button type="button" class="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-900 md:hidden"
                    aria-label="Toggle menu" @click="mobileOpen = !mobileOpen">
                    <X v-if="mobileOpen" :size="22" />
                    <Menu v-else :size="22" />
                </button>
            </nav>

            <!-- Mobile -->
            <div v-if="mobileOpen" class="border-t border-white/5 bg-zinc-950 md:hidden">
                <div class="container-custom flex flex-col py-5">
                    <a v-for="link in links" :key="link.href" :href="link.href"
                        class="border-b border-zinc-900 py-4 text-sm text-zinc-300" @click="closeMobile">
                        {{ link.label }}
                    </a>

                    <a :href="personal.cv" download
                        class="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
                        @click="closeMobile">
                        <Download :size="16" />
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>