import React from 'react';
import GoogleMap from '../../components/GoogleMap';
import Nav from "../../components/Nav";
import Icon from "../../components/icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "關於 Comein | 15年二手電腦回收專家 | 企業/個人高價收購服務",
    description: "Comein 擁有15年專業經驗，提供企業與個人高價回收服務。涵蓋Apple、Samsung等品牌筆電、手機、平板，安全交易，金融/教育/工程行業客戶首選！在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };


export default function About() {
    return(
        <>
        <Nav/>
        <div className="pb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">關於我們</h1>
            <div className="text-sm text-center p-10 sm:px-20 lg:px-30">
                <div className="py-5">
                <span className="text-2xl font-bold">Come In</span> —— 您最值得信賴的二手電腦回收專家。自成立以來，我們已深耕行業超過 15 年，憑藉豐富的經驗和專業的服務，為各行各業的客戶提供高效、可靠的電子設備處理解決方案。無論是企業升級換代，還是個人閒置處理，我們致力於為每一位客戶創造價值。
                </div>
                <p className="py-5">
                <span className='font-bold text-lg'>精準專業報價：</span>熟悉市場上過百種品牌與型號，提供快速、準確的估價，絕不隨意壓價或亂收費。
                <br/><span className='font-bold text-lg'>安全資料處理：</span>重視客戶隱私，提供即場專業資料消毀服務，確保您的數據安全無憂。
                <br/><span className='font-bold text-lg'>收機流程高效：</span>經驗豐富的團隊操作熟練，整個回收過程快捷順暢，通常不超過5分鐘，為您節省寶貴時間。
                <br/><span className='font-bold text-lg'>多元服務選擇：</span>除了現金回收，還支持「以舊換新」（SWAP服務），並提供多種型號選擇，滿足您的不同需求。
                <br/><span className='font-bold text-lg'>價格公道透明：</span>堅持誠信經營，價格公開透明，讓您賣得放心、換得滿意。
                <br/><span className='font-bold text-lg'>便捷地段服務：</span>門市位置便利易找，同時提供上門回收服務，節省您的時間與精力。
                </p>
                <p className="py-5">
                    我們的服務對象涵蓋超過百種行業，包括但不限于金融、教育、設計、工程等，無論是少量個人設備還是大批量企業淘汰舊機，我們都能提供定制化解決方案。
                </p>
                <p className="font-bold text-lg py-5">
                     {'"Come In —— 不只是回收，更是為您提供專業、省心、高效的電子資產處置體驗。"'}
                </p>
            </div>
            <Icon/>
        </div>
        <GoogleMap/>
        </>
    );
};