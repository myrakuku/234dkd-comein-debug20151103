
import Image from 'next/image';
import Nav from "../../../components/Nav";
import SEOContent from "../../../components/SEOContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein |香港專業高價回收電子產品 | 旺角二手回收MSI專家",
    description: "Comein 專業高價回收MSI Vector, MSI Stealth, MSI Summit, MSI Crosshair等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function MSICollection() {
      
  return (
  <>
  <Nav/>
    <div className='pt-5 flex justify-center'>
        <Image src="/image/Brand_Collection/MSI/MSI_1.jpg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src="/image/Brand_Collection/MSI/MSI_2.jpg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src="/image/Brand_Collection/MSI/MSI_3.jpg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">二手電子產品回收：高價回收MSI筆電與更多選擇</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                在香港旺角地區，越來越多的消費者關注環保與可持續發展，二手電器回收成為一個熱門的選擇。如果你擁有MSI的筆記本電腦或者其他二手電子產品，隨時都可以考慮將其出售給專業的回收店。我們的商店專業提供高價回收服務，特別針對以下MSI產品系列：
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                專業可靠：我們的團隊擁有多年的電子產品回收經驗，對市場動態及價格變化十分敏感，能確保您獲得最公平的回收價格。我們接受MSI產品的回收，包括：
                </p>
                <div className="">
                    
                    <p  className="pt-5 font-bold">MSI Vector 系列</p>
                    <br />MSI Vector 16 HX
                    <br />MSI Vector 18 HX
                    <br />Vector A18
                    <p  className="pt-5 font-bold">MSI Stealth 系列</p>
                    <br />MSI Stealth 16
                    <br />MSI Stealth A16
                    <p  className="pt-5 font-bold">Summit 系列</p>
                    <br />Summit 13
                    <br />Summit A16
                    <br />Summit E13
                    <p  className="pt-5 font-bold">Crosshair 系列</p>
                    <br />Crosshair 16 HX
                    <br />Crosshair 18 HX
                    <p  className="pt-5 font-bold">Kantana 系列</p>
                    <br />Kantana 15
                    <br />Kantana A15
                    <p  className="pt-5 font-bold">MSI 其他產品 系列</p>
                    <br />MSI Raider 18 HX
                    <br />MSI Taitan 18 HX
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
  </>
  );
};