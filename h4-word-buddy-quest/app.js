const lessonPlan = [
  { id: "h1-l1", unlockLevel: 1, title: "H1-L1 教室", subtitle: "My Classroom", icon: "🏫" },
  { id: "h1-l2", unlockLevel: 2, title: "H1-L2 家人與房間", subtitle: "Family and Rooms", icon: "🏠" },
  { id: "h1-l3", unlockLevel: 3, title: "H1-L3 數字與年齡", subtitle: "Numbers and Age", icon: "🔢" },
  { id: "h1-l4", unlockLevel: 4, title: "H1-L4 顏色與衣物", subtitle: "Colors and Clothes", icon: "🎨" },
  { id: "h2-l1", unlockLevel: 5, title: "H2-L1 五官", subtitle: "Body Parts 1", icon: "😊" },
  { id: "h2-l2", unlockLevel: 6, title: "H2-L2 身體部位", subtitle: "Body Parts 2", icon: "🖐️" },
  { id: "h2-l3", unlockLevel: 7, title: "H2-L3 動作", subtitle: "Actions", icon: "🏃" },
  { id: "h2-l4", unlockLevel: 8, title: "H2-L4 寵物與動物", subtitle: "Pets and Animals", icon: "🐶" },
  { id: "h3-l1", unlockLevel: 9, title: "H3-L1 水果", subtitle: "Fruits", icon: "🍓" },
  { id: "h3-l2", unlockLevel: 10, title: "H3-L2 早餐", subtitle: "Breakfast", icon: "🍳" },
  { id: "h3-l3", unlockLevel: 11, title: "H3-L3 午晚餐", subtitle: "Lunch and Dinner", icon: "🍱" },
  { id: "h3-l4", unlockLevel: 12, title: "H3-L4 日常作息", subtitle: "Daily Routine", icon: "⏰" },
  { id: "h4-l1", unlockLevel: 13, title: "H4-L1 飲料", subtitle: "Drinks", icon: "🧋" },
  { id: "h4-l2", unlockLevel: 14, title: "H4-L2 點心", subtitle: "Snacks", icon: "🍿" },
  { id: "h4-l3", unlockLevel: 15, title: "H4-L3 遊樂場", subtitle: "Playground", icon: "🛝" },
  { id: "h4-l4", unlockLevel: 16, title: "H4-L4 運動", subtitle: "Sports", icon: "🏀" },
  { id: "h4-review", unlockLevel: 17, title: "H4 期末複習", subtitle: "Final Review", icon: "🏆" },
];

const lessonWordData = {
  "h1-l1": [
    ["classroom", "教室", "🏫"],
    ["window", "窗戶", "🪟"],
    ["door", "門", "🚪"],
    ["desk", "書桌", "🪑"],
    ["chair", "椅子", "💺"],
    ["fan", "電扇", "🌀"],
    ["air conditioner", "冷氣", "❄️"],
    ["board", "黑板/白板", "⬛"],
    ["teacher", "老師", "👩‍🏫"],
    ["boy", "男孩", "👦"],
    ["schoolbag", "書包", "🎒"],
    ["book", "書", "📖"],
    ["pencil", "鉛筆", "✏️"],
    ["ruler", "尺", "📏"],
    ["eraser", "橡皮擦", "🧽"],
    ["marker", "麥克筆", "🖊️"],
    ["sharpener", "削鉛筆機", "✏️"],
  ],
  "h1-l2": [
    ["father", "爸爸", "👨"],
    ["mother", "媽媽", "👩"],
    ["grandfather", "爺爺/外公", "👴"],
    ["grandmother", "奶奶/外婆", "👵"],
    ["brother", "兄弟", "👦"],
    ["sister", "姊妹", "👧"],
    ["baby", "寶寶", "👶"],
    ["family", "家人", "👨‍👩‍👧‍👦"],
    ["living room", "客廳", "🛋️"],
    ["bedroom", "臥室", "🛏️"],
    ["bathroom", "浴室", "🛁"],
    ["kitchen", "廚房", "🍳"],
  ],
  "h1-l3": [
    ["one", "一", "1️⃣"],
    ["two", "二", "2️⃣"],
    ["three", "三", "3️⃣"],
    ["four", "四", "4️⃣"],
    ["five", "五", "5️⃣"],
    ["six", "六", "6️⃣"],
    ["seven", "七", "7️⃣"],
    ["eight", "八", "8️⃣"],
    ["nine", "九", "9️⃣"],
    ["ten", "十", "🔟"],
    ["eleven", "十一", "🕚"],
    ["twelve", "十二", "🕛"],
    ["age", "年齡", "🎂"],
    ["birthday", "生日", "🎉"],
    ["candle", "蠟燭", "🕯️"],
  ],
  "h1-l4": [
    ["red", "紅色", "🔴"],
    ["blue", "藍色", "🔵"],
    ["yellow", "黃色", "🟡"],
    ["green", "綠色", "🟢"],
    ["black", "黑色", "⚫"],
    ["white", "白色", "⚪"],
    ["purple", "紫色", "🟣"],
    ["orange", "橘色", "🟠"],
    ["pink", "粉紅色", "🌸"],
    ["socks", "襪子", "🧦"],
    ["shoes", "鞋子", "👟"],
    ["pants", "長褲", "👖"],
    ["shorts", "短褲", "🩳"],
    ["skirt", "裙子", "👗"],
  ],
  "h2-l1": [
    ["eye", "眼睛", "👁️"],
    ["ear", "耳朵", "👂"],
    ["mouth", "嘴巴", "👄"],
    ["nose", "鼻子", "👃"],
    ["hair", "頭髮", "💇"],
    ["head", "頭", "🙂"],
    ["face", "臉", "😊"],
    ["neck", "脖子", "🧣"],
    ["shoulder", "肩膀", "💪"],
    ["tooth", "牙齒", "🦷"],
    ["lips", "嘴唇", "👄"],
  ],
  "h2-l2": [
    ["hand", "手", "✋"],
    ["arm", "手臂", "💪"],
    ["finger", "手指", "☝️"],
    ["leg", "腿", "🦵"],
    ["foot", "腳", "🦶"],
    ["toe", "腳趾", "🦶"],
    ["body", "身體", "🧍"],
    ["knee", "膝蓋", "🦵"],
  ],
  "h2-l3": [
    ["run", "跑步", "🏃"],
    ["walk", "走路", "🚶"],
    ["jump", "跳", "🦘"],
    ["kick", "踢", "🦵"],
    ["throw", "丟", "🤾"],
    ["stand", "站", "🧍"],
    ["sit", "坐", "🪑"],
    ["eat", "吃", "🍽️"],
    ["drink", "喝", "🥤"],
    ["swim", "游泳", "🏊"],
    ["sleep", "睡覺", "😴"],
    ["fly", "飛", "🪽"],
  ],
  "h2-l4": [
    ["mouse", "老鼠", "🐭"],
    ["cat", "貓", "🐱"],
    ["rabbit", "兔子", "🐰"],
    ["sheep", "綿羊", "🐑"],
    ["fish", "魚", "🐟"],
    ["hamster", "倉鼠", "🐹"],
    ["lizard", "蜥蜴", "🦎"],
    ["tiger", "老虎", "🐯"],
    ["bee", "蜜蜂", "🐝"],
    ["snake", "蛇", "🐍"],
    ["guinea pig", "天竺鼠", "🐹"],
    ["parrot", "鸚鵡", "🦜"],
    ["bird", "鳥", "🐦"],
    ["butterfly", "蝴蝶", "🦋"],
    ["dog", "狗", "🐶"],
    ["monkey", "猴子", "🐵"],
  ],
  "h3-l1": [
    ["apple", "蘋果", "🍎"],
    ["banana", "香蕉", "🍌"],
    ["orange", "柳橙", "🍊"],
    ["watermelon", "西瓜", "🍉"],
    ["durian", "榴槤", "🌰"],
    ["papaya", "木瓜", "🟠"],
    ["coconut", "椰子", "🥥"],
    ["kiwi", "奇異果", "🥝"],
    ["grapes", "葡萄", "🍇"],
    ["strawberry", "草莓", "🍓"],
    ["pear", "梨子", "🍐"],
    ["cherry", "櫻桃", "🍒"],
    ["mango", "芒果", "🥭"],
  ],
  "h3-l2": [
    ["breakfast", "早餐", "🍳"],
    ["bread", "麵包", "🍞"],
    ["toast", "吐司", "🍞"],
    ["sandwich", "三明治", "🥪"],
    ["egg", "蛋", "🥚"],
    ["bacon", "培根", "🥓"],
    ["ham", "火腿", "🍖"],
    ["rice", "米飯", "🍚"],
    ["milk", "牛奶", "🥛"],
    ["juice", "果汁", "🧃"],
    ["cereal", "麥片", "🥣"],
  ],
  "h3-l3": [
    ["lunch", "午餐", "🍱"],
    ["dinner", "晚餐", "🍽️"],
    ["rice", "米飯", "🍚"],
    ["noodles", "麵", "🍜"],
    ["soup", "湯", "🥣"],
    ["chicken", "雞肉", "🍗"],
    ["fish", "魚", "🐟"],
    ["beef", "牛肉", "🥩"],
    ["pork", "豬肉", "🥩"],
    ["vegetables", "蔬菜", "🥬"],
    ["salad", "沙拉", "🥗"],
    ["dumplings", "水餃", "🥟"],
  ],
  "h3-l4": [
    ["daily routine", "日常作息", "⏰"],
    ["get up", "起床", "🌅"],
    ["go to school", "去上學", "🏫"],
    ["go home", "回家", "🏠"],
    ["do homework", "寫作業", "✏️"],
    ["take a shower", "洗澡", "🚿"],
    ["take a bath", "泡澡", "🛁"],
    ["eat lunch", "吃午餐", "🍱"],
    ["eat dinner", "吃晚餐", "🍽️"],
    ["go to bed", "上床睡覺", "🛏️"],
    ["clock", "時鐘", "🕘"],
    ["time", "時間", "⏱️"],
  ],
  "h4-l1": [
    ["tea", "茶", "🍵"],
    ["cola", "可樂", "🥤"],
    ["bubble tea", "珍珠奶茶", "🧋"],
    ["water", "水", "💧"],
    ["juice", "果汁", "🧃"],
    ["milk", "牛奶", "🥛"],
    ["coffee", "咖啡", "☕"],
    ["hot chocolate", "熱巧克力", "🍫"],
  ],
  "h4-l2": [
    ["doughnut", "甜甜圈", "🍩"],
    ["popcorn", "爆米花", "🍿"],
    ["pretzels", "蝴蝶餅", "🥨"],
    ["marshmallows", "棉花糖", "🍬"],
    ["chips", "洋芋片", "🥔"],
    ["cookie", "餅乾", "🍪"],
    ["ice cream", "冰淇淋", "🍦"],
    ["crackers", "蘇打餅乾", "🧇"],
  ],
  "h4-l3": [
    ["playground", "遊樂場", "🛝"],
    ["slide", "溜滑梯", "🛝"],
    ["swing", "鞦韆", "🌳"],
    ["seesaw", "蹺蹺板", "⚖️"],
    ["sandbox", "沙坑", "🏖️"],
    ["merry-go-round", "旋轉木馬", "🎠"],
    ["jump rope", "跳繩", "🪢"],
    ["run", "跑步", "🏃"],
    ["classroom", "教室", "🏫"],
    ["bedroom", "臥室", "🛏️"],
  ],
  "h4-l4": [
    ["basketball", "籃球", "🏀"],
    ["baseball", "棒球", "⚾"],
    ["tennis", "網球", "🎾"],
    ["badminton", "羽毛球", "🏸"],
    ["bowling", "保齡球", "🎳"],
    ["golf", "高爾夫球", "⛳"],
    ["soccer", "足球", "⚽"],
    ["ping-pong", "乒乓球", "🏓"],
    ["volleyball", "排球", "🏐"],
  ],
  "h4-review": [
    ["brother", "兄弟", "👦"],
    ["sister", "姊妹", "👧"],
    ["grandfather", "爺爺/外公", "👴"],
    ["friend", "朋友", "🧑‍🤝‍🧑"],
    ["three", "三", "3️⃣"],
    ["white", "白色", "⚪"],
    ["green", "綠色", "🟢"],
    ["cherry", "櫻桃", "🍒"],
    ["cheese", "起司", "🧀"],
    ["French fries", "薯條", "🍟"],
    ["drum", "鼓", "🥁"],
    ["trumpet", "小號", "🎺"],
    ["cream", "奶油", "🍦"],
    ["watch", "手錶", "⌚"],
  ],
};

const legacyCategoryMap = {
  "lesson-1": "h4-l1",
  "lesson-2": "h4-l2",
  "lesson-3": "h4-l3",
  "lesson-4": "h4-l4",
  "final-review": "h4-review",
};

function slugWord(word) {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const phonicsRules = [
  {
    id: "ch",
    label: "ch",
    sound: "/ch/",
    emoji: "ch",
    tip: "像 chair、cherry、cheese 的開頭聲。",
    test: (clean) => clean.includes("ch") && !clean.includes("sch"),
  },
  {
    id: "sh",
    label: "sh",
    sound: "/sh/",
    emoji: "sh",
    tip: "像 shoes、sheep、fish 的噓聲。",
    test: (clean) => clean.includes("sh"),
  },
  {
    id: "th",
    label: "th",
    sound: "/th/",
    emoji: "th",
    tip: "舌尖輕碰牙齒，像 three、mother、bath。",
    test: (clean) => clean.includes("th"),
  },
  {
    id: "sch",
    label: "sch",
    sound: "/sk/",
    emoji: "sk",
    tip: "school 裡的 sch 發 /sk/。",
    test: (clean) => clean.includes("sch"),
  },
  {
    id: "ck",
    label: "ck",
    sound: "/k/",
    emoji: "ck",
    tip: "兩個字母合起來發 /k/，像 black、kick、clock。",
    test: (clean) => clean.includes("ck"),
  },
  {
    id: "ng",
    label: "ng",
    sound: "/ng/",
    emoji: "ng",
    tip: "舌根往後，像 swing、living、bowling。",
    test: (clean) => clean.includes("ng"),
  },
  {
    id: "ee",
    label: "ee",
    sound: "long e",
    emoji: "ee",
    tip: "兩個 e 常發長母音 /ē/，像 green、three、knee。",
    test: (clean) => clean.includes("ee"),
  },
  {
    id: "ea",
    label: "ea",
    sound: "e sound",
    emoji: "ea",
    tip: "ea 可能發 /ē/ 或 /e/，像 teacher、breakfast。",
    test: (clean) => clean.includes("ea"),
  },
  {
    id: "ai",
    label: "ai",
    sound: "long a",
    emoji: "ai",
    tip: "ai 常發長母音 /ā/，像 chair、air。",
    test: (clean) => clean.includes("ai"),
  },
  {
    id: "ay",
    label: "ay",
    sound: "long a",
    emoji: "ay",
    tip: "ay 常在字尾或字中發 /ā/，像 playground。",
    test: (clean) => clean.includes("ay"),
  },
  {
    id: "oa",
    label: "oa",
    sound: "long o",
    emoji: "oa",
    tip: "oa 常發長母音 /ō/，像 toast。",
    test: (clean) => clean.includes("oa"),
  },
  {
    id: "ow",
    label: "ow",
    sound: "ow / long o",
    emoji: "ow",
    tip: "ow 有時發 /ow/，有時發 /ō/，像 window、yellow。",
    test: (clean) => clean.includes("ow"),
  },
  {
    id: "ou",
    label: "ou",
    sound: "/ou/",
    emoji: "ou",
    tip: "ou 常有張口滑音，像 mouth。",
    test: (clean) => clean.includes("ou"),
  },
  {
    id: "oo",
    label: "oo",
    sound: "oo sound",
    emoji: "oo",
    tip: "oo 有長短音，像 school、food、book、foot。",
    test: (clean) => clean.includes("oo"),
  },
  {
    id: "oi-oy",
    label: "oi / oy",
    sound: "/oi/",
    emoji: "oy",
    tip: "oi 和 oy 會發 /oi/，像 boy。",
    test: (clean) => clean.includes("oi") || clean.includes("oy"),
  },
  {
    id: "all",
    label: "all",
    sound: "/ol/",
    emoji: "all",
    tip: "all 常合在一起發一個音，像 basketball、baseball、volleyball。",
    test: (clean) => clean.includes("all"),
  },
  {
    id: "ar",
    label: "ar",
    sound: "r-controlled a",
    emoji: "ar",
    tip: "母音被 r 影響，像 marker、arm。",
    test: (clean) => clean.includes("ar"),
  },
  {
    id: "er",
    label: "er",
    sound: "r-controlled e",
    emoji: "er",
    tip: "er 常在字尾，像 teacher、father、mother。",
    test: (clean) => clean.includes("er"),
  },
  {
    id: "ir-ur",
    label: "ir / ur",
    sound: "r-controlled vowel",
    emoji: "ir",
    tip: "ir 和 ur 會被 r 影響，像 bird、purple、turn。",
    test: (clean) => clean.includes("ir") || clean.includes("ur"),
  },
  {
    id: "or",
    label: "or",
    sound: "r-controlled o",
    emoji: "or",
    tip: "or 常發 /or/，像 shorts、morning、orange。",
    test: (clean) => clean.includes("or"),
  },
  {
    id: "magic-e",
    label: "magic e",
    sound: "long vowel",
    emoji: "a_e",
    tip: "字尾 e 不發音，前面的母音變長，像 face、five、nine、home。",
    test: (_, tokens) => tokens.some((token) => /[aeiou][bcdfghjklmnpqrstvwxyz]e$/.test(token)),
  },
  {
    id: "soft-c",
    label: "soft c",
    sound: "/s/",
    emoji: "ce",
    tip: "c 遇到 e、i、y 常發 /s/，像 pencil、juice、face。",
    test: (clean) => /c[eiy]/.test(clean),
  },
  {
    id: "soft-g",
    label: "soft g",
    sound: "/j/",
    emoji: "ge",
    tip: "g 遇到 e、i、y 有時發 /j/，像 orange。",
    test: (clean) => /g[eiy]/.test(clean),
  },
  {
    id: "s-blend",
    label: "s-blend",
    sound: "sk / sl / st / sw",
    emoji: "sk",
    tip: "s 和另一個子音連在一起滑出來，像 skirt、slide、swing。",
    test: (clean) => /(sk|sl|st|sw|sm|sn|sp)/.test(clean),
  },
  {
    id: "l-blend",
    label: "l-blend",
    sound: "bl / cl / fl / pl",
    emoji: "cl",
    tip: "子音加 l 要連著發，像 classroom、playground、blue。",
    test: (clean) => /(bl|cl|fl|pl)/.test(clean),
  },
  {
    id: "r-blend",
    label: "r-blend",
    sound: "br / dr / fr / gr / tr",
    emoji: "tr",
    tip: "子音加 r 要連著發，像 brother、drink、green、trumpet。",
    test: (clean) => /(br|cr|dr|fr|gr|tr|pr)/.test(clean),
  },
  {
    id: "final-y",
    label: "final y",
    sound: "/ē/ or /ī/",
    emoji: "y",
    tip: "字尾 y 常像母音，像 family、cherry、body、baby。",
    test: (_, tokens) => tokens.some((token) => token.length > 2 && token.endsWith("y")),
  },
  {
    id: "le-ending",
    label: "-le",
    sound: "final le",
    emoji: "le",
    tip: "字尾 -le 常和前面的子音合成一拍，像 apple、purple。",
    test: (_, tokens) => tokens.some((token) => token.endsWith("le")),
  },
  {
    id: "igh-eigh",
    label: "igh / eigh",
    sound: "long i / long a",
    emoji: "igh",
    tip: "igh 常發長 i，eigh 常發長 a，像 eight。",
    test: (clean) => clean.includes("igh") || clean.includes("eigh"),
  },
];

function getPhonicsTokens(word) {
  return word.toLowerCase().split(/[^a-z]+/).filter(Boolean);
}

function findPhonicsRules(word) {
  const tokens = getPhonicsTokens(word);
  const clean = tokens.join("");
  return phonicsRules.filter((rule) => rule.test(clean, tokens));
}

const words = Object.entries(lessonWordData).flatMap(([category, entries]) => {
  const lesson = lessonPlan.find((item) => item.id === category);
  return entries.map(([word, zh, emoji]) => ({
    id: `${category}-${slugWord(word)}`,
    word,
    zh,
    emoji,
    category,
    level: lesson.unlockLevel,
    phonicsRuleIds: findPhonicsRules(word).map((rule) => rule.id),
  }));
});

const badges = [
  { score: 60, icon: "🏫", name: "H1 小學徒" },
  { score: 180, icon: "🖐️", name: "H2 身體高手" },
  { score: 360, icon: "🍓", name: "H3 餐桌達人" },
  { score: 600, icon: "🧋", name: "H4 單字勇者" },
  { score: 900, icon: "🏆", name: "期末複習冠軍" },
];

const buddies = [
  { level: 1, icon: "🐣", name: "Flufflet" },
  { level: 5, icon: "🌿", name: "Leafloo" },
  { level: 9, icon: "💎", name: "Gemkid" },
  { level: 13, icon: "⭐", name: "Cometot" },
  { level: 17, icon: "👑", name: "Word Champ" },
];

const storageKey = "wordBuddyQuestProgress";
const scoreText = document.querySelector("#scoreText");
const streakText = document.querySelector("#streakText");
const levelText = document.querySelector("#levelText");
const energyText = document.querySelector("#energyText");
const energyFill = document.querySelector("#energyFill");
const questionWord = document.querySelector("#questionWord");
const hintText = document.querySelector("#hintText");
const choiceGrid = document.querySelector("#choiceGrid");
const feedback = document.querySelector("#feedback");
const categorySelect = document.querySelector("#categorySelect");
const soundButton = document.querySelector("#soundButton");
const newRoundButton = document.querySelector("#newRoundButton");
const resetButton = document.querySelector("#resetButton");
const badgeRow = document.querySelector("#badgeRow");
const buddyRow = document.querySelector("#buddyRow");
const levelRoad = document.querySelector("#levelRoad");
const choiceTemplate = document.querySelector("#choiceTemplate");
const buddy = document.querySelector(".buddy");
const modeButtons = document.querySelectorAll("[data-mode]");
const spellingPanel = document.querySelector("#spellingPanel");
const spellClue = document.querySelector("#spellClue");
const spellInput = document.querySelector("#spellInput");
const spellSlots = document.querySelector("#spellSlots");
const letterBank = document.querySelector("#letterBank");
const clearSpellButton = document.querySelector("#clearSpellButton");
const backspaceButton = document.querySelector("#backspaceButton");
const checkSpellButton = document.querySelector("#checkSpellButton");

let state = {
  score: 0,
  streak: 0,
  level: 1,
  energy: 0,
  category: "all",
  practiceMode: "meaning",
  currentWordId: null,
  cursorByCategory: {},
  lastPlayedAt: null,
};

let currentWord = null;
let currentPhonicsRule = null;
let answered = false;
let selectedLetters = [];

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;

  try {
    state = { ...state, ...JSON.parse(saved) };
    normalizeState();
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  state.lastPlayedAt = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function normalizeState() {
  if (legacyCategoryMap[state.category]) {
    state.category = legacyCategoryMap[state.category];
  }

  state.score = Math.max(0, Number(state.score) || 0);
  state.streak = Math.max(0, Number(state.streak) || 0);
  state.level = Math.max(1, Number(state.level) || 1);
  state.energy = Math.min(99, Math.max(0, Number(state.energy) || 0));

  const lessonIds = lessonPlan.map((lesson) => lesson.id);
  const selectedLesson = lessonPlan.find((lesson) => lesson.id === state.category);
  if (
    state.category !== "all" &&
    (!lessonIds.includes(state.category) || state.level < selectedLesson.unlockLevel)
  ) {
    state.category = "all";
  }

  if (!["meaning", "spelling", "phonics"].includes(state.practiceMode)) {
    state.practiceMode = "meaning";
  }

  if (!state.cursorByCategory || typeof state.cursorByCategory !== "object") {
    state.cursorByCategory = {};
  }

  if (state.currentWordId && !words.some((item) => item.id === state.currentWordId)) {
    state.currentWordId = null;
  }
}

function getUnlockedWords() {
  return words.filter((item) => item.level <= state.level);
}

function getWordPool() {
  const unlockedWords = getUnlockedWords();
  if (state.practiceMode === "phonics") {
    const phonicsWords = unlockedWords.filter((item) => item.phonicsRuleIds.length);
    if (state.category === "all") return phonicsWords.length ? phonicsWords : unlockedWords;

    const selectedPhonicsWords = phonicsWords.filter((item) => item.category === state.category);
    if (selectedPhonicsWords.length) return selectedPhonicsWords;
  }

  if (state.category === "all") return unlockedWords;

  const selectedWords = unlockedWords.filter((item) => item.category === state.category);
  return selectedWords.length ? selectedWords : unlockedWords;
}

function getProgressKey() {
  return state.category === "all" ? `all-level-${state.level}` : state.category;
}

function getWordFromProgress() {
  const pool = getWordPool();
  if (!pool.length) return null;

  const resumed = pool.find((item) => item.id === state.currentWordId);
  if (resumed) return resumed;

  const key = getProgressKey();
  const cursor = Number(state.cursorByCategory[key]) || 0;
  const nextWord = pool[cursor % pool.length];
  state.currentWordId = nextWord.id;
  saveState();
  return nextWord;
}

function advanceProgress() {
  const pool = getWordPool();
  if (!currentWord || !pool.length) return;

  const key = getProgressKey();
  const currentIndex = pool.findIndex((item) => item.id === currentWord.id);
  const nextIndex = currentIndex >= 0 ? currentIndex + 1 : (Number(state.cursorByCategory[key]) || 0) + 1;
  state.cursorByCategory[key] = nextIndex % pool.length;
  state.currentWordId = null;
}

function normalizeSpelling(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "");
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function createChoices(answer) {
  const seen = new Set([answer.id, answer.zh]);
  const distractors = [];

  shuffle(getUnlockedWords()).forEach((item) => {
    if (distractors.length >= 3) return;
    if (seen.has(item.id) || seen.has(item.zh)) return;
    seen.add(item.id);
    seen.add(item.zh);
    distractors.push(item);
  });

  return shuffle([answer, ...distractors]);
}

function getRuleById(ruleId) {
  return phonicsRules.find((rule) => rule.id === ruleId);
}

function getPrimaryPhonicsRule(word) {
  const ruleIds = word.phonicsRuleIds.length ? word.phonicsRuleIds : findPhonicsRules(word.word).map((rule) => rule.id);
  return getRuleById(ruleIds[0]);
}

function createPhonicsChoices(answerRule) {
  const distractors = shuffle(phonicsRules.filter((rule) => rule.id !== answerRule.id)).slice(0, 3);
  return shuffle([answerRule, ...distractors]);
}

function speakWord(word) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.78;
  utterance.pitch = 1.12;
  window.speechSynthesis.speak(utterance);
}

function renderCategoryOptions() {
  categorySelect.innerHTML = "";
  categorySelect.appendChild(new Option("全部已解鎖單字", "all"));

  lessonPlan.forEach((lesson) => {
    const option = new Option(`${lesson.icon} ${lesson.title}`, lesson.id);
    option.disabled = state.level < lesson.unlockLevel;
    categorySelect.appendChild(option);
  });

  normalizeState();
  categorySelect.value = state.category;
}

function renderModeButtons() {
  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === state.practiceMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderLevelRoad() {
  levelRoad.innerHTML = "";

  lessonPlan.forEach((lesson) => {
    const isUnlocked = state.level >= lesson.unlockLevel;
    const wordCount = words.filter((item) => item.category === lesson.id).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `level-card${isUnlocked ? " unlocked" : ""}${
      state.category === lesson.id ? " active" : ""
    }`;
    card.disabled = !isUnlocked;
    card.innerHTML = `
      <span class="level-icon">${isUnlocked ? lesson.icon : "🔒"}</span>
      <span>
        <strong>${lesson.title}</strong>
        <small>${lesson.subtitle}，共 ${wordCount} words</small>
      </span>
      <em>${isUnlocked ? "已解鎖" : `Lv.${lesson.unlockLevel}`}</em>
    `;
    card.addEventListener("click", () => {
      state.category = lesson.id;
      state.currentWordId = null;
      saveState();
      updateStats();
      startRound();
    });
    levelRoad.appendChild(card);
  });
}

function updateStats() {
  normalizeState();
  renderCategoryOptions();
  renderModeButtons();
  renderLevelRoad();

  scoreText.textContent = state.score;
  streakText.textContent = state.streak;
  levelText.textContent = state.level;
  energyText.textContent = `${state.energy} / 100`;
  energyFill.style.width = `${state.energy}%`;

  const unlocked = badges.filter((badge) => state.score >= badge.score).length;
  document.querySelector("#badgeCount").textContent = `${unlocked} / ${badges.length}`;
  badgeRow.innerHTML = "";

  badges.forEach((badge) => {
    const badgeNode = document.createElement("div");
    badgeNode.className = `badge${state.score >= badge.score ? " unlocked" : ""}`;
    badgeNode.textContent = state.score >= badge.score ? badge.icon : "🔒";
    badgeNode.title = state.score >= badge.score ? badge.name : `${badge.score} 集點解鎖`;
    badgeRow.appendChild(badgeNode);
  });

  const unlockedBuddies = buddies.filter((item) => state.level >= item.level).length;
  document.querySelector("#buddyCount").textContent = `${unlockedBuddies} / ${buddies.length}`;
  buddyRow.innerHTML = "";

  buddies.forEach((item) => {
    const node = document.createElement("div");
    node.className = `buddy-card${state.level >= item.level ? " unlocked" : ""}`;
    node.innerHTML = `
      <span>${state.level >= item.level ? item.icon : "🔒"}</span>
      <strong>${state.level >= item.level ? item.name : `Lv.${item.level}`}</strong>
    `;
    node.title = state.level >= item.level ? item.name : `等級 ${item.level} 解鎖`;
    buddyRow.appendChild(node);
  });
}

function renderMeaningRound() {
  questionWord.textContent = currentWord.word;
  hintText.textContent = "聽英文發音，選出正確的中文意思。";
  choiceGrid.hidden = false;
  spellingPanel.hidden = true;
  choiceGrid.innerHTML = "";

  createChoices(currentWord).forEach((choice) => {
    const node = choiceTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".choice-emoji").textContent = choice.emoji;
    node.querySelector(".choice-text").textContent = choice.zh;
    node.addEventListener("click", () => answerMeaningQuestion(choice, node));
    choiceGrid.appendChild(node);
  });

  setTimeout(() => speakWord(currentWord.word), 250);
}

function renderSpellingRound() {
  const target = normalizeSpelling(currentWord.word);
  selectedLetters = [];
  questionWord.textContent = `${currentWord.emoji} ${currentWord.zh}`;
  hintText.textContent = "看中文提示，把字母依序點出來，拼出英文單字。";
  feedback.textContent = "先聽一次發音，再從字母中拼出答案。";
  choiceGrid.hidden = true;
  spellingPanel.hidden = false;
  spellClue.textContent = `${currentWord.zh}，共 ${target.length} 個字母`;
  spellInput.value = "";
  spellSlots.innerHTML = "";
  letterBank.innerHTML = "";

  [...target].forEach(() => {
    const slot = document.createElement("span");
    slot.className = "spell-slot";
    spellSlots.appendChild(slot);
  });

  shuffle([...target]).forEach((letter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "letter-tile";
    button.textContent = letter;
    button.dataset.index = String(index);
    button.addEventListener("click", () => addLetter(button, letter));
    letterBank.appendChild(button);
  });

  setTimeout(() => speakWord(currentWord.word), 250);
}

function renderPhonicsRound() {
  currentPhonicsRule = getPrimaryPhonicsRule(currentWord);
  questionWord.textContent = currentWord.word;
  hintText.textContent = "聽單字，選出最明顯的自然發音組合。";
  feedback.textContent = "先看單字裡的字母組合，再聽一次發音。";
  choiceGrid.hidden = false;
  spellingPanel.hidden = true;
  choiceGrid.innerHTML = "";

  if (!currentPhonicsRule) {
    feedback.textContent = "這個單字沒有明顯的發音組合，請按下一題。";
    return;
  }

  createPhonicsChoices(currentPhonicsRule).forEach((rule) => {
    const node = choiceTemplate.content.firstElementChild.cloneNode(true);
    node.classList.add("phonics-card");
    node.dataset.ruleId = rule.id;
    node.querySelector(".choice-emoji").textContent = rule.emoji;
    node.querySelector(".choice-text").textContent = `${rule.label}：${rule.sound}`;
    node.addEventListener("click", () => answerPhonicsQuestion(rule, node));
    choiceGrid.appendChild(node);
  });

  setTimeout(() => speakWord(currentWord.word), 250);
}

function startRound() {
  answered = false;
  const hadSavedWord = Boolean(state.currentWordId);
  currentWord = getWordFromProgress();
  feedback.className = "feedback";
  feedback.textContent = hadSavedWord
    ? "已接續上次的單字進度，答對後會自動前進到下一題。"
    : "準備開始新的單字挑戰。";

  if (!currentWord) {
    feedback.textContent = "目前沒有可練習的單字。";
    return;
  }

  if (state.practiceMode === "phonics") {
    renderPhonicsRound();
  } else if (state.practiceMode === "spelling") {
    renderSpellingRound();
  } else {
    renderMeaningRound();
  }
}

function addLetter(button, letter) {
  if (answered) return;
  selectedLetters.push({ button, letter });
  button.disabled = true;
  button.classList.add("used");
  updateSpellingDisplay();
}

function updateSpellingDisplay() {
  const text = selectedLetters.map((item) => item.letter).join("");
  spellInput.value = text;

  [...spellSlots.children].forEach((slot, index) => {
    slot.textContent = text[index] ?? "";
    slot.classList.toggle("filled", Boolean(text[index]));
  });
}

function clearSpelling() {
  if (answered) return;
  selectedLetters.forEach(({ button }) => {
    button.disabled = false;
    button.classList.remove("used");
  });
  selectedLetters = [];
  updateSpellingDisplay();
}

function undoSpelling() {
  if (answered || selectedLetters.length === 0) return;
  const last = selectedLetters.pop();
  last.button.disabled = false;
  last.button.classList.remove("used");
  updateSpellingDisplay();
}

function rewardCorrectAnswer(baseEnergy) {
  const streakBonus = Math.min(state.streak * 2, 10);
  const earned = 10 + streakBonus;
  state.score += earned;
  state.streak += 1;
  state.energy += baseEnergy + streakBonus;

  while (state.energy >= 100) {
    state.energy -= 100;
    state.level += 1;
  }

  buddy.classList.remove("buddy-idle");
  buddy.classList.add("buddy-cheer");
  setTimeout(() => {
    buddy.classList.remove("buddy-cheer");
    buddy.classList.add("buddy-idle");
  }, 720);

  return earned;
}

function finishCurrentWord() {
  advanceProgress();
  saveState();
}

function answerMeaningQuestion(choice, selectedNode) {
  if (answered) return;
  answered = true;
  const isCorrect = choice.id === currentWord.id;

  [...choiceGrid.children].forEach((button) => {
    button.disabled = true;
    const text = button.querySelector(".choice-text").textContent;
    if (text === currentWord.zh) button.classList.add("correct");
  });

  if (isCorrect) {
    const earned = rewardCorrectAnswer(22);
    feedback.className = "feedback good";
    feedback.textContent = `答對了！${currentWord.word} 是「${currentWord.zh}」，集點 +${earned}。`;
    finishCurrentWord();
  } else {
    state.streak = 0;
    selectedNode.classList.add("wrong");
    feedback.className = "feedback try";
    feedback.textContent = `再試一次記憶：${currentWord.word} 是「${currentWord.zh}」。下一次開啟會繼續練這題。`;
    saveState();
  }

  updateStats();
}

function answerPhonicsQuestion(rule, selectedNode) {
  if (answered || !currentPhonicsRule) return;
  answered = true;
  const isCorrect = rule.id === currentPhonicsRule.id;

  [...choiceGrid.children].forEach((button) => {
    button.disabled = true;
    if (button.dataset.ruleId === currentPhonicsRule.id) button.classList.add("correct");
  });

  if (isCorrect) {
    const earned = rewardCorrectAnswer(26);
    feedback.className = "feedback good";
    feedback.textContent = `答對了！${currentWord.word} 裡有 ${currentPhonicsRule.label}，${currentPhonicsRule.tip} 集點 +${earned}。`;
    finishCurrentWord();
  } else {
    state.streak = 0;
    selectedNode.classList.add("wrong");
    feedback.className = "feedback try";
    feedback.textContent = `這題要注意 ${currentPhonicsRule.label}：${currentPhonicsRule.tip} 下次會繼續練這題。`;
    saveState();
  }

  updateStats();
}

function checkSpelling() {
  if (answered) return;
  const answer = normalizeSpelling(currentWord.word);
  const typed = spellInput.value.toLowerCase();

  if (typed === answer) {
    answered = true;
    const earned = rewardCorrectAnswer(28);
    feedback.className = "feedback good";
    feedback.textContent = `拼對了！「${currentWord.zh}」就是 ${currentWord.word}，集點 +${earned}。`;
    [...letterBank.children].forEach((button) => {
      button.disabled = true;
    });
    finishCurrentWord();
    updateStats();
    return;
  }

  state.streak = 0;
  feedback.className = "feedback try";
  feedback.textContent =
    typed.length < answer.length ? "還少幾個字母，再看提示拼一次。" : "字母順序還不對，按清除再試一次。";
  saveState();
  updateStats();
}

function resetProgress() {
  state.score = 0;
  state.streak = 0;
  state.level = 1;
  state.energy = 0;
  state.category = "all";
  state.practiceMode = "meaning";
  state.currentWordId = null;
  state.cursorByCategory = {};
  saveState();
  updateStats();
  startRound();
}

categorySelect.addEventListener("change", (event) => {
  state.category = event.target.value;
  state.currentWordId = null;
  saveState();
  updateStats();
  startRound();
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.practiceMode = button.dataset.mode;
    state.currentWordId = null;
    saveState();
    updateStats();
    startRound();
  });
});

soundButton.addEventListener("click", () => {
  if (currentWord) speakWord(currentWord.word);
});

newRoundButton.addEventListener("click", () => {
  if (!answered) advanceProgress();
  saveState();
  startRound();
});
resetButton.addEventListener("click", resetProgress);
clearSpellButton.addEventListener("click", clearSpelling);
backspaceButton.addEventListener("click", undoSpelling);
checkSpellButton.addEventListener("click", checkSpelling);

loadState();
updateStats();
startRound();
