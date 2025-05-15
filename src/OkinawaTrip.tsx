// React 一頁式沖繩行程頁面（含地圖連結、Toggle 展開每日行程）

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex justify-between items-center cursor-pointer group" onClick={() => setOpen(!open)}>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-sky-500 group-hover:from-rose-400 group-hover:to-sky-400 transition-colors duration-300">{title}</h2>
        {open ? <ChevronUp className="text-sky-500 group-hover:text-sky-400 transition-colors duration-300" size={28} /> : <ChevronDown className="text-rose-500 group-hover:text-rose-400 transition-colors duration-300" size={28} />}
      </div>
      {open && (
        <div className="mt-6 text-gray-700 space-y-3 pl-2 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export default function OkinawaTrip() {
  // Helper function for Google Maps links
  const getMapLink = (placeName: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-gradient-to-br from-pink-200 via-rose-200 to-sky-300 text-gray-800 font-['Noto_Sans_TC',_sans-serif] min-h-screen selection:bg-rose-300 selection:text-white">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
      <header className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400">
            🌺 2025 沖繩夢幻之旅 🌺
          </span>
        </h1>
      </header>

      <Section title="✨ 行程總覽">
        <ul className="list-none space-y-2 text-lg">
          <li className="flex items-center"><span className="mr-3 text-xl">🎯</span> 旅行主題：放鬆、美食、文化體驗</li>
          <li className="flex items-center"><span className="mr-3 text-xl">💰</span> 預計花費：每人約 NTD 25,000 - 30,000 (不含購物)</li>
          <li className="flex items-center"><span className="mr-3 text-xl">🚗</span> 主要交通：租車自駕</li>
          <li className="flex items-center"><span className="mr-3 text-xl">🎒</span> 必備物品：泳衣、太陽眼鏡、防曬乳、輕便雨具、國際駕照及譯本</li>
        </ul>
      </Section>

      <Section title="🗓️ 行程基本資訊">
        <ul className="list-none space-y-2 text-lg">
          <li className="flex items-center"><span className="mr-3 text-xl">📅</span> 出發日期：6月5日（四）</li>
          <li className="flex items-center"><span className="mr-3 text-xl">📅</span> 返回日期：6月8日（日）</li>
          <li className="flex items-center"><span className="mr-3 text-xl">✈️</span> 航班資訊：6/5 06:50 桃園 ✈ 沖繩、6/8 21:40 沖繩 ✈ 桃園</li>
          <li className="flex items-center"><span className="mr-3 text-xl">🏨</span> 住宿：沖繩那霸美居飯店（無早餐）</li>
        </ul>
      </Section>

      <Section title="🚗 租車建議與注意事項">
        <ul className="list-none space-y-2 text-lg">
          <li className="flex items-start"><span className="mr-3 text-xl mt-1">👍</span> 推薦租車公司：行腳沖繩、DTS、OTS、Times、Orix（皆有中文服務與機場接送）</li>
          <li className="flex items-center"><span className="mr-3 text-xl">💡</span> 租車提醒：提早預訂、比較價格、取車時仔細檢查車況、熟悉右駕規則。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">💳</span> 駕照需求：台灣駕照＋日文譯本＋護照</li>
          <li className="flex items-center"><span className="mr-3 text-xl">🚦</span> 行車規則：右駕靠左行駛，注意轉彎、行人優先。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">✅</span> 保險建議：務必加購免責賠償險 (CDW) 與營業損失賠償 (NOC)。</li>
        </ul>
      </Section>

      <Section title="🍳 早餐推薦">
        <ul className="list-none space-y-4 text-lg">
          <li className="flex flex-col">
            <div className="flex items-center">
              <span className="mr-3 text-xl">🍙</span> 
              <a href={getMapLink("豬肉蛋飯糰 本店")} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:text-rose-600 hover:underline transition-colors duration-200">豬肉蛋飯糰 本店 (Pork Tamago Onigiri)</a>
            </div>
            <div className="ml-8 mt-1 text-sm text-gray-600">
              <p>⏰ 營業時間：07:00-15:00（週一公休）</p>
              <p>💡 推薦：沖繩特色早餐，必點豬肉蛋飯糰，建議提早前往避免排隊</p>
            </div>
          </li>
          <li className="flex flex-col">
            <div className="flex items-center">
              <span className="mr-3 text-xl">🥞</span> 
              <a href={getMapLink("C&C Breakfast Okinawa")} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:text-rose-600 hover:underline transition-colors duration-200">C&C Breakfast Okinawa</a>
            </div>
            <div className="ml-8 mt-1 text-sm text-gray-600">
              <p>⏰ 營業時間：07:00-10:00</p>
              <p>💡 推薦：美式早餐，有中文菜單，提供沖繩特色食材</p>
            </div>
          </li>
          <li className="flex flex-col">
            <div className="flex items-center">
              <span className="mr-3 text-xl">🏪</span>
              <span>飯店附近便利商店</span>
            </div>
            <div className="ml-8 mt-1 text-sm text-gray-600">
              <p>⏰ 營業時間：24小時</p>
              <p>💡 推薦：FamilyMart、Lawson 皆有飯糰、三明治、咖啡等選擇</p>
            </div>
          </li>
        </ul>
      </Section>

      <Section title="🎟️ 景點優惠">
        <ul className="list-none space-y-2 text-lg">
          <li className="flex items-center"><span className="mr-3 text-xl">🎫</span> Okinawa Fun Pass (美麗海水族館、玉泉洞等景點通票，可評估是否划算)</li>
          <li className="flex items-center"><span className="mr-3 text-xl">📱</span> Klook 或 KKday 事先預訂門票，有時可享優惠。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">💳</span> 部分景點出示護照或特定信用卡可能有優惠，可留意現場資訊。</li>
        </ul>
      </Section>

      <Section title="🗺️ 每日行程">
        <div className="space-y-8">
          {[
            {
              day: "Day 1｜6/5 (四) 那霸機場 → 南部 → 那霸市區",
              icon: "✈️",
              items: [
                { name: "那霸機場國內線航廈", desc: "09:30 抵達，OTS租車櫃台取車 (約1小時)", mapIcon: "🚗" },
                { name: "瀨長島 Umikaji Terrace", desc: "10:30-12:00 午餐、白屋＋藍海拍照", mapIcon: "🍽️" },
                { name: "沖繩世界文化王國 (玉泉洞)", desc: "12:30-14:30 鐘乳石洞＋文化村體驗", mapIcon: "🗿" },
                { name: "沖繩那霸美居飯店", desc: "15:00 Check-in、休息整理", mapIcon: "🏨" },
                { name: "國際通", desc: "17:30-20:30 晚餐、逛街購物", mapIcon: "🛍️" },
                { name: "波上宮", desc: "21:00-21:30 夜景散步", mapIcon: "⛩️" },
              ]
            },
            {
              day: "Day 2｜6/6 (五) 北部一日遊",
              icon: "🐠",
              items: [
                { name: "美麗海水族館", desc: "07:30 出發，09:10-12:00 參觀水族館", mapIcon: "🐋" },
                { name: "名護鳳梨公園", desc: "13:30-14:30 鳳梨車拍照、園區體驗", mapIcon: "🌳" },
                { name: "古宇利大橋", desc: "15:00-16:00 橋上直線視角拍照", mapIcon: "🌉" },
                { name: "沖繩那霸美居飯店", desc: "16:00-17:40 返回飯店", mapIcon: "🏨" },
                { name: "DFS免稅店", desc: "20:00-21:30 購物", mapIcon: "🛍️" },
              ]
            },
            {
              day: "Day 3｜6/7 (六) 中部一日遊",
              icon: "🌺",
              items: [
                { name: "琉球村", desc: "09:00-11:30 傳統服飾體驗、茅草屋參觀", mapIcon: "🎎" },
                { name: "恩納村", desc: "12:00-13:00 午餐時光", mapIcon: "🍽️" },
                { name: "美國村 (美浜タウンリゾート・アメリカンビレッジ)", desc: "13:30-16:00 逛街、摩天輪、夕陽", mapIcon: "🎡" },
                { name: "泊港漁市場", desc: "18:00-19:30 海鮮丼晚餐", mapIcon: "🍣" },
                { name: "沖繩那霸美居飯店", desc: "20:00 返回休息", mapIcon: "🏨" },
              ]
            },
            {
              day: "Day 4｜6/8 (日) 那霸市區 → 機場",
              icon: "🏯",
              items: [
                { name: "沖繩那霸美居飯店", desc: "08:30-09:00 退房、整理行李", mapIcon: "🧳" },
                { name: "首里城", desc: "09:30-11:00 守禮門、正殿參觀", mapIcon: "🏰" },
                { name: "Ashibinaa Outlet Mall", desc: "11:30-14:30 購物、午餐", mapIcon: "🛒" },
                { name: "那霸機場", desc: "15:00 還車、18:00 晚餐、21:40 搭機返台", mapIcon: "✈️" },
              ]
            },
          ].map(dayInfo => (
            <div key={dayInfo.day}>
              <strong className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-3 block">{dayInfo.icon} {dayInfo.day}</strong>
              <ul className="list-none ml-4 space-y-2">
                {dayInfo.items.map(item => (
                  <li key={item.name} className="flex items-start">
                    <a href={getMapLink(item.name)} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:text-rose-600 hover:underline transition-colors duration-200 flex items-center group">
                      <span className="mr-2 text-lg group-hover:animate-pulse pt-0.5">{item.mapIcon}</span> 
                      <div>
                        {item.name}
                        <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">({item.desc})</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="☀️ 旅遊提醒">
        <ul className="list-none space-y-2 text-lg">
          <li className="flex items-center"><span className="mr-3 text-xl">☔</span> 6月可能為梅雨季，記得攜帶雨具。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">🧴</span> 紫外線強，注意防曬與補水。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">🙏</span> 尊重當地文化與習俗。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">💴</span> 建議準備現金，部分小店不一定接受信用卡。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">⚠️</span> 注意交通安全與行車規則。</li>
          <li className="flex items-center"><span className="mr-3 text-xl">📱</span> 建議租用 WiFi 分享器或購買當地 SIM 卡。</li>
        </ul>
      </Section>

      <footer className="text-center mt-16 mb-8 text-white/80 text-base">
        <p>祝您旅途愉快！✈️✨</p>
        <p className="text-xs mt-2 opacity-70">Okinawa Dream Trip Planner v1.0 by Iring </p>
      </footer>
    </div>
  );
}
