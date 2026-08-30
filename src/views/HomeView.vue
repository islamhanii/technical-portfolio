<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

import HeroSection from '@/components/hero/HeroSection.vue'
import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/SkillsSection.vue'
import ExperienceSection from '@/components/experience/ExperienceSection.vue'
import ProjectsSection from '@/components/projects/ProjectsSection.vue'
import EngineeringSection from '@/components/engineering/EngineeringSection.vue'
import EducationSection from '@/components/education/EducationSection.vue'
import LearningSection from '@/components/learning/LearningSection.vue'
import ArticlesSection from '@/components/articles/ArticlesSection.vue'
import ContactSection from '@/components/contact/ContactSection.vue'
</script>

<template>
    <div class="min-h-screen bg-zinc-950">
        <Navbar />

        <main>
            <HeroSection />

            <AboutSection />

            <SkillsSection />

            <ExperienceSection />

            <ProjectsSection />

            <EngineeringSection />

            <EducationSection />

            <LearningSection />

            <ArticlesSection />

            <ContactSection />
        </main>

        <Footer />
    </div>
</template>