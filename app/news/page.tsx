import Image from 'next/image';
import Nav from "../../components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "iPhone 17 Pro 高價回收中！最新預估價公開 | Comein 專業二手手機收購",
    description: "Comein 即日起高價回收 iPhone 17 Pro，高價回收，最高收購價！門市可快速面交，舊機換現金最安心。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function News() {
    return(
        <>
        <Nav/>
        <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">最新消息</h1>
            {/* news - Macbook pro m5 */}
            <div className="text-sm text-center pt-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <Image src="/image/News/M5_202510.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收Macbook Pro M5, iPad Pro M5, Version Pro M5</h1>
                <p className="text-md py-2">正在開始大量回收/收購</p>
                <p className="text-sm text-gray-300 py-2">2025/10/16</p>
            </div>
            {/* news - iPhone 17 pro */}
            <div className="text-sm text-center pt-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <Image src="/image/News/iphone17pro.jpg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Comein banner Apple product collection iphone Macbook" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收iPhone 17 pro</h1>
                <p className="text-md py-2">正在開始大量回收/收購</p>
                <p className="text-sm text-gray-300 py-2">2025/09/30</p>
            </div>
            {/* news - iPhone 17 */}
            <div className="text-sm text-center p-10">
                <div style={{ maxWidth: '300px', margin: '0 auto' }} >
                    <Image src="/image/News/iphone17.jpg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Comein banner Apple product collection iphone Macbook" />
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center py-5">高價回收iPhone 17</h1>
                <p className="text-md py-2">正在開始大量回收/收購</p>
                <p className="text-sm text-gray-300 py-2">2025/09/30</p>


            </div>
        </div>
        </>
    );
};