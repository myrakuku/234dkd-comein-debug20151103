import Image from 'next/image';
import Link from 'next/link';
import Nav from "../../components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "高價回收電子產品 Apple/Samsung/Lenovo等品牌全收 | Comein 專業二手回收門市",
    description: "Comein 高價回收 Apple iPhone、MacBook、Samsung 手機、ASUS 筆電、RAZER 電競設備等各類電子產品！全港最高收購價，即時報價，旺角門市或上門交收，免費清除資料保障隱私。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };


export default function Type() {
    return(
        <>
        <Nav/>
        <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">高價回收各類電子產品</h1>
            {/* All Brand Logo */}
            <div className="text-sm text-center">
                <p className="p-10 sm:px-20 lg:px-30">
                我們所接受的品牌於下面列出，數量繁多恕無法逐項列出，歡迎向我們查詢更多！
                </p>
                <div style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }} className="flex flex-wrap gap-5 justify-center overflow-x-auto">
                    <Image src="/image/Brand_logo/AppleLogo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/Asus-Logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/DELL-Logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/Lenovo-Logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/MSI-Logo-present.jpg" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/Microsoft-logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/Razer-Logo.jpg" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/Samsung-Logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/SONY-Logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/acer-logo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                    <Image src="/image/Brand_logo/panasonic-logo.webp" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '50px' }} alt="" />
                </div>
            </div>
            {/* 1 - Apple */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Apple產品</h1>
                <p className="px-10 pb-2">
                二手回收iPhone 手機、iPad 平板電腦、Mac 電腦、Apple Watch 智慧手錶、AirPods 耳機以及 Apple Vision Pro 虛擬實境頭戴設備等電子產品。
                </p>
                <Link href="/type/Apple" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src="/image/Brand_Collection/Apple.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="" />
                </div>
            </div>
            {/* 2 - Lenovo */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Lenovo產品</h1>
                <p className="px-10 pb-2">
                二手回收ThinkPad系列、IdeaPad系列、Legion系列、Yoga系列等電子產品。
                </p>
                <Link href="/type/Lenovo" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src="/image/Brand_Collection/Lenovo.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="" />
                </div>
            </div>
            {/* 3 - Samsung */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Samsung產品</h1>
                <p className="px-10 pb-2">
                二手回收Galaxybook系列{'('}Galaxybook Pro, Galaxybook AI, Galaxybook Ultra{')'}、Galaxy Tab平板系列等電子產品。
                </p>
                <Link href="/type/Samsung" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src="/image/Brand_Collection/Samsung.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="" />
                </div>
            </div>
            {/* 4 - RAZER */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收RAZER產品</h1>
                <p className="px-10 pb-2">
                二手回收RAZER Blade 14, Blade 16, Blade 18 等電子產品。
                </p>
                <Link href="/type/Razer" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src="/image/Brand_Collection/Razer.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="" />
                </div>
            </div>
            {/* 5 - Asus */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收Asus產品</h1>
                <p className="px-10 pb-2">
                二手回收ASUS Vivo Book, Zenbook, ExpertBook 等電子產品。
                </p>
                <Link href="/type/Asus" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src="/image/Brand_Collection/Asus.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="" />
                </div>
            </div>
            {/* 6 - MSI */}
            <div className="text-sm text-center p-5">
            <h1 className="text-lg font-bold  text-center pt-10">高價回收MSI產品</h1>
                <p className="px-10 pb-2">
                二手回收MSI Vector 18 HX, Stealth 16, Raider 18 HX, Summit 13等電子產品。
                </p>
                <Link href="/type/MSI" className="rounded-3xl px-3 bg-gray-400 text-white hover:bg-gray-700"><span>了解更多</span></Link>
                <div className="pt-2 md:pt-5 justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src="/image/Brand_Collection/MSI.png" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '200px' ,objectFit: 'scale-down' }} alt="" />
                </div>
            </div>
        </div>
        </>
    );
};