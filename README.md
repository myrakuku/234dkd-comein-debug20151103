
## Important message

    node version: v20.19.5
    Next js: v15.5.6
    Tailwind: v4.1

#### 1. Remove Dark Mode & Remove "prefers-color-scheme: dark" on globals.css
    // app/layout.tsx
    export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-TW" className="light">
        <head>
            {/* 清除可能的緩存樣式 */}
            <meta name="theme-color" content="#ffffff" />
            <style dangerouslySetInnerHTML={{
            __html: `
                /* 強制重置主題相關樣式 */
                * { 
                color-scheme: light !important; 
                }
                html, body { 
                background: white !important; 
                color: black !important; 
                }
            `
            }} />
        </head>
        <body className="bg-white text-black">
            {children}
        </body>
        </html>
    )
    }


    /* app/globals.css */
    /* 確保 light 主題的樣式 */
    .light {
    --background: #ffffff;
    --foreground: #000000;
    }

    .light body {
    background: #ffffff;
    color: #000000;
    }


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

