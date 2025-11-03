
import Image from 'next/image';
import Link from 'next/link';
import Nav from "../components/Nav";
import Home from "../components/Home";
import GoogleMap from "../components/GoogleMap";
import Icon from "../components/icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comein |香港專業高價回收電子產品 | 回收Apple、Lenovo、Samsung 等大量品牌",
    description: "Comein 專業高價回收 MacBook、iPhone、手機、電腦等各類二手電子產品，高價回收！香港門市或上門回收，安全快速交易。",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function MainPage() {
      
  return (
  <>
  <Nav/>
  <Home/>
  <GoogleMap/>
  <Icon/>
  <div className="p-10 sm:px-20 lg:px-30 text-center">
    <Link href="/faq" className="text-gray-400 text-sm hover:text-blue-600">FAQ</Link> 
  </div>
  </>
  );
};