
## Important message

    node version: v20.19.5
    Next js: v15.5.6
    Tailwind: v4.1

#### 1. Remove Dark Mode & Remove "prefers-color-scheme: dark" on globals.css
npm uninstall next-themes

#### 2. Use react icon
npm install react-icons


#### 3. Install next-sitemap for the SEO
npm i next-sitemap

    3.1 Update the path
        npm run postbuild
    3.2 Generate Map - xml file (already done)
        npx next-sitemap
    3.3 Google Tag
        npm install @next/third-parties
        
#### 4. Fix bug
layout.tsx

    // Add Client Side
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    // 强制 Safari 刷新资源
    import Script from 'next/script';
    <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />

next.config.ts

    // 解决 Safari 资源缓存问题
    const nextConfig = {
    headers: async () => [
        {
            source: '/_next/(.*)',
            headers: [
            { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
            ],
        },
        ],
    };
    module.exports = nextConfig;

