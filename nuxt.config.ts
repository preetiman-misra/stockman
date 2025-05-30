// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    srcDir: "src/",
    modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],
    icon: {
        serverBundle: {
            collections: ['uil', 'mdi', 'lucide'],
        }
    }
})
