import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const MAP_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/bda0cbd3-822a-4deb-a60b-a7dafdc33ca6.jpg";
const CITY_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/a0420166-5a38-4501-93ea-fe209fbbee9b.jpg";
const PEOPLE_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/f92f880c-d0d0-4e83-8c53-10b696f95776.jpg";
const NATURE_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/b74f4805-5f44-45ef-8d6f-6a738504d5ba.jpg";

const slides = [
  { id: 0, label: "Титульный лист" },
  { id: 1, label: "О России" },
  { id: 2, label: "География" },
  { id: 3, label: "Население" },
  { id: 4, label: "Климат и природа" },
  { id: 5, label: "История" },
  { id: 6, label: "Административное деление" },
  { id: 7, label: "Итоговые факты" },
];

/* ── цвета в классическом академическом духе ─────────────────── */
const SLIDE_BG = [
  { bg: "#1a2744", accent: "#c8a96e" },
  { bg: "#1e3a2f", accent: "#a8c97f" },
  { bg: "#2c1a44", accent: "#c8a0d8" },
  { bg: "#3a2010", accent: "#d4a870" },
  { bg: "#1a3030", accent: "#7ececa" },
  { bg: "#3a1a20", accent: "#e08888" },
  { bg: "#1a2a3a", accent: "#80b0d8" },
  { bg: "#2a2010", accent: "#d4c070" },
];

const ornament = "❦";

/* ── Общий заголовок слайда ──────────────────────────────────── */
function SlideTitle({ text, accent }: { text: string; accent: string }) {
  return (
    <div className="text-center mb-5">
      <div className="text-2xl mb-1" style={{ color: accent }}>{ornament}</div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-wide" style={{ color: "#f5f0e8", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        {text}
      </h2>
      <div className="mx-auto mt-2 h-px w-32" style={{ background: accent }} />
    </div>
  );
}

/* ── Текстовый блок с заголовком ────────────────────────────── */
function TextBlock({ title, children, accent }: { title?: string; children: React.ReactNode; accent: string }) {
  return (
    <div className="rounded-lg p-4 mb-3" style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${accent}33` }}>
      {title && <div className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>{title}</div>}
      <div className="text-sm md:text-base leading-relaxed" style={{ color: "#e8e0d0" }}>{children}</div>
    </div>
  );
}

/* ── Строка факта ───────────────────────────────────────────── */
function FactRow({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="flex justify-between items-baseline py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <span className="text-sm" style={{ color: "#b0a898" }}>{label}</span>
      <span className="text-sm font-bold ml-4 text-right" style={{ color: "#f5f0e8" }}>{value}</span>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 0 — ТИТУЛЬНЫЙ
════════════════════════════════════════════════════ */
function Slide0({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.3) 40px,rgba(255,255,255,.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,.3) 40px,rgba(255,255,255,.3) 41px)" }} />
      <div className="relative z-10 max-w-2xl">
        <div className="text-lg font-semibold tracking-widest uppercase mb-6" style={{ color: accent, fontFamily: "Georgia, serif" }}>
          Муниципальное общеобразовательное учреждение
        </div>
        <div className="h-px w-40 mx-auto mb-6" style={{ background: accent }} />
        <div className="text-base mb-2" style={{ color: "#b0a898" }}>История · 5 класс</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#f5f0e8", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          64-й регион<br />Российской Федерации
        </h1>
        <div className="text-xl md:text-2xl font-semibold mb-6" style={{ color: accent }}>
          Саратовская область
        </div>
        <div className="h-px w-40 mx-auto mb-6" style={{ background: accent }} />
        <p className="text-base leading-relaxed mb-8" style={{ color: "#c8c0b0" }}>
          Территория, население и природно-климатические<br />особенности Саратовской области
        </p>
        <div className="inline-block rounded-lg px-6 py-3 text-sm" style={{ background: `${accent}22`, border: `1px solid ${accent}66`, color: accent }}>
          🇷🇺 Россия · Поволжье · 2026 год
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm" style={{ color: "#5a5248" }}>
          <Icon name="ChevronRight" size={16} />
          <span>Используйте стрелки для перехода между слайдами</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 1 — О РОССИ В ЦЕЛОМ
════════════════════════════════════════════════════ */
function Slide1({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="Наша Родина — Россия" accent={accent} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        <div className="flex flex-col gap-3">
          <TextBlock title="Официальные названия" accent={accent}>
            <p>Государство официально именуется <strong style={{ color: "#f5f0e8" }}>«Россия»</strong> или <strong style={{ color: "#f5f0e8" }}>«Российская Федерация»</strong>. Оба названия закреплены в Конституции и равнозначны — используются как в официальных документах, так и в разговорной речи.</p>
          </TextBlock>
          <TextBlock title="Территория" accent={accent}>
            <p>Россия — <strong style={{ color: "#f5f0e8" }}>самое большое по территории государство в мире</strong>. Её площадь составляет более <strong style={{ color: "#f5f0e8" }}>17 миллионов км²</strong>.</p>
            <p className="mt-2">Для сравнения: сумма площадей Канады (2-е место в мире) и Австралии (6-е место) лишь немного превышает площадь России.</p>
          </TextBlock>
          <TextBlock title="Возраст государства" accent={accent}>
            <p>В 2025 году России исполнилось <strong style={{ color: "#f5f0e8" }}>1163 года</strong> — одно из древнейших государств мира (12-е место по возрасту).</p>
            <p className="mt-2">Для сравнения: США существуют лишь <strong style={{ color: "#f5f0e8" }}>249 лет</strong>.</p>
          </TextBlock>
        </div>
        <div className="flex flex-col gap-3">
          <TextBlock title="Народы России" accent={accent}>
            <p>В России проживают представители <strong style={{ color: "#f5f0e8" }}>более 190 народов</strong>. Семь из них имеют численность свыше одного миллиона человек:</p>
            <ul className="mt-2 space-y-1">
              {["Русские", "Татары", "Украинцы", "Башкиры", "Чуваши", "Чеченцы", "Армяне"].map((n, i) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${accent}44`, color: accent }}>{i + 1}</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </TextBlock>
          <TextBlock title="Устройство государства" accent={accent}>
            <p>Россия состоит из <strong style={{ color: "#f5f0e8" }}>89 субъектов Федерации</strong> (регионов). Каждый регион имеет свои особенности: историю, природу, население.</p>
            <p className="mt-2">Второе официальное название — <strong style={{ color: "#f5f0e8" }}>«Российская Федерация»</strong> — подчёркивает федеративный характер государства.</p>
          </TextBlock>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 2 — ГЕОГРАФИЯ
════════════════════════════════════════════════════ */
function Slide2({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="География и местоположение" accent={accent} />
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 rounded-lg overflow-hidden" style={{ border: `1px solid ${accent}44`, minHeight: 180 }}>
          <img src={MAP_IMG} alt="Карта Саратовской области" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 md:w-80">
          <TextBlock title="Положение на карте России" accent={accent}>
            <p>Саратовская область расположена на <strong style={{ color: "#f5f0e8" }}>юге европейской части России</strong>, в Поволжском экономическом районе. Занимает <strong style={{ color: "#f5f0e8" }}>32-е место</strong> по площади среди 89 субъектов Российской Федерации.</p>
          </TextBlock>
          <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${accent}33` }}>
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>Размеры области</div>
            <FactRow label="Площадь" value="101 240 км²" accent={accent} />
            <FactRow label="Протяжённость (запад — восток)" value="575 км" accent={accent} />
            <FactRow label="Протяжённость (север — юг)" value="330 км" accent={accent} />
            <FactRow label="Граница с Казахстаном" value="520 км" accent={accent} />
          </div>
          <TextBlock title="Соседние регионы" accent={accent}>
            <div className="flex flex-wrap gap-1 mt-1">
              {["Пензенская обл.", "Ульяновская обл.", "Самарская обл.", "Воронежская обл.", "Волгоградская обл.", "Республика Казахстан"].map(r => (
                <span key={r} className="text-xs px-2 py-1 rounded" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>{r}</span>
              ))}
            </div>
          </TextBlock>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 3 — НАСЕЛЕНИЕ
════════════════════════════════════════════════════ */
function Slide3({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="Население и национальный состав" accent={accent} />
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 rounded-lg overflow-hidden" style={{ border: `1px solid ${accent}44`, minHeight: 160 }}>
          <img src={PEOPLE_IMG} alt="Народы области" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 md:w-80">
          <div className="rounded-lg p-4 text-center" style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}>
            <div className="text-3xl font-bold" style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}>2 385 430</div>
            <div className="text-sm mt-1" style={{ color: accent }}>человек — население области</div>
            <div className="text-xs mt-1" style={{ color: "#8a8070" }}>по итогам 2024 года</div>
          </div>
          <TextBlock title="Национальный состав" accent={accent}>
            <p>Как и вся Россия, Саратовская область — многонациональный регион. Крупнейшие народы по численности:</p>
            <div className="mt-3 space-y-2">
              {[
                { n: "Русские", pos: "1-е место", note: "основное население" },
                { n: "Казахи", pos: "2-е место", note: "близость к Казахстану" },
                { n: "Татары", pos: "3-е место", note: "исторически сложившаяся община" },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded mt-0.5" style={{ background: `${accent}33`, color: accent }}>{item.pos}</span>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#f5f0e8" }}>{item.n}</div>
                    <div className="text-xs" style={{ color: "#8a8070" }}>{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </TextBlock>
          <TextBlock accent={accent}>
            <p>Всего в области проживают представители <strong style={{ color: "#f5f0e8" }}>более 100 народов и народностей</strong> — отражение многонационального характера всей Российской Федерации.</p>
          </TextBlock>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 4 — КЛИМАТ И ПРИРОДА
════════════════════════════════════════════════════ */
function Slide4({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="Природно-климатические особенности" accent={accent} />
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 rounded-lg overflow-hidden" style={{ border: `1px solid ${accent}44`, minHeight: 160 }}>
          <img src={NATURE_IMG} alt="Природа Саратовской области" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 md:w-80 overflow-auto">
          <TextBlock title="Тип климата" accent={accent}>
            <p>Климат Саратовской области — <strong style={{ color: "#f5f0e8" }}>резко континентальный</strong>. Это означает значительные перепады температур между сезонами: жаркое сухое лето и холодная зима.</p>
          </TextBlock>
          <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${accent}33` }}>
            <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>Характеристики климата</div>
            <FactRow label="Лето" value="Жаркое, до +38°C и выше" accent={accent} />
            <FactRow label="Зима" value="Холодная, ниже −20°C" accent={accent} />
            <FactRow label="Осадки" value="Недостаточное увлажнение" accent={accent} />
            <FactRow label="Ветры" value="Суховеи в летний период" accent={accent} />
          </div>
          <TextBlock title="Природные зоны и рельеф" accent={accent}>
            <p><strong style={{ color: "#f5f0e8" }}>Правобережье</strong> (западная часть): холмистая местность, лесостепи и дубравы, Приволжская возвышенность.</p>
            <p className="mt-2"><strong style={{ color: "#f5f0e8" }}>Левобережье</strong> (восточная часть): равнины и степи, переходящие в полупустыни у границы с Казахстаном.</p>
            <p className="mt-2">Главная река — <strong style={{ color: "#f5f0e8" }}>Волга</strong> — делит область на две части и является важнейшей водной артерией региона.</p>
          </TextBlock>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 5 — ИСТОРИЯ
════════════════════════════════════════════════════ */
function Slide5({ accent }: { accent: string }) {
  const events = [
    { period: "Древность — XV в.", text: "Территорию заселяли скифы, сарматы, затем половцы. В XIII–XV веках земли входили в состав Золотой Орды — могущественного государства монгольских завоевателей." },
    { period: "1590 год", text: "Основание города Саратова как пограничной крепости для защиты южных рубежей Русского государства. Крепость была возведена на берегу реки Волги." },
    { period: "1780 год", text: "По указу императрицы Екатерины Великой учреждено Саратовское наместничество — первая административная единица на этой территории. С этого момента отсчитывается 245-летняя история края как самостоятельной административной единицы." },
    { period: "1936 год", text: "Конституция СССР официально закрепила статус Саратовской области в современных границах. Именно с этого года отсчитывается «возраст» области." },
    { period: "2026 год", text: "Саратовская область отмечает 90-летний юбилей со дня получения официального статуса. Это важная дата в истории нашего края." },
  ];
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="История нашего края" accent={accent} />
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 rounded-lg overflow-hidden" style={{ border: `1px solid ${accent}44`, minHeight: 160 }}>
          <img src={CITY_IMG} alt="Саратов" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 md:w-96 overflow-auto">
          {events.map((e, i) => (
            <div key={i} className="flex gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${accent}22` }}>
              <div className="flex-shrink-0">
                <div className="text-xs font-bold px-2 py-1 rounded text-center min-w-16" style={{ background: `${accent}33`, color: accent }}>{e.period}</div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#d8d0c0" }}>{e.text}</p>
            </div>
          ))}
          <div className="rounded-lg p-3 mt-1" style={{ background: `${accent}15`, border: `1px solid ${accent}44` }}>
            <p className="text-xs" style={{ color: accent }}>
              📌 <strong>Малая родина</strong> — населённый пункт, где человек появился на свет. Это может быть хутор, деревня, село, районный центр, небольшой город или сам Саратов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 6 — АДМИНИСТРАТИВНОЕ ДЕЛЕНИЕ
════════════════════════════════════════════════════ */
function Slide6({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="Административное деление области" accent={accent} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 content-start">
        <div className="md:col-span-3">
          <TextBlock title="Структура области" accent={accent}>
            <p>Саратовская область разделена на <strong style={{ color: "#f5f0e8" }}>38 административных районов</strong>. Естественной границей между двумя частями области служит река Волга, которая делит территорию на Правобережье и Левобережье.</p>
          </TextBlock>
        </div>
        <div className="rounded-lg p-5" style={{ background: `${accent}15`, border: `1px solid ${accent}55` }}>
          <div className="text-4xl font-bold text-center mb-1" style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}>20</div>
          <div className="text-center text-sm font-bold mb-3" style={{ color: accent }}>Правобережье</div>
          <p className="text-xs text-center leading-relaxed" style={{ color: "#b0a898" }}>Районы на правом (западном) берегу Волги. Холмистый рельеф, лесостепи, исторические города и сёла.</p>
        </div>
        <div className="rounded-lg p-5 flex flex-col items-center justify-center" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${accent}33` }}>
          <div className="text-5xl font-bold mb-2" style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}>38</div>
          <div className="text-sm font-bold" style={{ color: accent }}>районов всего</div>
          <div className="h-px w-16 my-3" style={{ background: accent }} />
          <div className="text-xs text-center" style={{ color: "#8a8070" }}>в составе<br />Саратовской области</div>
        </div>
        <div className="rounded-lg p-5" style={{ background: `${accent}15`, border: `1px solid ${accent}55` }}>
          <div className="text-4xl font-bold text-center mb-1" style={{ color: "#f5f0e8", fontFamily: "Georgia, serif" }}>18</div>
          <div className="text-center text-sm font-bold mb-3" style={{ color: accent }}>Левобережье</div>
          <p className="text-xs text-center leading-relaxed" style={{ color: "#b0a898" }}>Районы на левом (восточном) берегу Волги. Степи и полупустыни, граница с Республикой Казахстан.</p>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${accent}33` }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FactRow label="Населённых пунктов" value="1 848" accent={accent} />
              <FactRow label="Областной центр" value="г. Саратов" accent={accent} />
              <FactRow label="Год основания Саратова" value="1590 г." accent={accent} />
              <FactRow label="Площадь области" value="101 240 км²" accent={accent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   СЛАЙД 7 — ИТОГОВЫЕ ФАКТЫ
════════════════════════════════════════════════════ */
function Slide7({ accent }: { accent: string }) {
  const facts = [
    { label: "Площадь области", value: "101 240 км²", note: "32-е место в России" },
    { label: "Население", value: "2 385 430 чел.", note: "данные 2024 года" },
    { label: "Населённых пунктов", value: "1 848", note: "сёла, деревни, города" },
    { label: "Административных районов", value: "38", note: "20 правых + 18 левых" },
    { label: "Год основания Саратова", value: "1590 год", note: "436 лет истории" },
    { label: "Юбилей области", value: "90 лет в 2026 г.", note: "статус с 1936 года" },
    { label: "Протяжённость з↔в", value: "575 км", note: "с запада на восток" },
    { label: "Протяжённость с↕ю", value: "330 км", note: "с севера на юг" },
    { label: "Граница с Казахстаном", value: "520 км", note: "самая длинная граница" },
    { label: "Место в России по площади", value: "32-е место", note: "из 89 субъектов" },
    { label: "Тип климата", value: "Континентальный", note: "жаркое лето, холодная зима" },
    { label: "Наместничество учреждено", value: "1780 год", note: "Екатерина Великая" },
  ];
  return (
    <div className="flex flex-col h-full px-6 pt-5 pb-4 overflow-auto">
      <SlideTitle text="Ключевые факты о Саратовской области" accent={accent} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 content-start">
        {facts.map((f) => (
          <div key={f.label} className="flex justify-between items-start gap-3 rounded-lg px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${accent}22` }}>
            <div>
              <div className="text-sm" style={{ color: "#b0a898" }}>{f.label}</div>
              <div className="text-xs mt-0.5" style={{ color: "#5a5248" }}>{f.note}</div>
            </div>
            <div className="text-sm font-bold text-right flex-shrink-0" style={{ color: "#f5f0e8" }}>{f.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg p-3 text-center" style={{ background: `${accent}15`, border: `1px solid ${accent}33` }}>
        <span className="text-sm" style={{ color: accent }}>
          Саратовская область — наша малая Родина, часть великой России 🇷🇺
        </span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   ГЛАВНЫЙ КОМПОНЕНТ
════════════════════════════════════════════════════ */
const slideComponents = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dir, setDir] = useState<"l" | "r">("r");

  const goTo = (next: number) => {
    if (next < 0 || next >= slides.length || next === current) return;
    setDir(next > current ? "l" : "r");
    setVisible(false);
    setTimeout(() => {
      setCurrent(next);
      setVisible(true);
    }, 200);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current]);

  const SlideComp = slideComponents[current];
  const { bg, accent } = SLIDE_BG[current];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-3 md:p-5"
      style={{ background: "#0d0d14", fontFamily: "'Nunito', 'Georgia', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');
        .slide-anim { transition: opacity 0.2s ease, transform 0.2s ease; }
        .slide-in { opacity: 1; transform: translateX(0); }
        .slide-out-l { opacity: 0; transform: translateX(-32px); }
        .slide-out-r { opacity: 0; transform: translateX(32px); }
      `}</style>

      {/* Навигация-вкладки */}
      <div className="flex items-center gap-1 mb-3 flex-wrap justify-center max-w-4xl">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="text-xs px-3 py-1.5 rounded transition-all duration-200 font-semibold"
            style={
              i === current
                ? { background: accent, color: "#1a1a2a" }
                : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }
            }
          >
            {i + 1}. {s.label}
          </button>
        ))}
      </div>

      {/* Слайд */}
      <div
        className={`slide-anim w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl ${visible ? "slide-in" : dir === "l" ? "slide-out-l" : "slide-out-r"}`}
        style={{
          background: bg,
          border: `1px solid ${accent}33`,
          minHeight: 500,
          height: "calc(100vh - 160px)",
          maxHeight: 680,
          boxShadow: `0 0 60px ${accent}15, 0 24px 48px rgba(0,0,0,0.6)`,
        }}
      >
        <SlideComp accent={accent} />
      </div>

      {/* Нижняя навигация */}
      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.08)", color: current === 0 ? "#3a3830" : "#c0b8a8", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>
        <span className="text-xs" style={{ color: "#4a4840" }}>
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
          style={{ background: current === slides.length - 1 ? "rgba(255,255,255,0.04)" : `${accent}33`, color: current === slides.length - 1 ? "#3a3830" : accent, border: `1px solid ${accent}44` }}
        >
          Вперёд
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>
      <div className="mt-1 text-xs" style={{ color: "#2a2820" }}>← → клавиши клавиатуры</div>
    </div>
  );
}
