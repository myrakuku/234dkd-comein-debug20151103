import React from 'react';
import Nav from "../../components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "關於 Comein | 15年二手電腦回收專家 | 企業/個人高價收購服務",
    description: "Comein 擁有15年專業經驗，提供企業與個人高價回收服務。涵蓋Apple、Samsung等品牌筆電、手機、平板，安全交易，金融/教育/工程行業客戶首選！在尋找二手回收的最佳解決方案嗎？我們提供專業的電子產品回收服務，包括iPhone回收、iPad回收、舊手機回收和舊平板回收。無論您是想要更新設備，還是處理不再使用的電子產品，我們都能幫助您輕鬆回收舊設備，讓環保與實惠兼得。立即聯繫我們，開始您的回收旅程！",
    keywords: 'Price, iphone 16, iphone 17, iphone 17 pro, iphone 17 air, Macbook, Macbook Pro, Macbook Air, Macbook M5, Macbook M4, ipad pro, apple, 旺角二手, 二手Macbook, 二手iPhone, 二手回收, 二手電子產品回收, iPhone 回收, iPad 回收, 舊手機回收, 舊平板回收, Sin Tat Plaza, Apple iphone 11 pro max, iphone 16e, iphone pro max 17, 設備狀況評估, 數據抹除, 設備升級/更新, 保修和服務, 可持續發展, 環保意識, 電子廢物, Comein macbook, 旺角二手回收, 先達二手回收, 專業回收, 星際二手回收, 高價回收, 高價',
    authors: [{ name: 'Comein', url: 'https://comeinmacbook.com/' }]
  };

  export default function FAQ() {
  const faqs = [
    {
      title: '一、回收流程與聯絡相關',
      question1: '想回收設備，第一步該如何與你們聯絡？',
      answer1: `需通過 WhatsApp 與我們聯繫，這是唯一指定的初始聯絡方式，後續溝通也將通過該渠道推進。`,
      question2: '整個設備回收流程分為幾步？完成交收大概需要多久？',
      answer2: `回收流程共 3 步，分別是「聯絡溝通」「提交設備資訊」「現場 / 上門交收」；交收時間取決於設備資訊提交效率與交收方式，若資訊齊全且選擇門市交收，通常 1-2 個工作日可完成；上門交收需額外確認時間，會根據你的位置靈活安排。`,
      question3: '',
      answer3: ``,
      question4: '',
      answer4: ``
    
    },
    {
      title: '二、設備信息提交相關',
      question1: '提交 MacOS 設備（如 MacBook）資訊時，需要提供哪些具體內容？',
      answer1: `需提供品牌、產品名稱、尺寸、年份，以及規格（含 CPU、RAM、儲存容量）；可通過「屏幕左上方 Apple Logo→關於本機」路徑查看並截圖，確保信息準確。`,
      question2: '回收 Windows 設備（如 Notebook），如何獲取並提交規格信息？',
      answer2: `需提供品牌、產品名稱、尺寸、年份，以及規格（含 GPU、CPU、RAM、儲存容量）；獲取路徑有 3 種：①檔案總管→本機→右鍵點選「內容」截圖；②左鍵點選「內容」查看「儲存空間」；③右鍵點選「內容」→「裝置管理員」→「顯示卡」確認 GPU 型號。`,
      question3: '若不清楚設備的年份或規格，無法準確提交資訊該怎麼辦？',
      answer3: `可通過 WhatsApp 告知我們設備的外觀特徵（如接口類型、機身標識）或購買時間，我們會提供指引協助查詢，避免因信息錯誤影響回收評估。`
    },
    {
        title: '三、交收方式與地點相關',
        question1: '門市交收的具體地址在哪裡？是否需要提前預約？',
        answer1: `門市地址為香港山東街 47-51 號新之城商業大廈 3 樓 304 室；建議通過 WhatsApp 溝通時同步預約交收時間，避免到店後等待，提升效率。`,
        question2: '是否支持上門交收？上門範圍和預約要求是什麼？',
        answer2: `支持專人上門回收，具體上門範圍需通過 WhatsApp 與我們確認（需告知所在區域）；預約時需明確設備型號和交收時間，方便我們安排人員，確保上門後可快速完成檢測與交收。`,
        question3: '無論選擇門市還是上門交收，都是以現金方式結算嗎？',
        answer3: `是的，兩種交收方式均採用「極速現金交收」，設備檢測確認無誤後，當場以現金支付回收款項，無需額外等待轉賬。`,
        question4: '',
        answer4: ``
      },
      {
        title: '四、支援回收的品牌與型號範圍',
        question1: '目前支援回收哪些品牌的設備？',
        answer1: `主要支援Apple（Mac系列）與Windows筆記本電腦品牌，包括但不限於：Apple（MacBook Air/Pro、iMac、Mac mini、Vision Pro、iPad Air/Pro、iPhone Air/Pro /Pro Max等）、Dell（XPS系列、Latitude系列）、HP（Spectre系列、Pavilion系列）、Lenovo（ThinkPad系列、Yoga、ideapad系列）、ASUS（ZenBook系列、ROG遊戲本系列）、Acer（Swift系列、Predator系列）等主流品牌。`,
        question2: 'Apple設備具體支援哪些型號？是否有年份限制？',
        answer2: `支援近10年內發布的Mac系列型號，常見包括：
- MacBook Air：13英寸/15英寸（搭載M1/M2/M3/M4芯片，2020年後型號），如MacBook Air 13-inch (M4, 2025)、MacBook Air 15-inch (M3, 2023)
- MacBook Pro：14英寸/16英寸（搭載M1 Pro/M1 Max/M2 Pro/M2 Max/M3 Pro/M3 Max/M4/M4 Pro/M4 Max芯片，2021年後型號），如MacBook Pro 16-inch (M4 Max, 2025)、MacBook Pro 14-inch (M3 Pro, 2024)
- iMac：24英寸（M1/M2/M3/M4芯片，2021年後型號）、27英寸（Intel芯片，2017-2020年型號）
- Mac mini：搭載M1/M2/M3/M4/M4 Pro芯片（2020年後型號）、Mac Studio（M1 Max/M2 Ultra/M3 Ultra/M4 Max芯片，2022年後型號）
年份過早（如2015年前Intel芯片Mac）可能因配置過時影響回收價值，具體可通過WhatsApp確認。
`,
        question3: 'Windows筆記本支援哪些類型？遊戲本是否在回收範圍內？',
        answer3: `支援所有類型的Windows筆記本，包括超薄本、商務本、遊戲本等。遊戲本如ROG Strix Scar 17（2024款）、Lenovo Legion Pro 9i（2023款）、HP Omen 16（2025款）等均在回收範圍內，需提供完整配置資訊（尤其GPU型號）以準確評估。`,
        question4: '',
        answer4: ``
      },
      {
        title: '五、配置資訊查詢與提交細則',
        question1: '提交Apple設備配置時，除了CPU和內存，還需要提供哪些細節？',
        answer1: `需完整提供「芯片型號+RAM容量+儲存容量+屏幕尺寸」，例如「MacBook Pro 14-inch，M3 Pro芯片，32GB RAM，1TB SSD」。若設備有特殊配置（如MacBook Pro、iMac的納米紋理玻璃面板、Nano Texture），也可補充說明，可能影響回收評估。配置查詢路徑：點擊屏幕左上角「Apple Logo」→「關於本機」，即可查看芯片、內存、儲存等核心資訊。`,
        question2: 'Windows筆記本的配置參數複雜，如何確保資訊提交正確？',
        answer2: `需提供「CPU型號+GPU型號+RAM容量+儲存容量+屏幕尺寸」，以下為不同場景的查詢指引：
- 常規配置（CPU/RAM/儲存）：右擊「此電腦」→「屬性」，可查看CPU型號（如Intel Core i7-13700H、AMD Ryzen 9 7940HS）和RAM容量（如16GB DDR5）；點擊「儲存」可查看硬碟類型（SSD/HDD）及容量（如1TB SSD）。
- GPU型號（尤其遊戲本）：右擊桌面→「NVIDIA控制面板」→「系統資訊」→「顯示」，或通過「裝置管理員」→「顯示卡」查看（如NVIDIA GeForce RTX 4070 Laptop GPU、AMD Radeon RX 7900M）。
- 屏幕尺寸：可在設備底部標籤或購買頁面查詢（如15.6英寸、16英寸）。
`,
        question3: 'Windows筆記本的配置參數複雜，如何確保資訊提交正確？',
        answer3: `需提供「CPU型號+GPU型號+RAM容量+儲存容量+屏幕尺寸」，以下為不同場景的查詢指引（含快捷鍵）：
- 常規配置（CPU/RAM/儲存）：可使用快捷鍵Win + X選「系統」頁面，查看CPU型號（如Intel Core i7-13700H、AMD Ryzen 9 7940HS）和RAM容量（如16GB DDR5）；或通過「此電腦」→右擊「內容」，點擊「儲存」查看硬碟類型（SSD/HDD）及容量（如1TB SSD）。
- GPU型號（尤其遊戲本）：右擊桌面→「NVIDIA控制面板」→「系統資訊」→「顯示」，或使用快捷鍵Win + X打開菜單後選擇「裝置管理員」→「顯示卡」查看（如NVIDIA GeForce RTX 4070 Laptop GPU、AMD Radeon RX 7900M）。
- 屏幕尺寸：可在設備底部標籤或購買頁面查詢（如15.6英寸、16英寸）。
`,
        question4: '設備配置被升級過（如自行加裝RAM、更換SSD），提交時需特別說明嗎？',
        answer4: `需要！若設備進行了非原廠升級（如MacBook Pro自行更換更大容量SSD、Windows筆記本加裝RAM），需在提交資訊時註明「升級後配置」及升級部件的品牌型號（如「原8GB RAM升級至16GB DDR4 3200MHz（金士頓）」），避免因配置不符影響檢測與報價。`
      },
      {
        title: '六、特殊配置與異常情況處理',
        question1: '設備無法開機，無法查詢配置資訊怎麼辦？',
        answer1: `可通過設備外觀標籤、購買憑證或原包裝盒上的型號代碼（如Mac的A2681、Windows筆記本的82XF0005US）告知我們，我們會根據型號代碼查詢默認配置；若有升級記錄，可提供升級時的購買憑證輔助證明。`,
        question2: '同一品牌不同系列的設備，配置提交要求是否有區別？',
        answer2: `有細微區別：
- 商務本（如ThinkPad X1 Carbon）：需額外確認是否帶有指紋識別、觸控板版本等附加功能；
- 遊戲本（如ASUS ROG Zephyrus）：需重點確認GPU型號、散熱模組配置（如有更換散熱硅脂等）；
- 超薄本（如Dell XPS 13）：需確認屏幕分辨率（如4K+OLED）、電池健康度等。
`,
        question3: '平板設備（如iPad、Surface Pro）是否支援回收？配置提交要求是什麼？',
        answer3: `目前主要回收筆記本電腦與臺式Mac設備，iPad、Surface Pro等平板設備暫不支援回收，敬請諒解。`,
        question4: '',
        answer4: ``
      },
      {
        title: '七、配置與報價關係說明',
        question1: '哪些配置參數對回收價格影響最大？',
        answer1: `核心影響因素按重要性排序：
1. Apple設備：芯片型號（如M4 Max＞M4 Pro＞M4）＞RAM容量（32GB＞16GB＞8GB）＞儲存容量（2TB＞1TB＞512GB）；
2. Windows設備：GPU型號（RTX 4090＞RTX 4070＞RTX 3060）＞CPU型號（i9＞i7＞i5）＞RAM容量＞儲存容量；
此外，設備外觀成色、功能完整性（如屏幕是否有壞點、電池健康度）也會影響最終報價。
`,
        question2: '提交配置後，報價有效期是多久？',
        answer2: `配置核實後的報價有效期為3個工作日，若超過有效期交收，需重新確認設備配置與狀態，可能會調整報價。建議提交配置後儘快安排交收，避免價格波動。`,
        question3: '',
        answer3: ``,
        question4: '',
        answer4: ``
      },
    //   {
    //     title: '',
    //     question1: '',
    //     answer1: ``,
    //     question2: '',
    //     answer2: ``,
    //     question3: '',
    //     answer3: ``,
    //     question4: '',
    //     answer4: ``
    //   },
  ];

  return (
    <>
    <Nav/>
    <div className="max-w-3xl mx-auto p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-6">常見問題 (FAQ)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-4">
          <h2 className="text-xl font-semibold">{faq.title}</h2>
          <p className="pt-2 text-md text-gray-600">{faq.question1}</p>
          <p className="text-md pt-1">{faq.answer1}</p>
          <p className="pt-2 text-md text-gray-600">{faq.question2}</p>
          <p className="text-md pt-1">{faq.answer2}</p>
          <p className="pt-2 text-md text-gray-600">{faq.question3}</p>
          <p className="text-md pt-1">{faq.answer3}</p>
        </div>
      ))}
    </div>
    </>
  );
};
