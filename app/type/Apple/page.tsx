
import Image from 'next/image';
import Nav from "../../../components/Nav";
import SEOContent from "../../../components/SEOContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein | 旺角二手回收專家 | 大量回收Apple Macbook, iPhone, iPad, iWatch, Vision Pro",
    description: "Comein 專業高價回收 MacBook、iPhone、手機、電腦、平板電腦等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function AppleCollection() {
      
  return (
  <>
  <Nav/>
    <div className='pt-5 flex justify-center'>
        <Image src="/image/Brand_Collection/Apple/Apple_1.jpg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src="/image/Brand_Collection/Apple/Apple_2.jpg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src="/image/Brand_Collection/Apple/Apple_3.jpg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Apple二手回收專家：香港旺角的電子產品回收服務</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                在科技快速更新的時代，閒置的產品與其放著貶值，不如交給我們高價回收變現！無論是iPhone、MacBook、iPad、Apple Watch還是其他Apple設備，我們都以市場頂尖價格現金收購，讓您的舊機發揮最大剩餘價值！
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。全系列產品回收：我們接受各式蘋果產品的回收，例如：
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">MacBook Pro 系列：</p>
                    <br />MacBook Pro 13 (i5, i7, M1, M2)
                    <br />MacBook Pro 14 (M1 Pro, M1 Max, M2 Pro, M2 Max, M3 Pro, M3 Max, M4 Pro, M4 Max)
                    <br />MacBook Pro 15 (i7, i9)
                    <br />MacBook Pro 16 (i7, i9, M1 Pro, M1 Max, M2 Pro, M2 Max, M3 Pro, M3 Max, M4 Pro, M4 Max)
                    <p  className="pt-5 font-bold">MacBook Air 系列：</p>
                    <br />MacBook Air 13 (i3, i5, i7, M1, M2, M3, M4)
                    <br />MacBook Air 15 (M2, M3, M4)
                    <p  className="pt-5 font-bold">其他蘋果產品：</p>
                    <br />Mac Pro、iMac、Mac Mini、Mac Studio等
                    <br />iPhone 系列（如 iPhone 7、8、X、11、12、13、14、15 等各型號）
                    <br />AirPods、iPad（Air及Pro系列）等
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
  </>
  );
};