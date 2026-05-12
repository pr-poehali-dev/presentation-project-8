import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const MAP_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/bda0cbd3-822a-4deb-a60b-a7dafdc33ca6.jpg";
const CITY_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/a0420166-5a38-4501-93ea-fe209fbbee9b.jpg";
const PEOPLE_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/f92f880c-d0d0-4e83-8c53-10b696f95776.jpg";
const NATURE_IMG = "https://cdn.poehali.dev/projects/a0898aa0-e78d-44c2-9bfc-bf479da31037/files/b74f4805-5f44-45ef-8d6f-6a738504d5ba.jpg";

const slides = [
  { id: 0, label: "Титул" },
  { id: 1, label: "География" },
  { id: 2, label: "Население" },
  { id: 3, label: "Природа" },
  { id: 4, label: "История" },
  { id: 5, label: "Районы" },
  { id: 6, label: "Факты" },
];

const SLIDE_COLORS = [
  "from-blue-600 to-indigo-700",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-green-500 to-lime-600",
  "from-purple-600 to-violet-700",
  "from-sky-500 to-cyan-600",
  "from-rose-500 to-pink-600",
];

function Slide0() {
  return (
    <div className="slide-inner flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              top: `${Math.sin(i * 1.2) * 40 + 50}%`,
              left: `${Math.cos(i * 0.8) * 40 + 50}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <div className="text-8xl mb-4 animate-bounce">🏔️</div>
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-8 py-3 mb-6 inline-block">
          <span className="text-white/90 text-xl font-bold tracking-widest uppercase">5 класс • География</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-lg">
          Саратовская<br />область
        </h1>
        <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
          64-й регион России 🇷🇺
        </div>
        <p className="text-white/80 text-xl max-w-lg mx-auto leading-relaxed">
          Территория, население и<br />природно-климатические особенности
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 text-white/60 text-lg">
          <Icon name="ChevronRight" size={20} />
          <span>Листайте вправо, чтобы начать</span>
        </div>
      </div>
    </div>
  );
}

function Slide1() {
  const neighbors = [
    { name: "Пензенская", dir: "↖", color: "bg-blue-100 text-blue-800" },
    { name: "Ульяновская", dir: "↑", color: "bg-purple-100 text-purple-800" },
    { name: "Самарская", dir: "↗", color: "bg-orange-100 text-orange-800" },
    { name: "Воронежская", dir: "←", color: "bg-green-100 text-green-800" },
    { name: "Казахстан", dir: "→", color: "bg-yellow-100 text-yellow-800" },
    { name: "Волгоградская", dir: "↓", color: "bg-red-100 text-red-800" },
  ];
  return (
    <div className="slide-inner flex flex-col h-full px-6 pt-6 pb-4 overflow-auto">
      <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow">
        🗺️ География и местоположение
      </h2>
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden">
          <img src={MAP_IMG} alt="Карта Саратовской области" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 md:w-72">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-white font-black text-4xl">101 240</div>
            <div className="text-white/80 text-sm font-semibold">км² — площадь области</div>
            <div className="text-yellow-300 text-xs mt-1">32-е место среди регионов РФ</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-white font-black text-2xl">575 км ↔</div>
            <div className="text-white/80 text-sm">с запада на восток</div>
            <div className="text-white font-black text-2xl mt-1">330 км ↕</div>
            <div className="text-white/80 text-sm">с севера на юг</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
            <div className="text-white font-bold text-sm mb-2">Граничит с:</div>
            <div className="flex flex-wrap gap-1">
              {neighbors.map((n) => (
                <span key={n.name} className={`${n.color} text-xs font-bold px-2 py-1 rounded-full`}>
                  {n.dir} {n.name}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-yellow-400/30 backdrop-blur-sm rounded-2xl p-3 border-2 border-yellow-300/50">
            <div className="text-yellow-200 text-xs font-bold">🇰🇿 Граница с Казахстаном</div>
            <div className="text-white font-black text-2xl">520 км</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  const nations = [
    { name: "Русские", place: "🥇 1-е место", emoji: "🫅", color: "bg-blue-500" },
    { name: "Казахи", place: "🥈 2-е место", emoji: "🤴", color: "bg-yellow-500" },
    { name: "Татары", place: "🥉 3-е место", emoji: "👳", color: "bg-green-500" },
  ];
  return (
    <div className="slide-inner flex flex-col h-full px-6 pt-6 pb-4 overflow-auto">
      <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow">
        👥 Население и национальности
      </h2>
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden">
          <img src={PEOPLE_IMG} alt="Народы области" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 md:w-72">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="text-white font-black text-5xl">2 385 430</div>
            <div className="text-white/80 text-sm font-semibold mt-1">человек проживает в области</div>
            <div className="text-yellow-300 text-xs mt-1">по итогам 2024 года</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-white font-bold text-sm mb-3">Основные народы:</div>
            <div className="flex flex-col gap-2">
              {nations.map((n) => (
                <div key={n.name} className="flex items-center gap-3 bg-white/10 rounded-xl p-2">
                  <div className={`w-10 h-10 ${n.color} rounded-full flex items-center justify-center text-xl`}>{n.emoji}</div>
                  <div>
                    <div className="text-white font-bold text-base">{n.name}</div>
                    <div className="text-white/70 text-xs">{n.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
            <div className="text-white/80 text-xs leading-relaxed">
              🌍 В области живут представители <span className="text-yellow-300 font-bold">более 100 народов</span> — так же, как и во всей России
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide3() {
  const facts = [
    { icon: "☀️", title: "Лето", text: "Жаркое, сухое. Температура до +38°C" },
    { icon: "❄️", title: "Зима", text: "Холодная. Морозы ниже −20°C" },
    { icon: "🌿", title: "Климат", text: "Континентальный — резкие перепады" },
    { icon: "🏞️", title: "Рельеф", text: "Правобережье — холмы, Левобережье — степь" },
    { icon: "🌊", title: "Волга", text: "Главная река. Делит область на 2 части" },
    { icon: "🌻", title: "Природа", text: "Степи, леса, луга и поймы рек" },
  ];
  return (
    <div className="slide-inner flex flex-col h-full px-6 pt-6 pb-4 overflow-auto">
      <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow">
        🌿 Природно-климатические особенности
      </h2>
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden">
          <img src={NATURE_IMG} alt="Природа области" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:w-72 content-start">
          {facts.map((f) => (
            <div key={f.title} className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 flex flex-col gap-1">
              <div className="text-3xl">{f.icon}</div>
              <div className="text-white font-black text-base">{f.title}</div>
              <div className="text-white/80 text-xs leading-snug">{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide4() {
  const events = [
    { year: "Древность", text: "Территорию населяли скифы, сарматы, половцы и другие народы", emoji: "⚔️" },
    { year: "XIII–XV вв.", text: "Земли входили в состав Золотой Орды", emoji: "🏕️" },
    { year: "1590", text: "Основание города Саратова как пограничной крепости", emoji: "🏰" },
    { year: "1780", text: "Екатерина Великая учредила Саратовское наместничество", emoji: "👑" },
    { year: "1936", text: "Конституция СССР закрепила Саратовскую область", emoji: "📜" },
    { year: "2026", text: "90-летний юбилей Саратовской области!", emoji: "🎉" },
  ];
  return (
    <div className="slide-inner flex flex-col h-full px-6 pt-6 pb-4 overflow-auto">
      <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow">
        📜 История края и города Саратова
      </h2>
      <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
        <div className="flex-1 bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden">
          <img src={CITY_IMG} alt="Саратов" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 md:w-80 overflow-auto">
          {events.map((e, i) => (
            <div key={i} className="flex gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-3 items-start">
              <div className="text-3xl mt-0.5">{e.emoji}</div>
              <div>
                <div className="text-yellow-300 font-black text-base">{e.year}</div>
                <div className="text-white text-sm leading-snug">{e.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="slide-inner flex flex-col h-full px-6 pt-6 pb-4 overflow-auto">
      <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow">
        🗂️ Административное деление
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center justify-center text-center">
          <div className="text-6xl font-black text-white mb-2">38</div>
          <div className="text-white/80 text-lg font-bold">районов</div>
          <div className="text-yellow-300 text-sm mt-2">во всей области</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center justify-center text-center">
          <div className="text-5xl mb-2">🏞️</div>
          <div className="text-white font-black text-3xl">20</div>
          <div className="text-white/80 font-bold">Правобережье</div>
          <div className="text-white/60 text-sm mt-1">правый берег Волги</div>
          <div className="mt-3 text-xs text-white/70 leading-relaxed">Холмистый рельеф, леса, исторические города</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center justify-center text-center">
          <div className="text-5xl mb-2">🌾</div>
          <div className="text-white font-black text-3xl">18</div>
          <div className="text-white/80 font-bold">Левобережье</div>
          <div className="text-white/60 text-sm mt-1">левый берег Волги</div>
          <div className="mt-3 text-xs text-white/70 leading-relaxed">Степи и равнины, граница с Казахстаном</div>
        </div>
        <div className="md:col-span-3 bg-white/15 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <div>
              <div className="text-white font-black text-2xl">1 848</div>
              <div className="text-white/70 text-sm">населённых пунктов</div>
            </div>
            <div className="w-px bg-white/20 hidden md:block" />
            <div>
              <div className="text-white font-black text-2xl">🏙️ Саратов</div>
              <div className="text-white/70 text-sm">областной центр</div>
            </div>
            <div className="w-px bg-white/20 hidden md:block" />
            <div>
              <div className="text-white font-black text-2xl">🌊 Волга</div>
              <div className="text-white/70 text-sm">делит область на 2 части</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide6() {
  const facts = [
    { emoji: "📐", value: "101 240 км²", label: "площадь области", sub: "32-е место в России" },
    { emoji: "👥", value: "2 385 430", label: "жителей области", sub: "по данным 2024 г." },
    { emoji: "🏘️", value: "1 848", label: "населённых пунктов", sub: "сёла, деревни, города" },
    { emoji: "🗂️", value: "38 районов", label: "административных", sub: "20 правых + 18 левых" },
    { emoji: "🏙️", value: "1590 год", label: "основан Саратов", sub: "436 лет истории" },
    { emoji: "🎂", value: "90 лет", label: "области в 2026 году", sub: "статус с 1936 года" },
    { emoji: "🇰🇿", value: "520 км", label: "граница с Казахстаном", sub: "самая длинная" },
    { emoji: "📏", value: "575 км", label: "с запада на восток", sub: "протяжённость" },
  ];
  return (
    <div className="slide-inner flex flex-col h-full px-6 pt-6 pb-4 overflow-auto">
      <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-2 drop-shadow">
        ⭐ Ключевые факты
      </h2>
      <p className="text-white/70 text-center text-sm mb-4">Всё самое важное о Саратовской области</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 content-start">
        {facts.map((f, i) => (
          <div
            key={i}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-200 hover:scale-105"
          >
            <div className="text-4xl mb-2">{f.emoji}</div>
            <div className="text-white font-black text-lg leading-tight">{f.value}</div>
            <div className="text-white/80 text-xs mt-1 font-semibold">{f.label}</div>
            <div className="text-white/50 text-xs mt-0.5">{f.sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 bg-white/10 rounded-2xl p-3 text-center">
        <span className="text-white/60 text-sm">🎓 Саратовская область — наша малая Родина!</span>
      </div>
    </div>
  );
}

const slideComponents = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [visible, setVisible] = useState(true);

  const goTo = (next: number) => {
    if (next < 0 || next >= slides.length || next === current) return;
    const dir = next > current ? "left" : "right";
    setAnimDir(dir);
    setVisible(false);
    setTimeout(() => {
      setCurrent(next);
      setVisible(true);
      setAnimDir(null);
    }, 220);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const SlideComp = slideComponents[current];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-3 md:p-6"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", fontFamily: "'Nunito', sans-serif" }}
    >
      <style>{`
        .slide-wrapper {
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .slide-hidden-left { opacity: 0; transform: translateX(-40px); }
        .slide-hidden-right { opacity: 0; transform: translateX(40px); }
        .slide-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      {/* Навигация-точки сверху */}
      <div className="flex items-center gap-1.5 mb-4">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={s.label}
            className={`transition-all duration-300 rounded-full font-bold text-xs ${
              i === current
                ? "bg-white text-gray-800 px-4 py-1.5 shadow-lg"
                : "bg-white/20 text-white/60 px-2 py-1.5 hover:bg-white/40"
            }`}
          >
            {i === current ? s.label : i + 1}
          </button>
        ))}
      </div>

      {/* Слайд */}
      <div
        className={`slide-wrapper w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br ${SLIDE_COLORS[current]} ${
          !visible
            ? animDir === "left"
              ? "slide-hidden-left"
              : "slide-hidden-right"
            : "slide-visible"
        }`}
        style={{ minHeight: "520px", height: "calc(100vh - 180px)", maxHeight: "680px" }}
      >
        <SlideComp />
      </div>

      {/* Управление */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/30 disabled:opacity-30 text-white font-bold px-5 py-2.5 rounded-2xl transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
        >
          <Icon name="ChevronLeft" size={18} />
          Назад
        </button>

        <span className="text-white/50 font-semibold text-sm">
          {current + 1} / {slides.length}
        </span>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/30 disabled:opacity-30 text-white font-bold px-5 py-2.5 rounded-2xl transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
        >
          Вперёд
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>

      <div className="mt-2 text-white/30 text-xs">Используй стрелки ← → на клавиатуре</div>
    </div>
  );
}
