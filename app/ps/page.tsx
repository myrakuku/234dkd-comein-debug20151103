'use client'
import React from 'react';
import Nav from "../../components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "香港電子產品回收服務 高價收購/維修/資料處理 | Comein 專業二手買賣",
    description: "Comein 提供一站式香港電子產品服務：手機/電腦高價回收、Trade-In換新、專業檢測、資料移轉與清除。旺角門市或全港上門服務，企業辦公室設備回收，現金交易即日付款！在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

export default function ProductService() {
    return(
        <>
        <Nav/>
        <main className="my-10 py-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-10">產品及服務</h1>
            <div className="text-sm">
                <div className="p-10 sm:px-20 lg:px-30">
                <p>1. 二手回收</p>
                <p className="pb-5 pl-3">我們提供專業的二手電子產品回收服務，包含手機、平板、電腦等裝置。根據產品狀況進行評估後，將以合理價格現金回收。  </p>
                <p>2. Trade In / SWAP 以舊換新</p>
                <p className="pb-5 pl-3">顧客可將舊機折抵換購新設備，享受差價優惠。舊機經專業檢測估價後，直接抵扣新機費用，輕鬆升級裝置。  </p>
                <p>3. Check 舊機 </p>
                <p className="pb-5 pl-3">提供免費設備檢測服務，包含硬體功能測試、外觀檢查及性能評估，並出具透明報告，讓您清楚掌握設備狀況。  </p>
                <p>4. 過資料  </p>
                <p className="pb-5 pl-3">協助將舊裝置中的資料（如聯絡人、照片、檔案等）安全轉移至新設備，確保資料無損遷移。 </p>
                <p>5. 洗機</p>
                <p className="pb-5 pl-3">徹底清除設備中的所有個人資料與設定，符合隱私保護標準，並恢復原廠系統狀態，保障您的資訊安全。  </p>
                <p>6. 維修智能產品</p>
                <p className="pb-5 pl-3">提供各類智能設備（手機、平板、筆電等）的專業維修服務，包含螢幕更換、電池維修、主機板檢測等，使用原廠或高品質零件。  </p>
                <p>7. 賣機/保養</p>
                <p className="pl-3">{'- 賣機：本店出售高品質二手電子產品，為客人精準篩選合適的電子產品，馮著理念："買果個安心，用果個開心"服務大眾。'}  </p>
                <p className="pb-5 pl-3">- 保養：針對已售出的二手設備，保養期長達6個月，享受售後技術支援與維修保障。</p>
                <p>8. 辦公室設備回收</p>
                <p className="pb-5 pl-3">專業回收企業汰換的辦公設備（如電腦、印表機、伺服器等），提供到府評估、資料銷毀及環保處理服務，符合企業資安與環保規範。  </p>
                </div>
                <div>
                    <p className="text-lg font-bold px-10">如有其他需求或疑問，歡迎隨時聯繫我們諮詢詳情。 </p>
                </div>

            </div>
        </main>
        </>
    );
};