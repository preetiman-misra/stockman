<script setup lang="ts">
const sidebarItems = [
    {
        title: 'Dashboard',
        icon: 'i-lucide-home',
        url: '/'
    },
    {
        title: 'Items',
        icon: 'i-lucide-box',
        url: '/items'
    },
    {
        title: 'Inventory',
        icon: 'i-lucide-notebook-text',
        url: '/inventory'
    }
]
</script>

<template>
    <aside class="flex flex-col w-[276px] min-h-screen border-r border-accented">
        <!-- Header -->
        <NuxtLink to="/" class="p-6 border-b border-accented flex space-x-2 justify-start items-center">
            <UIcon name="i-lucide-package" class="size-7"/>
            <span class="font-medium text-xl">stockman</span>
        </NuxtLink>
        <!-- Content -->
        <div class="p-4 space-y-4">
            <!-- Sidebar Item -->
            <NuxtLink
                v-for="item in sidebarItems"
                :key="item.title"
                class="w-full rounded-md hover:bg-accented p-2 flex items-center justify-start space-x-2"
                :class="{
                    'bg-accented': useRoute().path === item.url,
                }"
                :to="item.url"
            >
                <UIcon :name="item.icon" class="size-5"/>
                <span>{{ item.title }}</span>
            </NuxtLink>
        </div>
    </aside>
</template>

<style scoped>

</style>