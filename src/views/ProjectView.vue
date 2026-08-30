<script setup>
import {
    ArrowLeft,
    ExternalLink,
    Github,
    CheckCircle2,
} from 'lucide-vue-next'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Badge from '@/components/common/Badge.vue'
import { projects } from '@/data/projects'

const route = useRoute()

const project = computed(() =>
    projects.find(
        item => item.slug === route.params.slug
    )
)
</script>

<template>
    <div class="min-h-screen bg-zinc-950">
        <div v-if="project" class="container-custom py-12 pt-28">
            <!-- Back -->
            <RouterLink to="/#projects"
                class="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
                <ArrowLeft :size="16" />

                Back to projects
            </RouterLink>

            <!-- Header -->
            <div class="mt-12 max-w-4xl">
                <p class="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    {{ project.category }}
                </p>

                <h1 class="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
                    {{ project.name }}
                </h1>

                <p class="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                    {{ project.description }}
                </p>

                <div class="mt-7 flex flex-wrap gap-2">
                    <Badge v-for="technology in project.technologies" :key="technology" :text="technology" />
                </div>

                <div class="mt-8 flex flex-wrap gap-3">
                    <a v-if="project.links.github" :href="project.links.github" target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-500">
                        <Github :size="16" />
                        View Code
                    </a>

                    <a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
                        <ExternalLink :size="16" />
                        Live Project
                    </a>
                </div>
            </div>

            <!-- Image -->
            <div class="mt-14 overflow-hidden rounded-3xl border border-white/5 bg-zinc-900">
                <img v-if="project.image" :src="project.image" :alt="project.name"
                    class="max-h-[650px] w-full object-cover" />

                <div v-else
                    class="flex aspect-video items-center justify-center bg-gradient-to-br from-indigo-950/50 to-zinc-950">
                    <span class="text-8xl font-black text-white/5">
                        {{ project.name.charAt(0) }}
                    </span>
                </div>
            </div>

            <!-- Main Content -->
            <div class="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
                <div>
                    <!-- Features -->
                    <section>
                        <h2 class="text-2xl font-bold text-white">
                            Key Features
                        </h2>

                        <div class="mt-6 grid gap-3 sm:grid-cols-2">
                            <div v-for="feature in project.features" :key="feature"
                                class="flex gap-3 rounded-xl border border-white/5 bg-zinc-900/30 p-4">
                                <CheckCircle2 :size="18" class="mt-0.5 shrink-0 text-indigo-400" />

                                <span class="text-sm leading-6 text-zinc-400">
                                    {{ feature }}
                                </span>
                            </div>
                        </div>
                    </section>

                    <!-- Challenges -->
                    <section class="mt-16">
                        <h2 class="text-2xl font-bold text-white">
                            Challenges
                        </h2>

                        <div class="mt-6 space-y-4">
                            <div v-for="challenge in project.challenges" :key="challenge"
                                class="border-l-2 border-indigo-500/50 pl-5 text-sm leading-7 text-zinc-400">
                                {{ challenge }}
                            </div>
                        </div>
                    </section>

                    <!-- Solutions -->
                    <section class="mt-16">
                        <h2 class="text-2xl font-bold text-white">
                            Approach & Solutions
                        </h2>

                        <div class="mt-6 space-y-4">
                            <div v-for="solution in project.solutions" :key="solution"
                                class="border-l-2 border-emerald-500/40 pl-5 text-sm leading-7 text-zinc-400">
                                {{ solution }}
                            </div>
                        </div>
                    </section>

                    <!-- Architecture -->
                    <section class="mt-16">
                        <h2 class="text-2xl font-bold text-white">
                            Architecture
                        </h2>

                        <div class="mt-6 grid gap-3 sm:grid-cols-2">
                            <div v-for="item in project.architecture" :key="item"
                                class="rounded-xl border border-white/5 bg-zinc-900/30 px-5 py-4 text-sm text-zinc-400">
                                {{ item }}
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Sidebar -->
                <aside>
                    <div class="sticky top-28 rounded-2xl border border-white/5 bg-zinc-900/30 p-6">
                        <h3 class="font-semibold text-white">
                            Project Details
                        </h3>

                        <dl class="mt-6 space-y-5">
                            <div>
                                <dt class="text-xs uppercase tracking-wider text-zinc-600">
                                    Role
                                </dt>

                                <dd class="mt-1 text-sm text-zinc-300">
                                    {{ project.role }}
                                </dd>
                            </div>

                            <div>
                                <dt class="text-xs uppercase tracking-wider text-zinc-600">
                                    Status
                                </dt>

                                <dd class="mt-1 text-sm text-zinc-300">
                                    {{ project.status }}
                                </dd>
                            </div>

                            <div>
                                <dt class="text-xs uppercase tracking-wider text-zinc-600">
                                    Category
                                </dt>

                                <dd class="mt-1 text-sm text-zinc-300">
                                    {{ project.category }}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </aside>
            </div>
        </div>

        <!-- Not Found -->
        <div v-else class="container-custom flex min-h-screen items-center justify-center text-center">
            <div>
                <p class="text-6xl font-black text-zinc-800">
                    404
                </p>

                <h1 class="mt-4 text-2xl font-bold text-white">
                    Project not found
                </h1>

                <RouterLink to="/" class="mt-6 inline-block text-sm text-indigo-400 hover:text-indigo-300">
                    Return home
                </RouterLink>
            </div>
        </div>
    </div>
</template>