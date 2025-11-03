
import Image from 'next/image';
import Nav from "../../../components/Nav";
import SEOContent from "../../../components/SEOContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein |香港專業高價回收電子產品 | 旺角二手回收Asus專家",
    description: "Comein 專業高價回收Vivo Book、Zenbook、ExpertBook等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function AsusCollection() {
      
  return (
  <>
  <Nav/>
  <div className='pt-5 flex justify-center'>
        <Image src="/image/Brand_Collection/Asus/Asus_1.jpeg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src="/image/Brand_Collection/Asus/Asus_2.jpeg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
        <Image src="/image/Brand_Collection/Asus/Asus_3.jpeg" width={0} height={0} sizes="100vw" alt={""} style={{ objectFit: 'scale-down', width:'30%' }}></Image>
    </div>
        <div className="pb-10 pt-5 px-10 sm:px-20 lg:px-30">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center pt-10">Asus系列二手電子產品回收：專業與高價的選擇</h1>
            <div className="text-sm text-center pt-5">
                <p className="">
                我們以市場上競爭力強的價格回收二手電子產品。特別是像 Asus 這樣受歡迎的品牌，無論是工作用的 Expert Book、輕薄的 Vivo Book，還是高效能的 ROG 系列，我們都能提供更具吸引力的回收價格，讓您輕鬆變現。
                </p>
                <h2 className="pt-10 text-lg md:text-xl lg:text-2xl font-bold  text-center">為什麼選擇我們的二手回收服務？</h2>
                <p className="">
                我們的回收團隊經驗豐富，對於不同品牌和型號的電子產品都有深入了解。無論是 Asus 系列的戶型，如 Vivo Book、Zenbook、ExpertBook，還是 ROG 系列的強性能產品，如 ALY、ALLY X、X13 Flow、Z13 Flow、TUF、Strix 和 Zephyrus，我們都能提供專業鑑定，並保證合理的回收價格。
                </p>
                <div className="">
                    <p  className="pt-5 font-bold">筆記型電腦</p>
                    <p  className="pt-5">
                    包括 Asus 的各種型號，從 zenbook 與 Vivo Book，到為專業人士而設的 ExpertBook，無論您有哪一款，只要是功能正常的二手產品，我們都非常歡迎。
                    </p>
                    <p  className="pt-5 font-bold">遊戲設備</p>
                    <p  className="pt-5">
                    對於遊戲愛好者，我們提供 ROG 和 TUF 系列的高價回收服務，無論是 ALY、X13 Flow 還是 Zephyrus，這些都能在我們這裡得到合理的回收價。
                    </p>
                    <p  className="pt-5">產品名稱未能錄盡，其他請Whatapp查詢。想了解更多關於我們的服務或想要進行二手回收，歡迎隨時聯繫我們！</p>
                </div>
            </div>
            <SEOContent/>
        </div>
  </>
  );
};