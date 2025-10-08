const url = 'http://localhost:3000'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        '@nuxt/ui',
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@vueuse/nuxt',
        'nuxt-link-checker',
        'nuxt-og-image',
        'nuxt-schema-org',
        'nuxt-seo-utils',
    ],

    css: ['~/assets/css/main.css'],

    compatibilityDate: '2025-07-16',

    nitro: {
        preset: 'vercel',
        vercel: {
            config: {
                images: {
                    minimumCacheTTL: 2678400, // 31 days
                },
            },
        },
        compressPublicAssets: true,
        experimental: {
            asyncContext: true,
        },
    },

    routeRules: {
        '/__og-image__/image/og.png': {
            headers: {
                'Cache-Control': `max-age=${60 * 60 * 24}`, // 1 day
                'CDN-Cache-Control': `max-age=${60 * 60 * 24 * 30}`, // 30 days
            },
        },
    },

    site: {
        url,
        name: 'Nuxt UI - Starter',
        trailingSlash: false,
    },

    fonts: {
        families: [{ name: 'Geist', provider: 'google' }],
        defaults: {
            weights: [100, 200, 300, 300, 400, 500, 600, 700, 800, 900],
        },
    },

    i18n: {
        baseUrl: url,
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                language: 'en-US',
                name: 'English (US)',
                file: 'en.json',
                icon: 'twemoji:flag-united-states',
            },
            {
                code: 'ja',
                language: 'ja-JP',
                name: '日本語',
                file: 'ja.json',
                icon: 'twemoji:flag-japan',
            },
        ],
        detectBrowserLanguage: {
            redirectOn: 'root',
            useCookie: true,
            cookieKey: 'i18n_redirected',
        },
    },

    icon: {
        customCollections: [{ prefix: 'local', dir: './app/assets/icons' }],
        clientBundle: {
            icons: ['svg-spinners:ring-resize'],
            scan: true,
            includeCustomCollections: true,
        },
    },

    experimental: {
        crossOriginPrefetch: true,
        sharedPrerenderData: true,
    },
})
