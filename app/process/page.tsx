import React from 'react';
import Nav from "../../components/Nav";
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "香港電子產品回收流程 3步快速賣機 | Comein 高價現金收購 iPhone、MacBook",
    description: "Comein 提供最便捷的香港電子產品回收服務！WhatsApp 即時估價，支持旺角門市或上門收機，專業檢測後立即以現金付款，高價回收 iPhone、Samsung、iPad 等二手設備。在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function Process() {
    return(
        <>
        <Nav/>
        <main className="my-10 py-5">
            <h1 className="text-2xl md:text-3xl font-bold px-10">回收流程｜3步極速現金交收</h1>
            <h2 className="text-lg md:text-xl px-10">手機回收／高價回收服務</h2>
            <div className="">
                <div className="p-10">
                    {/* ONE */}
                    <div>
                        <p className="text-lg">1）聯絡方式</p>
                        <p className="pb-5 pl-3 text-sm">請透過WhatsApp與我們聯繫。</p>
                    </div>
                    {/* TWO */}
                    <div>
                    <p className="text-lg">2）提交設備資訊</p>
                    {/* MAC */}
                    <div>
                        <p className="pt-2 pl-3 text-sm font-bold">MacOS裝置</p>
                        <div className="pb-5 pl-3 text-sm">請提供以下資訊：
                            <br />- 品牌
                            <br />- 產品名稱
                            <br />- 尺寸
                            <br />- 年份
                            <br />- 規格（包括CPU、RAM、儲存容量）
                            <br /><br />如Macbook取得規格方式：
                            <br />路徑：屏幕左上方Apple Logo 「關於本機」並截圖
                            <div className='py-3'>
                            <Image src="/image/Macbook.png" width={0} height={0} sizes="100vw" alt={""} className="w-full md:w-[90%] lg:w-[50%] h-auto"></Image>
                            </div>
                        </div>
                    </div>
                    {/* WINDOW */}
                    <div>
                        <p className="pt-2 pl-3 text-sm font-bold">Window裝置</p>
                        <div className="pb-5 pl-3 text-sm">請提供以下資訊：
                            <br />- 品牌
                            <br />- 產品名稱
                            <br />- 尺寸
                            <br />- 年份
                            <br />- 規格（包括GPU、CPU、RAM、儲存容量）
                            <br /><br />如Notebook裝置 取得規格方式：
                            <br />路徑：檔案總管 {'>'} 本機 {'>'} 右鍵點選「內容」並截圖
                            <br />或左鍵點選「內容」查看「儲存空間」
                            <br />或透過：右鍵點選「內容」 {'>'}  「裝置管理員」 {'>'}  「顯示卡」以確認GPU型號
                            <div className='pt-3'>
                            <Image src="/image/Window.jpeg" width={0} height={0} sizes="100vw" alt={""} className="w-full md:w-[90%] lg:w-[50%] h-auto"></Image>
                            </div>
                        </div>
                    </div>    
                    </div>
                    {/* THREE */}
                    <div>
                    <p className="text-lg">3）交收地點</p>
                    <p className="pt-2 pl-3 text-sm font-bold">門市交收（旺角）</p>
                    <p className="pb-5 pl-3 text-sm">旺角山東街47-51號星際城市3樓304號鋪</p>
                    <p className="pt-2 pl-3 text-sm font-bold">上門交收</p>
                    <p className="pb-5 pl-3 text-sm">可安排專人上門回收，詳情請與我們確認。</p>   
                    </div>
                </div>

                <div>
                    <p className="text-lg font-bold px-10">如有任何疑問，歡迎隨時聯繫我們。 </p>
                </div>
            </div>
        </main>
        </>
    );
};