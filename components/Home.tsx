
import Image from 'next/image';


export default function Home() {
      
  return (
  <>
    <main className="">
      <Image src="/image/banner.png" width={0} height={0} sizes="100vw" className="w-full h-auto" alt="Comein banner Apple product collection iphone Macbook" />
    </main>
    <div className="pb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center pt-10">高價回收各類電子產品</h1>
        <div className="text-sm text-center">
            <p className="px-10 sm:px-20 lg:px-30">
            我們專業回收各大品牌電子產品，包括 Apple、Asus、DELL、Google、Lenovo、MSI、Microsoft、RAZER、Samsung、SONY、acer、Panasonic 等等，無論是手機、平板、筆電、電腦主機，還是其他智能裝置，我們都以 <span className="text-2xl font-bold text-blue-700">市場最高價</span> 現金收購！
            </p>
            <p className="px-10 sm:px-20 lg:px-30">
                <br />✅ 即時估價 ── 提供型號及規格，立即報價
                <br />✅ 專業檢測 ── 快速驗機，價格透明
                <br />✅ 多元交收 ── 門市（旺區便利）或上門回收
                <br />✅ 安全服務 ── 協助清除資料，保障隱私
            </p>
            <p className="px-10 sm:px-20 lg:px-30">
                <br />閒置電子產品別浪費，交給我們 高價回收，輕鬆換現金！立即 WhatsApp 聯絡，獲取最優報價！
                <br /><br />門市地址：旺角山東街47-51號星際城市3樓304號鋪
                <br />📞 69291767 
                <br />
                
            </p>
            <div className='pt-5 flex justify-center gap-5'>
                <Image src="/image/comein_store.png" alt={""} width={0} height={0} sizes="100vw" style={{ objectFit: 'scale-down', width:'200px' }}></Image>
                <Image src="/image/comein_store_2.png" alt={""} width={0} height={0} sizes="100vw" style={{ objectFit: 'scale-down', width:'200px' }}></Image>
            </div>
        </div>
    </div>
  </>
  );
};