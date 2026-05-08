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
  { id: "vocab-h1-01", unlockLevel: 18, title: "新版 H1-01", subtitle: "Vocabulary H1-01", icon: "📘" },
  { id: "vocab-h1-02", unlockLevel: 19, title: "新版 H1-02", subtitle: "Vocabulary H1-02", icon: "📘" },
  { id: "vocab-h2-01", unlockLevel: 20, title: "新版 H2-01", subtitle: "Vocabulary H2-01", icon: "📗" },
  { id: "vocab-h2-02", unlockLevel: 21, title: "新版 H2-02", subtitle: "Vocabulary H2-02", icon: "📗" },
  { id: "vocab-h3-01", unlockLevel: 22, title: "新版 H3-01", subtitle: "Vocabulary H3-01", icon: "📙" },
  { id: "vocab-h3-02", unlockLevel: 23, title: "新版 H3-02", subtitle: "Vocabulary H3-02", icon: "📙" },
  { id: "vocab-h4-01", unlockLevel: 24, title: "新版 H4-01", subtitle: "Vocabulary H4-01", icon: "📕" },
  { id: "vocab-h4-02", unlockLevel: 25, title: "新版 H4-02", subtitle: "Vocabulary H4-02", icon: "📕" },
  { id: "vocab-h5-01", unlockLevel: 26, title: "新版 H5-01", subtitle: "Vocabulary H5-01", icon: "📒" },
  { id: "vocab-h5-02", unlockLevel: 27, title: "新版 H5-02", subtitle: "Vocabulary H5-02", icon: "📒" },
  { id: "vocab-h6-01", unlockLevel: 28, title: "新版 H6-01", subtitle: "Vocabulary H6-01", icon: "📓" },
  { id: "vocab-h6-02", unlockLevel: 29, title: "新版 H6-02", subtitle: "Vocabulary H6-02", icon: "📓" },
];

lessonPlan.splice(
  0,
  lessonPlan.length,
  { id: "h1", unlockLevel: 1, title: "H1", subtitle: "H1 全部單字", icon: "📘" },
  { id: "h2", unlockLevel: 2, title: "H2", subtitle: "H2 全部單字", icon: "📗" },
  { id: "h3", unlockLevel: 3, title: "H3", subtitle: "H3 全部單字", icon: "📙" },
  { id: "h4", unlockLevel: 4, title: "H4", subtitle: "H4 全部單字", icon: "📕" },
  { id: "h5", unlockLevel: 5, title: "H5", subtitle: "H5 全部單字", icon: "📒" },
  { id: "h6", unlockLevel: 6, title: "H6", subtitle: "H6 全部單字", icon: "📓" },
);

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

Object.assign(lessonWordData, {
  "vocab-h1-01": [
    ["one", "一", "🔤"], ["two", "二", "🔤"], ["three", "三", "🔤"], ["four", "四", "🔤"], ["five", "五", "🔤"], ["six", "六", "🔤"], ["seven", "七", "🔤"], ["eight", "八", "🔤"], ["nine", "九", "🔤"], ["ten", "十", "🔤"], ["eleven", "十一", "🔤"], ["twelve", "十二", "🔤"], ["thirteen", "十三", "🔤"], ["fourteen", "十四", "🔤"], ["fifteen", "十五", "🔤"], ["sixteen", "十六", "🔤"], ["seventeen", "十七", "🔤"], ["eighteen", "十八", "🔤"], ["nineteen", "十九", "🔤"], ["apple", "蘋果", "🔤"], ["aunt", "阿姨/姑姑", "🔤"], ["bed", "床", "🔤"], ["brother", "兄弟", "🔤"], ["coat", "外套", "🔤"], ["dad", "爸爸", "🔤"], ["door", "門", "🔤"], ["friend", "朋友", "🔤"], ["goat", "山羊", "🔤"], ["grandma", "奶奶/外婆", "🔤"], ["guava", "芭樂", "🔤"], ["hen", "母雞", "🔤"], ["hippo", "河馬", "🔤"], ["house", "房子", "🔤"], ["jacket", "夾克", "🔤"], ["jam", "果醬", "🔤"], ["jeans", "牛仔褲", "🔤"], ["kiwi", "奇異果", "🔤"], ["lamb", "小羊", "🔤"], ["mango", "芒果", "🔤"], ["pants", "長褲", "🔤"], ["peanut", "花生", "🔤"], ["rabbit", "兔子", "🔤"], ["radio", "收音機", "🔤"], ["sister", "姊妹", "🔤"], ["sweater", "毛衣", "🔤"], ["toast", "吐司", "🔤"], ["shirt", "襯衫", "🔤"], ["uncle", "叔叔/舅舅", "🔤"], ["white", "白色", "🔤"], ["yam", "地瓜", "🔤"],
  ],
  "vocab-h1-02": [
    ["twenty", "二十", "🔤"], ["thirty", "三十", "🔤"], ["forty", "四十", "🔤"], ["fifty", "五十", "🔤"], ["sixty", "六十", "🔤"], ["banana", "香蕉", "🔤"], ["bat", "球棒/蝙蝠", "🔤"], ["black", "黑色", "🔤"], ["blue", "藍色", "🔤"], ["box", "盒子", "🔤"], ["brown", "棕色", "🔤"], ["cat", "貓", "🔤"], ["clock", "時鐘", "🔤"], ["cookie", "餅乾", "🔤"], ["cousin", "堂/表兄弟姊妹", "🔤"], ["desk", "書桌", "🔤"], ["dress", "洋裝", "🔤"], ["egg", "蛋", "🔤"], ["fan", "電扇", "🔤"], ["fish", "魚", "🔤"], ["frog", "青蛙", "🔤"], ["grandpa", "爺爺/外公", "🔤"], ["green", "綠色", "🔤"], ["hat", "帽子", "🔤"], ["hot dog", "熱狗", "🔤"], ["jug", "水壺", "🔤"], ["lemon", "檸檬", "🔤"], ["mom", "媽媽", "🔤"], ["monkey", "猴子", "🔤"], ["nut", "堅果", "🔤"], ["parrot", "鸚鵡", "🔤"], ["pig", "豬", "🔤"], ["pink", "粉紅色", "🔤"], ["purple", "紫色", "🔤"], ["quilt", "棉被", "🔤"], ["red", "紅色", "🔤"], ["roof", "屋頂", "🔤"], ["sack", "袋子", "🔤"], ["scarf", "圍巾", "🔤"], ["shoes", "鞋子", "🔤"], ["shorts", "短褲", "🔤"], ["skirt", "裙子", "🔤"], ["socks", "襪子", "🔤"], ["tea", "茶", "🔤"], ["wall", "牆", "🔤"], ["yard", "院子", "🔤"], ["yellow", "黃色", "🔤"], ["zebra", "斑馬", "🔤"], ["zoo", "動物園", "🔤"],
  ],
  "vocab-h2-01": [
    ["ant", "螞蟻", "🔤"], ["back", "背部", "🔤"], ["big", "大的", "🔤"], ["bird", "鳥", "🔤"], ["boy", "男孩", "🔤"], ["bus", "公車", "🔤"], ["car", "汽車", "🔤"], ["carrot", "胡蘿蔔", "🔤"], ["cave", "洞穴", "🔤"], ["cup", "杯子", "🔤"], ["day", "白天/一天", "🔤"], ["dig", "挖", "🔤"], ["doll", "娃娃", "🔤"], ["fast", "快的", "🔤"], ["fat", "胖的", "🔤"], ["fork", "叉子", "🔤"], ["fox", "狐狸", "🔤"], ["gas", "瓦斯/汽油", "🔤"], ["girl", "女孩", "🔤"], ["good", "好的", "🔤"], ["ham", "火腿", "🔤"], ["hand", "手", "🔤"], ["ill", "生病的", "🔤"], ["kid", "小孩", "🔤"], ["little", "小的", "🔤"], ["long", "長的", "🔤"], ["map", "地圖", "🔤"], ["May", "五月", "🔤"], ["mop", "拖把", "🔤"], ["name", "名字", "🔤"], ["ox", "公牛", "🔤"], ["pan", "平底鍋", "🔤"], ["pay", "付錢", "🔤"], ["queen", "皇后", "🔤"], ["quick", "快速的", "🔤"], ["rain", "雨", "🔤"], ["rug", "地毯", "🔤"], ["sink", "水槽", "🔤"], ["sun", "太陽", "🔤"], ["tool", "工具", "🔤"], ["van", "廂型車", "🔤"], ["vase", "花瓶", "🔤"], ["vest", "背心", "🔤"], ["walk", "走路", "🔤"], ["zero", "零", "🔤"],
  ],
  "vocab-h2-02": [
    ["ape", "猿", "🔤"], ["bag", "袋子", "🔤"], ["bay", "海灣", "🔤"], ["belt", "皮帶", "🔤"], ["cake", "蛋糕", "🔤"], ["cap", "鴨舌帽", "🔤"], ["cop", "警察", "🔤"], ["dot", "點", "🔤"], ["duck", "鴨子", "🔤"], ["fly", "飛/蒼蠅", "🔤"], ["food", "食物", "🔤"], ["game", "遊戲", "🔤"], ["gap", "缺口", "🔤"], ["gun", "槍", "🔤"], ["hair", "頭髮", "🔤"], ["hug", "擁抱", "🔤"], ["jet", "噴射機", "🔤"], ["jog", "慢跑", "🔤"], ["jump", "跳", "🔤"], ["key", "鑰匙", "🔤"], ["kick", "踢", "🔤"], ["king", "國王", "🔤"], ["kite", "風箏", "🔤"], ["lake", "湖", "🔤"], ["lamp", "檯燈", "🔤"], ["leaf", "葉子", "🔤"], ["lick", "舔", "🔤"], ["lie", "躺/說謊", "🔤"], ["love", "愛", "🔤"], ["mail", "信件", "🔤"], ["mat", "墊子", "🔤"], ["mug", "馬克杯", "🔤"], ["nail", "釘子/指甲", "🔤"], ["net", "網子", "🔤"], ["pen", "筆", "🔤"], ["pet", "寵物", "🔤"], ["rope", "繩子", "🔤"], ["sad", "難過的", "🔤"], ["say", "說", "🔤"], ["short", "短的", "🔤"], ["table", "桌子", "🔤"], ["taxi", "計程車", "🔤"], ["tent", "帳篷", "🔤"], ["top", "頂端", "🔤"], ["tub", "浴缸", "🔤"], ["wet", "濕的", "🔤"], ["worm", "蟲", "🔤"], ["yolk", "蛋黃", "🔤"],
  ],
  "vocab-h3-01": [
    ["bacon", "培根", "🔤"], ["bean", "豆子", "🔤"], ["beef", "牛肉", "🔤"], ["blow", "吹", "🔤"], ["boat", "船", "🔤"], ["bone", "骨頭", "🔤"], ["butter", "奶油", "🔤"], ["chew", "咀嚼", "🔤"], ["crow", "烏鴉", "🔤"], ["cry", "哭", "🔤"], ["cute", "可愛的", "🔤"], ["die", "死亡", "🔤"], ["elbow", "手肘", "🔤"], ["eve", "前夕", "🔤"], ["fight", "打架", "🔤"], ["fire", "火", "🔤"], ["flight", "飛行", "🔤"], ["fruit", "水果", "🔤"], ["funny", "有趣的", "🔤"], ["hike", "健行", "🔤"], ["hole", "洞", "🔤"], ["hose", "水管", "🔤"], ["huge", "巨大的", "🔤"], ["jeep", "吉普車", "🔤"], ["June", "六月", "🔤"], ["line", "線", "🔤"], ["loaf", "一條麵包", "🔤"], ["low", "低的", "🔤"], ["meat", "肉", "🔤"], ["noon", "中午", "🔤"], ["peach", "桃子", "🔤"], ["pine", "松樹", "🔤"], ["pool", "水池", "🔤"], ["pope", "教宗", "🔤"], ["rice", "米飯", "🔤"], ["right", "右邊/正確", "🔤"], ["room", "房間", "🔤"], ["rose", "玫瑰", "🔤"], ["soap", "肥皂", "🔤"], ["steak", "牛排", "🔤"], ["time", "時間", "🔤"], ["wife", "妻子", "🔤"],
  ],
  "vocab-h3-02": [
    ["beak", "鳥喙", "🔤"], ["bike", "腳踏車", "🔤"], ["boots", "靴子", "🔤"], ["bowl", "碗", "🔤"], ["bread", "麵包", "🔤"], ["candy", "糖果", "🔤"], ["chicken", "雞肉/雞", "🔤"], ["clue", "線索", "🔤"], ["deep", "深的", "🔤"], ["dive", "潛水", "🔤"], ["eel", "鰻魚", "🔤"], ["flute", "長笛", "🔤"], ["glue", "膠水", "🔤"], ["goose", "鵝", "🔤"], ["group", "群組", "🔤"], ["happy", "快樂的", "🔤"], ["heel", "腳跟", "🔤"], ["honey", "蜂蜜", "🔤"], ["light", "光/燈", "🔤"], ["money", "錢", "🔤"], ["new", "新的", "🔤"], ["noodles", "麵", "🔤"], ["nose", "鼻子", "🔤"], ["oak", "橡樹", "🔤"], ["pea", "豌豆", "🔤"], ["pineapple", "鳳梨", "🔤"], ["pipe", "管子", "🔤"], ["read", "閱讀", "🔤"], ["ride", "騎", "🔤"], ["road", "道路", "🔤"], ["snow", "雪", "🔤"], ["soul", "靈魂", "🔤"], ["spy", "間諜", "🔤"], ["stew", "燉菜", "🔤"], ["these", "這些", "🔤"], ["tie", "領帶", "🔤"], ["toe", "腳趾", "🔤"], ["tube", "管子", "🔤"], ["ugly", "醜的", "🔤"], ["weed", "雜草", "🔤"], ["wound", "傷口", "🔤"],
  ],
  "vocab-h4-01": [
    ["bath", "洗澡", "🔤"], ["bleed", "流血", "🔤"], ["brush", "刷子/刷", "🔤"], ["catch", "接住", "🔤"], ["chick", "小雞", "🔤"], ["church", "教堂", "🔤"], ["clap", "拍手", "🔤"], ["claw", "爪子", "🔤"], ["clean", "乾淨的/清潔", "🔤"], ["clown", "小丑", "🔤"], ["couch", "沙發", "🔤"], ["cow", "母牛", "🔤"], ["crawl", "爬行", "🔤"], ["drain", "排水管", "🔤"], ["faucet", "水龍頭", "🔤"], ["flame", "火焰", "🔤"], ["flask", "水瓶", "🔤"], ["football", "美式足球", "🔤"], ["Frisbee", "飛盤", "🔤"], ["front", "前面", "🔤"], ["glasses", "眼鏡", "🔤"], ["hawk", "老鷹", "🔤"], ["lawn", "草坪", "🔤"], ["match", "火柴/比賽", "🔤"], ["plane", "飛機", "🔤"], ["play", "玩", "🔤"], ["plum", "李子", "🔤"], ["prawn", "蝦子", "🔤"], ["pray", "祈禱", "🔤"], ["rock", "石頭", "🔤"], ["shape", "形狀", "🔤"], ["sheet", "床單", "🔤"], ["shell", "貝殼", "🔤"], ["ship", "船", "🔤"], ["shout", "大叫", "🔤"], ["sick", "生病的", "🔤"], ["slope", "斜坡", "🔤"], ["teeth", "牙齒", "🔤"], ["thick", "厚的", "🔤"], ["thigh", "大腿", "🔤"], ["train", "火車", "🔤"], ["trap", "陷阱", "🔤"], ["truck", "卡車", "🔤"], ["witch", "女巫", "🔤"], ["yawn", "打哈欠", "🔤"],
  ],
  "vocab-h4-02": [
    ["blind", "盲的/百葉窗", "🔤"], ["block", "積木/街區", "🔤"], ["brain", "腦", "🔤"], ["branch", "樹枝", "🔤"], ["brick", "磚塊", "🔤"], ["cheek", "臉頰", "🔤"], ["clam", "蛤蜊", "🔤"], ["close", "關上/近的", "🔤"], ["cloud", "雲", "🔤"], ["count", "數數", "🔤"], ["crab", "螃蟹", "🔤"], ["crayon", "蠟筆", "🔤"], ["dragon", "龍", "🔤"], ["draw", "畫", "🔤"], ["dream", "夢", "🔤"], ["drive", "開車", "🔤"], ["flag", "旗子", "🔤"], ["flea", "跳蚤", "🔤"], ["float", "漂浮", "🔤"], ["frost", "霜", "🔤"], ["glad", "高興的", "🔤"], ["glide", "滑行", "🔤"], ["grain", "穀物", "🔤"], ["grip", "握住", "🔤"], ["muffin", "馬芬", "🔤"], ["owl", "貓頭鷹", "🔤"], ["plant", "植物", "🔤"], ["plastic", "塑膠", "🔤"], ["plate", "盤子", "🔤"], ["pretty", "漂亮的", "🔤"], ["sauce", "醬汁", "🔤"], ["saw", "鋸子/看見", "🔤"], ["sleep", "睡覺", "🔤"], ["snacks", "點心", "🔤"], ["thin", "瘦的/薄的", "🔤"], ["tree", "樹", "🔤"], ["whale", "鯨魚", "🔤"], ["wheat", "小麥", "🔤"], ["wheel", "輪子", "🔤"], ["yogurt", "優格", "🔤"],
  ],
  "vocab-h5-01": [
    ["armchair", "扶手椅", "🔤"], ["beaver", "海狸", "🔤"], ["blanket", "毯子", "🔤"], ["boil", "煮沸", "🔤"], ["break", "打破/休息", "🔤"], ["burger", "漢堡", "🔤"], ["carpet", "地毯", "🔤"], ["closet", "衣櫥", "🔤"], ["corn", "玉米", "🔤"], ["cowboy", "牛仔", "🔤"], ["cupboard", "櫥櫃", "🔤"], ["dresser", "梳妝台", "🔤"], ["elephant", "大象", "🔤"], ["farm", "農場", "🔤"], ["feather", "羽毛", "🔤"], ["graph", "圖表", "🔤"], ["knife", "刀子", "🔤"], ["knight", "騎士", "🔤"], ["knob", "門把", "🔤"], ["knock", "敲", "🔤"], ["oyster", "牡蠣", "🔤"], ["phone", "電話", "🔤"], ["photo", "照片", "🔤"], ["pillow", "枕頭", "🔤"], ["purse", "錢包", "🔤"], ["river", "河流", "🔤"], ["skate", "溜冰", "🔤"], ["skin", "皮膚", "🔤"], ["smell", "聞/氣味", "🔤"], ["smile", "微笑", "🔤"], ["smoke", "煙", "🔤"], ["sneeze", "打噴嚏", "🔤"], ["snowy", "下雪的", "🔤"], ["sofa", "沙發", "🔤"], ["soil", "土壤", "🔤"], ["soymilk", "豆漿", "🔤"], ["speak", "說話", "🔤"], ["stamp", "郵票", "🔤"], ["stove", "爐子", "🔤"], ["surf", "衝浪", "🔤"], ["switch", "開關", "🔤"], ["towel", "毛巾", "🔤"], ["warm", "溫暖的", "🔤"], ["weak", "虛弱的", "🔤"], ["weather", "天氣", "🔤"], ["winter", "冬天", "🔤"], ["wrap", "包裹", "🔤"],
  ],
  "vocab-h5-02": [
    ["arch", "拱門", "🔤"], ["bathtub", "浴缸", "🔤"], ["cabinet", "櫃子", "🔤"], ["cloudy", "多雲的", "🔤"], ["coin", "硬幣", "🔤"], ["cold", "冷的", "🔤"], ["color", "顏色", "🔤"], ["cool", "涼的/酷的", "🔤"], ["deaf", "聾的", "🔤"], ["dinner", "晚餐", "🔤"], ["dirty", "髒的", "🔤"], ["doctor", "醫生", "🔤"], ["dolphin", "海豚", "🔤"], ["fall", "秋天/落下", "🔤"], ["first", "第一", "🔤"], ["foil", "鋁箔", "🔤"], ["great", "很棒的", "🔤"], ["heat", "熱", "🔤"], ["kettle", "水壺", "🔤"], ["know", "知道", "🔤"], ["mirror", "鏡子", "🔤"], ["moist", "潮濕的", "🔤"], ["oven", "烤箱", "🔤"], ["rainy", "下雨的", "🔤"], ["royal", "皇家的", "🔤"], ["school", "學校", "🔤"], ["scooter", "滑板車", "🔤"], ["seal", "海豹", "🔤"], ["shampoo", "洗髮精", "🔤"], ["sketch", "素描", "🔤"], ["smart", "聰明的", "🔤"], ["smash", "打碎", "🔤"], ["snail", "蝸牛", "🔤"], ["snowman", "雪人", "🔤"], ["sparrow", "麻雀", "🔤"], ["spoon", "湯匙", "🔤"], ["spring", "春天", "🔤"], ["stand", "站立", "🔤"], ["stick", "棍子", "🔤"], ["stir", "攪拌", "🔤"], ["summer", "夏天", "🔤"], ["sunny", "晴朗的", "🔤"], ["sweat", "汗水", "🔤"], ["sweep", "掃", "🔤"], ["toilet", "馬桶", "🔤"], ["windy", "有風的", "🔤"], ["wreath", "花圈", "🔤"], ["write", "寫", "🔤"], ["wrong", "錯的", "🔤"],
  ],
  "vocab-h6-01": [
    ["ace", "高手/A牌", "🔤"], ["angel", "天使", "🔤"], ["angle", "角度", "🔤"], ["bald", "禿頭的", "🔤"], ["bare", "裸露的", "🔤"], ["beard", "鬍子", "🔤"], ["beetle", "甲蟲", "🔤"], ["behind", "在後面", "🔤"], ["bubble", "泡泡", "🔤"], ["buckle", "扣環", "🔤"], ["call", "打電話/叫", "🔤"], ["choice", "選擇", "🔤"], ["core", "核心", "🔤"], ["eagle", "老鷹", "🔤"], ["earring", "耳環", "🔤"], ["earth", "地球/土地", "🔤"], ["fair", "公平的/市集", "🔤"], ["floor", "地板", "🔤"], ["fold", "摺", "🔤"], ["gate", "大門", "🔤"], ["ginger", "薑", "🔤"], ["grind", "磨碎", "🔤"], ["handle", "把手", "🔤"], ["jungle", "叢林", "🔤"], ["kind", "善良的/種類", "🔤"], ["mall", "購物中心", "🔤"], ["morning", "早晨", "🔤"], ["near", "附近", "🔤"], ["park", "公園", "🔤"], ["people", "人們", "🔤"], ["pimple", "青春痘", "🔤"], ["scratch", "抓/刮痕", "🔤"], ["scream", "尖叫", "🔤"], ["screen", "螢幕", "🔤"], ["shrink", "縮小", "🔤"], ["shrug", "聳肩", "🔤"], ["slice", "薄片", "🔤"], ["sprain", "扭傷", "🔤"], ["squat", "蹲", "🔤"], ["squeeze", "擠壓", "🔤"], ["stream", "小溪/串流", "🔤"], ["stretch", "伸展", "🔤"], ["twist", "扭轉", "🔤"], ["vet", "獸醫", "🔤"], ["wear", "穿戴", "🔤"], ["wood", "木頭", "🔤"], ["wool", "羊毛", "🔤"], ["writer", "作家", "🔤"], ["year", "年", "🔤"],
  ],
  "vocab-h6-02": [
    ["balloon", "氣球", "🔤"], ["bear", "熊", "🔤"], ["bell", "鈴鐺", "🔤"], ["bicycle", "腳踏車", "🔤"], ["bottle", "瓶子", "🔤"], ["cable", "電纜", "🔤"], ["cage", "籠子", "🔤"], ["candle", "蠟燭", "🔤"], ["chair", "椅子", "🔤"], ["chubby", "圓胖的", "🔤"], ["circle", "圓圈", "🔤"], ["circus", "馬戲團", "🔤"], ["cook", "烹調", "🔤"], ["cradle", "搖籃", "🔤"], ["dimple", "酒窩", "🔤"], ["dribble", "運球/滴下", "🔤"], ["find", "找到", "🔤"], ["freckle", "雀斑", "🔤"], ["gem", "寶石", "🔤"], ["gold", "金色/黃金", "🔤"], ["gym", "健身房", "🔤"], ["hare", "野兔", "🔤"], ["hear", "聽見", "🔤"], ["hook", "鉤子", "🔤"], ["idle", "閒置的", "🔤"], ["learn", "學習", "🔤"], ["maple", "楓樹", "🔤"], ["marble", "彈珠/大理石", "🔤"], ["pearl", "珍珠", "🔤"], ["rubber", "橡膠", "🔤"], ["salt", "鹽", "🔤"], ["scold", "責罵", "🔤"], ["shore", "岸邊", "🔤"], ["shrimp", "蝦子", "🔤"], ["sing", "唱歌", "🔤"], ["spray", "噴灑", "🔤"], ["sprout", "嫩芽", "🔤"], ["stair", "樓梯", "🔤"], ["staple", "釘書針", "🔤"], ["street", "街道", "🔤"], ["string", "線/繩", "🔤"], ["strong", "強壯的", "🔤"], ["tear", "眼淚/撕", "🔤"], ["tickle", "搔癢", "🔤"], ["turtle", "烏龜", "🔤"], ["twinkle", "閃爍", "🔤"], ["want", "想要", "🔤"], ["where", "哪裡", "🔤"], ["wrinkle", "皺紋", "🔤"],
  ],
});

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

function getGroupedCategory(category) {
  const vocabMatch = category.match(/^vocab-h([1-6])/);
  if (vocabMatch) return `h${vocabMatch[1]}`;

  const lessonMatch = category.match(/^h([1-6])/);
  if (lessonMatch) return `h${lessonMatch[1]}`;

  return category;
}

const phonicsRules = [
  {
    id: "ch",
    label: "ch / tch",
    sound: "/ch/",
    emoji: "tch",
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
    label: "sc / sch",
    sound: "/sg/",
    emoji: "sg",
    tip: "school 裡的 sch 發 /sk/。",
    tip: "sc or sch before a vowel sounds close to sg, like school, scold, scarf.",
    test: (_, tokens) => tokens.some((token) => /^(sch|sc[aou])/.test(token)),
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
    test: (_, tokens) => tokens.some((token) => token.includes("ea") && token !== "learn"),
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
    test: (_, tokens) => tokens.some((token) => token.includes("ou") && token !== "cousin"),
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
    test: (_, tokens) => tokens.some((token) => token.includes("ar") && !["carrot", "learn"].includes(token)),
  },
  {
    id: "er",
    label: "er",
    sound: "r-controlled e",
    emoji: "er",
    tip: "er 常在字尾，像 teacher、father、mother。",
    test: (_, tokens) => tokens.some((token) => token.includes("er") && token !== "strawberry"),
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
    id: "a-e",
    label: "a_e",
    sound: "long a",
    emoji: "a_e",
    tip: "a + consonant + e makes long a, like cake, face, game.",
    test: (_, tokens) => tokens.some((token) => /a[bcdfghjklmnpqrstvwxyz]e$/.test(token)),
  },
  {
    id: "e-e",
    label: "e_e",
    sound: "long e",
    emoji: "e_e",
    tip: "e + consonant + e makes long e, like Pete, these.",
    test: (_, tokens) => tokens.some((token) => /e[bcdfghjklmnpqrstvwxyz]e$/.test(token)),
  },
  {
    id: "i-e",
    label: "i_e",
    sound: "long i",
    emoji: "i_e",
    tip: "i + consonant + e makes long i, like bike, five, line.",
    test: (_, tokens) => tokens.some((token) => /i[bcdfghjklmnpqrstvwxyz]e$/.test(token)),
  },
  {
    id: "o-e",
    label: "o_e",
    sound: "long o",
    emoji: "o_e",
    tip: "o + consonant + e makes long o, like home, nose, rose.",
    test: (_, tokens) => tokens.some((token) => /o[bcdfghjklmnpqrstvwxyz]e$/.test(token)),
  },
  {
    id: "u-e",
    label: "u_e",
    sound: "long u",
    emoji: "u_e",
    tip: "u + consonant + e makes long u, like cute, cube, June.",
    test: (_, tokens) => tokens.some((token) => /u[bcdfghjklmnpqrstvwxyz]e$/.test(token)),
  },
  {
    id: "magic-e",
    label: "magic e",
    sound: "long vowel",
    emoji: "a_e",
    tip: "字尾 e 不發音，前面的母音變長，像 face、five、nine、home。",
    test: () => false,
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
    test: (_, tokens) => tokens.some((token) => /g[eiy]/.test(token) && !["get", "give", "girl"].includes(token)),
  },
  {
    id: "sk",
    label: "sk",
    sound: "/sg/",
    emoji: "sg",
    tip: "sk before a vowel sounds close to sg, like skate, ski, sky.",
    test: (_, tokens) => tokens.some((token) => /^sk[aeiou]/.test(token)),
  },
  {
    id: "sl",
    label: "sl",
    sound: "/sl/",
    emoji: "sl",
    tip: "s + l blends together, like slide, sleep, slow.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("sl")),
  },
  {
    id: "st",
    label: "st",
    sound: "/sd/",
    emoji: "sd",
    tip: "st before a vowel sounds close to sd, like star, stamp, stove.",
    test: (_, tokens) => tokens.some((token) => /^st[aeiou]/.test(token)),
  },
  {
    id: "sw",
    label: "sw",
    sound: "/sw/",
    emoji: "sw",
    tip: "s + w blends together, like swim, swing, switch.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("sw")),
  },
  {
    id: "sm",
    label: "sm",
    sound: "/sm/",
    emoji: "sm",
    tip: "s + m blends together, like smile, smell, smoke.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("sm")),
  },
  {
    id: "sn",
    label: "sn",
    sound: "/sn/",
    emoji: "sn",
    tip: "s + n blends together, like snow, sneeze, snack.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("sn")),
  },
  {
    id: "sp",
    label: "sp",
    sound: "/sb/",
    emoji: "sb",
    tip: "sp before a vowel sounds close to sb, like speak, spoon, sport.",
    test: (_, tokens) => tokens.some((token) => /^sp[aeiou]/.test(token)),
  },
  {
    id: "s-blend",
    label: "s-blend",
    sound: "sk / sl / st / sw",
    emoji: "sk",
    tip: "s 和另一個子音連在一起滑出來，像 skirt、slide、swing。",
    test: () => false,
  },
  {
    id: "l-blend",
    label: "l-blend",
    sound: "bl / cl / fl / pl",
    emoji: "cl",
    tip: "子音加 l 要連著發，像 classroom、playground、blue。",
    test: (_, tokens) => tokens.some((token) => /^(bl|cl|fl|pl)/.test(token)),
  },
  {
    id: "br",
    label: "br",
    sound: "/br/",
    emoji: "br",
    tip: "b + r blends together, like brother, brown, bread.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("br")),
  },
  {
    id: "cr",
    label: "cr",
    sound: "/cr/",
    emoji: "cr",
    tip: "c + r blends together, like cry, crab, crown.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("cr")),
  },
  {
    id: "dr",
    label: "dr",
    sound: "/dr/",
    emoji: "dr",
    tip: "d + r blends together, like drink, drum, dress.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("dr")),
  },
  {
    id: "fr",
    label: "fr",
    sound: "/fr/",
    emoji: "fr",
    tip: "f + r blends together, like frog, fruit, friend.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("fr")),
  },
  {
    id: "gr",
    label: "gr",
    sound: "/gr/",
    emoji: "gr",
    tip: "g + r blends together, like green, grape, graph.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("gr")),
  },
  {
    id: "pr",
    label: "pr",
    sound: "/pr/",
    emoji: "pr",
    tip: "p + r blends together, like prince, prize, proud.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("pr")),
  },
  {
    id: "tr",
    label: "tr",
    sound: "/tr/",
    emoji: "tr",
    tip: "t + r blends together, like tree, train, trumpet.",
    test: (_, tokens) => tokens.some((token) => token.startsWith("tr")),
  },
  {
    id: "r-blend",
    label: "r-blend",
    sound: "br / dr / fr / gr / tr",
    emoji: "tr",
    tip: "子音加 r 要連著發，像 brother、drink、green、trumpet。",
    test: () => false,
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

const phonicsSpeechCues = {
  ch: "ch or tch, chair, witch",
  sh: "sh, ship",
  th: "th, three",
  sch: "sc or sch says sg, school, scold",
  ck: "k, duck",
  ng: "ng, sing",
  ee: "ee, green",
  ea: "ea, teacher",
  ai: "ai, rain",
  ay: "ay, play",
  oa: "oa, boat",
  ow: "ow, snow",
  ou: "ou, mouth",
  oo: "oo, moon",
  "oi-oy": "oi, boy",
  all: "all, ball",
  ar: "ar, car",
  er: "er, teacher",
  "ir-ur": "ir, bird, ur, turn",
  or: "or, corn",
  "a-e": "a consonant e, long a, cake",
  "e-e": "e consonant e, long e, Pete",
  "i-e": "i consonant e, long i, bike",
  "o-e": "o consonant e, long o, home",
  "u-e": "u consonant e, long u, cute",
  "magic-e": "magic e, cake, bike",
  "soft-c": "soft c, city",
  "soft-g": "soft g, giant",
  sk: "sk says sg, skate",
  sl: "sl, slide",
  st: "st says sd, stamp",
  sw: "sw, swing",
  sm: "sm, smile",
  sn: "sn, snow",
  sp: "sp says sb, speak",
  "s-blend": "s blend, skate, slide, star",
  "l-blend": "l blend, black, clap, flag",
  br: "br, brother",
  cr: "cr, cry",
  dr: "dr, drink",
  fr: "fr, fruit",
  gr: "gr, green",
  pr: "pr, prince",
  tr: "tr, tree",
  "r-blend": "r blend, brown, drum, green",
  "final-y": "final y, baby, fly",
  "le-ending": "final le, apple",
  "igh-eigh": "igh, night, eigh, eight",
};

const magicERulePriority = ["a-e", "e-e", "i-e", "o-e", "u-e"];
const inactivePhonicsRuleIds = new Set(["magic-e", "s-blend", "r-blend"]);
const requiredPracticeModes = ["spelling", "phonics"];

function getPhonicsTokens(word) {
  return word.toLowerCase().split(/[^a-z]+/).filter(Boolean);
}

function findPhonicsRules(word) {
  const tokens = getPhonicsTokens(word);
  const clean = tokens.join("");
  return phonicsRules.filter((rule) => rule.test(clean, tokens));
}

const words = [];
const seenWordKeys = new Set();

Object.entries(lessonWordData).forEach(([category, entries]) => {
  const groupedCategory = getGroupedCategory(category);
  const lesson = lessonPlan.find((item) => item.id === groupedCategory);
  if (!lesson) return;

  entries.forEach(([word, zh, emoji]) => {
    const wordKey = normalizeSpelling(word);
    if (seenWordKeys.has(wordKey)) return;
    seenWordKeys.add(wordKey);
    words.push({
      id: `${groupedCategory}-${slugWord(word)}`,
      word,
      zh,
      emoji,
      category: groupedCategory,
      level: lesson.unlockLevel,
      phonicsRuleIds: findPhonicsRules(word).map((rule) => rule.id),
    });
  });
});

const badges = [
  { score: 60, icon: "🏫", name: "H1 小學徒" },
  { score: 180, icon: "🖐️", name: "H2 身體高手" },
  { score: 360, icon: "🍓", name: "H3 餐桌達人" },
  { score: 600, icon: "🧋", name: "H4 單字勇者" },
  { score: 900, icon: "🏆", name: "期末複習冠軍" },
];

const petStages = [
  {
    level: 1,
    icon: "⚡",
    name: "Volt Rookie",
    colors: ["#202a4d", "#4b5bff", "#78eeff", "#1d7cff", "#ffd141"],
  },
  {
    level: 5,
    icon: "🔥",
    name: "Blaze Runner",
    colors: ["#31152d", "#ff4f7b", "#ffd141", "#ff7a1a", "#ffe66d"],
  },
  {
    level: 9,
    icon: "💠",
    name: "Aero Striker",
    colors: ["#081c30", "#00a8ff", "#78eeff", "#315cff", "#ffffff"],
  },
  {
    level: 13,
    icon: "☄️",
    name: "Nova Breaker",
    colors: ["#1f103d", "#7d35ff", "#ff477e", "#ffb000", "#ffd141"],
  },
  {
    level: 17,
    icon: "👑",
    name: "Legend Core",
    colors: ["#050816", "#121a34", "#ffd141", "#78eeff", "#ff477e"],
  },
];

badges.splice(
  0,
  badges.length,
  { level: 1, answers: 5, icon: "H1", name: "H1 入門徽章" },
  { answers: 10, icon: "10", name: "答對 10 題" },
  { level: 2, answers: 25, icon: "H2", name: "H2 進擊徽章" },
  { answers: 50, icon: "50", name: "答對 50 題" },
  { level: 3, answers: 75, icon: "H3", name: "H3 規則徽章" },
  { answers: 100, icon: "100", name: "答對 100 題" },
  { level: 4, answers: 150, icon: "H4", name: "H4 戰術徽章" },
  { answers: 200, icon: "200", name: "答對 200 題" },
  { level: 5, answers: 300, icon: "H5", name: "H5 菁英徽章" },
  { answers: 400, icon: "400", name: "答對 400 題" },
  { level: 6, answers: 500, icon: "H6", name: "H6 王者徽章" },
  { answers: 650, icon: "MAX", name: "答對 650 題" }
);

petStages.splice(
  0,
  petStages.length,
  { level: 1, answers: 0, icon: "V1", name: "Volt Rookie", colors: ["#202a4d", "#4b5bff", "#78eeff", "#1d7cff", "#ffd141"] },
  { level: 1, answers: 10, icon: "V2", name: "Volt Striker", colors: ["#07182d", "#245cff", "#78eeff", "#00c2ff", "#ffd141"] },
  { level: 2, answers: 25, icon: "B1", name: "Blaze Runner", colors: ["#31152d", "#ff4f7b", "#ffd141", "#ff7a1a", "#ffe66d"] },
  { level: 2, answers: 50, icon: "B2", name: "Blaze Raider", colors: ["#260b1f", "#ff315f", "#ffe66d", "#ff8c1a", "#ffffff"] },
  { level: 3, answers: 75, icon: "A1", name: "Aero Striker", colors: ["#081c30", "#00a8ff", "#78eeff", "#315cff", "#ffffff"] },
  { level: 3, answers: 100, icon: "A2", name: "Aero Vanguard", colors: ["#061421", "#19d3ff", "#9ff8ff", "#2d62ff", "#ffe66d"] },
  { level: 4, answers: 150, icon: "N1", name: "Nova Breaker", colors: ["#1f103d", "#7d35ff", "#ff477e", "#ffb000", "#ffd141"] },
  { level: 4, answers: 200, icon: "N2", name: "Nova Reaper", colors: ["#17082d", "#9a42ff", "#ff477e", "#ffcc33", "#ffffff"] },
  { level: 5, answers: 300, icon: "L1", name: "Legend Core", colors: ["#050816", "#121a34", "#ffd141", "#78eeff", "#ff477e"] },
  { level: 5, answers: 400, icon: "L2", name: "Legend Nova", colors: ["#030712", "#1b2550", "#ffe66d", "#78eeff", "#ff6b9a"] },
  { level: 6, answers: 500, icon: "X1", name: "Mythic Core", colors: ["#030712", "#0f172a", "#f8fafc", "#38bdf8", "#facc15"] },
  { level: 6, answers: 650, icon: "X2", name: "Mythic Titan", colors: ["#020617", "#1e1b4b", "#facc15", "#67e8f9", "#fb7185"] }
);

const storageKey = "wordBuddyQuestProgress";
const profileStorageKey = "wordBuddyQuestPlayers";
const lastPlayerStorageKey = "wordBuddyQuestLastPlayer";
const appShell = document.querySelector("#appShell");
const loginPanel = document.querySelector("#loginPanel");
const playerNameInput = document.querySelector("#playerNameInput");
const playerSelect = document.querySelector("#playerSelect");
const startPlayerButton = document.querySelector("#startPlayerButton");
const switchPlayerButton = document.querySelector("#switchPlayerButton");
const loginMessage = document.querySelector("#loginMessage");
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
const activePetIcon = document.querySelector("#activePetIcon");
const activePetName = document.querySelector("#activePetName");
const playerText = document.querySelector("#playerText");
const bodyStopA = document.querySelector("#bodyStopA");
const bodyStopB = document.querySelector("#bodyStopB");
const wingStopA = document.querySelector("#wingStopA");
const wingStopB = document.querySelector("#wingStopB");
const crestA = document.querySelector("#crestA");
const crestB = document.querySelector("#crestB");
const modeButtons = document.querySelectorAll("[data-mode]");
const spellingPanel = document.querySelector("#spellingPanel");
const spellClue = document.querySelector("#spellClue");
const spellInput = document.querySelector("#spellInput");
const spellSlots = document.querySelector("#spellSlots");
const letterBank = document.querySelector("#letterBank");
const clearSpellButton = document.querySelector("#clearSpellButton");
const backspaceButton = document.querySelector("#backspaceButton");
const checkSpellButton = document.querySelector("#checkSpellButton");

function getDefaultState() {
  return {
    score: 0,
    correctAnswers: 0,
    streak: 0,
    level: 1,
    energy: 0,
    modeEnergy: {
      spelling: 0,
      phonics: 0,
    },
    category: "all",
    practiceMode: "spelling",
    currentWordId: null,
    currentWordSource: "main",
    cursorByCategory: {},
    wordOrderByKey: {},
    reviewQueueByKey: {},
    levelUpBlocked: false,
    lastPlayedAt: null,
  };
}

let currentPlayerName = "";
let state = getDefaultState();

let currentWord = null;
let currentPhonicsRule = null;
let answered = false;
let selectedLetters = [];

function normalizePlayerName(name) {
  return name.trim().replace(/\s+/g, " ").slice(0, 18);
}

function getProfiles() {
  try {
    return JSON.parse(localStorage.getItem(profileStorageKey)) || {};
  } catch {
    localStorage.removeItem(profileStorageKey);
    return {};
  }
}

function saveProfiles(profiles) {
  localStorage.setItem(profileStorageKey, JSON.stringify(profiles));
}

function getLegacyState() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function loadState(playerName) {
  const profiles = getProfiles();
  const savedProfile = profiles[playerName];
  const legacyState = Object.keys(profiles).length === 0 ? getLegacyState() : null;
  state = { ...getDefaultState(), ...(savedProfile || legacyState || {}) };
  normalizeState();
}

function saveState() {
  if (!currentPlayerName) return;
  const profiles = getProfiles();
  state.lastPlayedAt = new Date().toISOString();
  profiles[currentPlayerName] = state;
  saveProfiles(profiles);
  localStorage.setItem(lastPlayerStorageKey, currentPlayerName);
}

function renderPlayerOptions() {
  const profiles = getProfiles();
  const names = Object.keys(profiles).sort((a, b) => a.localeCompare(b, "zh-Hant"));
  const lastPlayer = localStorage.getItem(lastPlayerStorageKey) || "";
  playerSelect.innerHTML = "";

  if (!names.length) {
    playerSelect.appendChild(new Option("尚無玩家", ""));
    return;
  }

  playerSelect.appendChild(new Option("選擇玩家", ""));
  names.forEach((name) => {
    const profile = profiles[name];
    const level = Number(profile?.level) || 1;
    const option = new Option(`${name}，Lv.${level}`, name);
    playerSelect.appendChild(option);
  });

  if (names.includes(lastPlayer)) {
    playerSelect.value = lastPlayer;
    playerNameInput.value = lastPlayer;
  }
}

function showLogin(message = "") {
  appShell.hidden = true;
  loginPanel.hidden = false;
  loginMessage.textContent = message;
  renderPlayerOptions();
  playerNameInput.focus();
}

function enterPlayer() {
  const selectedName = playerSelect.value;
  const typedName = normalizePlayerName(playerNameInput.value);
  const playerName = typedName || selectedName;

  if (!playerName) {
    loginMessage.textContent = "請先輸入名字，或選擇一個已儲存的玩家。";
    return;
  }

  currentPlayerName = playerName;
  loadState(currentPlayerName);
  saveState();
  loginPanel.hidden = true;
  appShell.hidden = false;
  updateStats();
  startRound();
}

function clampProgress(value, max = 100) {
  return Math.min(max, Math.max(0, Number(value) || 0));
}

function normalizeModeEnergy() {
  const fallbackEnergy = clampProgress(state.energy);
  const savedModeEnergy = state.modeEnergy && typeof state.modeEnergy === "object" ? state.modeEnergy : {};
  state.modeEnergy = requiredPracticeModes.reduce((progress, mode) => {
    progress[mode] = clampProgress(savedModeEnergy[mode] ?? fallbackEnergy);
    return progress;
  }, {});
}

function getModeEnergy() {
  normalizeModeEnergy();
  return state.modeEnergy;
}

function syncCombinedEnergy() {
  const modeEnergy = getModeEnergy();
  state.energy = Math.min(...requiredPracticeModes.map((mode) => modeEnergy[mode]));
}

function normalizeState() {
  if (legacyCategoryMap[state.category]) {
    state.category = legacyCategoryMap[state.category];
  }

  state.category = getGroupedCategory(state.category);

  state.score = Math.max(0, Number(state.score) || 0);
  state.correctAnswers = Math.max(0, Number(state.correctAnswers) || 0);
  state.streak = Math.max(0, Number(state.streak) || 0);
  state.level = Math.max(1, Number(state.level) || 1);
  state.energy = clampProgress(state.energy);
  normalizeModeEnergy();
  syncCombinedEnergy();

  const lessonIds = lessonPlan.map((lesson) => lesson.id);
  const selectedLesson = lessonPlan.find((lesson) => lesson.id === state.category);
  if (
    state.category !== "all" &&
    (!lessonIds.includes(state.category) || state.level < selectedLesson.unlockLevel)
  ) {
    state.category = "all";
  }

  if (!["spelling", "phonics"].includes(state.practiceMode)) {
    state.practiceMode = "spelling";
  }

  if (!state.cursorByCategory || typeof state.cursorByCategory !== "object") {
    state.cursorByCategory = {};
  }

  if (!state.wordOrderByKey || typeof state.wordOrderByKey !== "object") {
    state.wordOrderByKey = {};
  }

  if (!state.reviewQueueByKey || typeof state.reviewQueueByKey !== "object") {
    state.reviewQueueByKey = {};
  }

  if (!["main", "review"].includes(state.currentWordSource)) {
    state.currentWordSource = "main";
  }

  if (state.currentWordId && !words.some((item) => item.id === state.currentWordId)) {
    state.currentWordId = null;
    state.currentWordSource = "main";
  }
}

function getUnlockedWords() {
  return words.filter((item) => item.level <= state.level);
}

function getWordPool(mode = state.practiceMode) {
  const unlockedWords = getUnlockedWords();
  if (mode === "phonics") {
    const phonicsWords = unlockedWords.filter((item) => item.phonicsRuleIds.length);
    if (state.category === "all") return phonicsWords.length ? phonicsWords : unlockedWords;

    const selectedPhonicsWords = phonicsWords.filter((item) => item.category === state.category);
    if (selectedPhonicsWords.length) return selectedPhonicsWords;
  }

  if (state.category === "all") return unlockedWords;

  const selectedWords = unlockedWords.filter((item) => item.category === state.category);
  return selectedWords.length ? selectedWords : unlockedWords;
}

function getProgressKey(mode = state.practiceMode) {
  const baseKey = state.category === "all" ? `all-level-${state.level}` : state.category;
  return `${mode}-${baseKey}`;
}

function getPoolById(pool) {
  return new Map(pool.map((item) => [item.id, item]));
}

function getOrderedPool(pool = getWordPool()) {
  const key = getProgressKey();
  const poolById = getPoolById(pool);
  const existingOrder = Array.isArray(state.wordOrderByKey[key]) ? state.wordOrderByKey[key] : [];
  const cleanOrder = existingOrder.filter((id) => poolById.has(id));
  const orderedIds = new Set(cleanOrder);
  const newIds = pool.filter((item) => !orderedIds.has(item.id)).map((item) => item.id);
  const fullOrder = [...cleanOrder, ...shuffle(newIds)];
  state.wordOrderByKey[key] = fullOrder;
  return fullOrder.map((id) => poolById.get(id)).filter(Boolean);
}

function getReviewQueue(key = getProgressKey()) {
  if (!Array.isArray(state.reviewQueueByKey[key])) {
    state.reviewQueueByKey[key] = [];
  }
  return state.reviewQueueByKey[key];
}

function getPendingReviewWord(pool = getWordPool()) {
  const poolById = getPoolById(pool);
  const queue = getReviewQueue();
  const cleanQueue = queue.filter((id) => poolById.has(id));
  state.reviewQueueByKey[getProgressKey()] = cleanQueue;
  return cleanQueue.length ? poolById.get(cleanQueue[0]) : null;
}

function hasPendingReview(pool = getWordPool()) {
  return Boolean(getPendingReviewWord(pool));
}

function hasPendingReviewForMode(mode) {
  const key = getProgressKey(mode);
  const poolById = getPoolById(getWordPool(mode));
  const queue = Array.isArray(state.reviewQueueByKey[key]) ? state.reviewQueueByKey[key] : [];
  const cleanQueue = queue.filter((id) => poolById.has(id));
  state.reviewQueueByKey[key] = cleanQueue;
  return cleanQueue.length > 0;
}

function hasAnyPendingReviewForLevel() {
  return requiredPracticeModes.some((mode) => hasPendingReviewForMode(mode));
}

function getWordFromProgress() {
  const pool = getWordPool();
  if (!pool.length) return null;

  const resumed = pool.find((item) => item.id === state.currentWordId);
  if (resumed) return resumed;

  const reviewWord = state.levelUpBlocked ? getPendingReviewWord(pool) : null;
  if (reviewWord) {
    state.currentWordId = reviewWord.id;
    state.currentWordSource = "review";
    saveState();
    return reviewWord;
  }

  const key = getProgressKey();
  const orderedPool = getOrderedPool(pool);
  const cursor = Number(state.cursorByCategory[key]) || 0;
  const nextWord = orderedPool[cursor % orderedPool.length];
  state.currentWordId = nextWord.id;
  state.currentWordSource = "main";
  saveState();
  return nextWord;
}

function advanceProgress() {
  const pool = getOrderedPool();
  if (!currentWord || !pool.length) return;

  if (state.currentWordSource === "review") {
    const queue = getReviewQueue();
    const index = queue.indexOf(currentWord.id);
    if (index >= 0) {
      queue.splice(index, 1);
      queue.push(currentWord.id);
    }
    state.currentWordId = null;
    state.currentWordSource = "main";
    return;
  }

  const key = getProgressKey();
  const currentIndex = pool.findIndex((item) => item.id === currentWord.id);
  const nextIndex = currentIndex >= 0 ? currentIndex + 1 : (Number(state.cursorByCategory[key]) || 0) + 1;
  state.cursorByCategory[key] = nextIndex % pool.length;
  state.currentWordId = null;
  state.currentWordSource = "main";
}

function removeReviewWord(wordId) {
  const queue = getReviewQueue();
  state.reviewQueueByKey[getProgressKey()] = queue.filter((id) => id !== wordId);
}

function rememberWrongWord() {
  if (!currentWord) return;
  const queue = getReviewQueue();
  if (!queue.includes(currentWord.id)) {
    queue.push(currentWord.id);
  }
}

function moveIncorrectWordToReview() {
  rememberWrongWord();
  advanceProgress();
}

function normalizeSpelling(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "");
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function createSpellingLetters(target) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const answerLetters = [...target];
  const answerSet = new Set(answerLetters);
  const candidates = alphabet.filter((letter) => !answerSet.has(letter));
  const extraCount = Math.min(7, Math.max(3, Math.ceil(target.length * 0.45)));
  const extras = [];

  while (extras.length < extraCount) {
    extras.push(candidates[Math.floor(Math.random() * candidates.length)]);
  }

  return shuffle([...answerLetters, ...extras]);
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

function getPhonicsRulesForWord(word) {
  const ruleIds = word.phonicsRuleIds.length ? word.phonicsRuleIds : findPhonicsRules(word.word).map((rule) => rule.id);
  return ruleIds.map(getRuleById).filter(Boolean);
}

function getPrimaryPhonicsRule(word) {
  const rules = getPhonicsRulesForWord(word);
  const magicERule = magicERulePriority.map(getRuleById).find((rule) => rules.includes(rule));
  return magicERule || rules[0];
}

function getValidRuleIdsForWord(word, answerRule) {
  const validRuleIds = new Set(getPhonicsRulesForWord(word).map((rule) => rule.id));
  if (answerRule) validRuleIds.add(answerRule.id);
  return validRuleIds;
}

function createPhonicsChoices(answerRule, word) {
  const validRuleIds = getValidRuleIdsForWord(word, answerRule);
  const distractors = shuffle(phonicsRules.filter((rule) => !validRuleIds.has(rule.id) && !inactivePhonicsRuleIds.has(rule.id))).slice(0, 3);
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

function speakPhonicsRule(rule) {
  if (!rule || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const cue = phonicsSpeechCues[rule.id] || `${rule.label}, ${rule.sound}`;
  const utterance = new SpeechSynthesisUtterance(cue);
  utterance.lang = "en-US";
  utterance.rate = 0.68;
  utterance.pitch = 1.05;
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

function isBadgeUnlocked(badge) {
  const answerGoal = Number(badge.answers) || 0;
  const levelGoal = Number(badge.level) || 1;
  return state.correctAnswers >= answerGoal && state.level >= levelGoal;
}

function getBadgeRequirement(badge) {
  const parts = [];
  if (badge.level) parts.push(`Lv.${badge.level}`);
  if (badge.answers) parts.push(`答對 ${badge.answers} 題`);
  return parts.join(" · ");
}

function isPetUnlocked(item) {
  return state.level >= (Number(item.level) || 1) && state.correctAnswers >= (Number(item.answers) || 0);
}

function getPetRequirement(item) {
  const parts = [`Lv.${item.level}`];
  if (item.answers) parts.push(`答對 ${item.answers} 題`);
  return parts.join(" · ");
}

function getActivePet() {
  return [...petStages].reverse().find(isPetUnlocked) || petStages[0];
}

function renderActivePet() {
  const pet = getActivePet();
  const [bodyA, bodyB, wingA, wingB, crest] = pet.colors;
  activePetIcon.textContent = pet.icon;
  activePetName.textContent = pet.name;
  playerText.textContent = `玩家：${currentPlayerName || "--"}`;
  buddy.setAttribute("aria-label", `${pet.name}，等級 ${state.level} 小寵物`);
  bodyStopA.setAttribute("stop-color", bodyA);
  bodyStopB.setAttribute("stop-color", bodyB);
  wingStopA.setAttribute("stop-color", wingA);
  wingStopB.setAttribute("stop-color", wingB);
  crestA.setAttribute("fill", crest);
  crestB.setAttribute("fill", crest);
}

function updateStats() {
  normalizeState();
  renderCategoryOptions();
  renderModeButtons();
  renderLevelRoad();
  renderActivePet();

  scoreText.textContent = state.score;
  streakText.textContent = state.streak;
  levelText.textContent = state.level;
  const modeEnergy = getModeEnergy();
  const gateProgress = Math.min(modeEnergy.spelling, modeEnergy.phonics);
  energyText.textContent = `單字 ${modeEnergy.spelling} / 100 · 發音 ${modeEnergy.phonics} / 100`;
  energyFill.style.width = `${gateProgress}%`;

  const unlocked = badges.filter(isBadgeUnlocked).length;
  document.querySelector("#badgeCount").textContent = `${unlocked} / ${badges.length}`;
  badgeRow.innerHTML = "";

  badges.forEach((badge) => {
    const badgeUnlocked = isBadgeUnlocked(badge);
    const badgeNode = document.createElement("div");
    badgeNode.className = `badge${badgeUnlocked ? " unlocked" : ""}`;
    badgeNode.textContent = badgeUnlocked ? badge.icon : "LOCK";
    badgeNode.title = badgeUnlocked ? badge.name : getBadgeRequirement(badge);
    badgeRow.appendChild(badgeNode);
  });

  const unlockedBuddies = petStages.filter(isPetUnlocked).length;
  document.querySelector("#buddyCount").textContent = `${unlockedBuddies} / ${petStages.length}`;
  buddyRow.innerHTML = "";

  petStages.forEach((item) => {
    const petUnlocked = isPetUnlocked(item);
    const node = document.createElement("div");
    node.className = `buddy-card${petUnlocked ? " unlocked" : ""}`;
    node.innerHTML = `
      <span>${petUnlocked ? item.icon : "LOCK"}</span>
      <strong>${petUnlocked ? item.name : getPetRequirement(item)}</strong>
    `;
    node.title = petUnlocked ? item.name : getPetRequirement(item);
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
  hintText.textContent = "看中文提示，從混合字母中挑出正確字母，拼出英文單字。";
  feedback.textContent =
    state.currentWordSource === "review"
      ? "升等前複習題：這個單字之前答錯過，再拼對一次就能繼續升等。"
      : "裡面有多餘字母，先聽發音，再拼出真正的答案。";
  choiceGrid.hidden = true;
  spellingPanel.hidden = false;
  spellClue.textContent = `${currentWord.zh}，答案共 ${target.length} 個字母`;
  spellInput.value = "";
  spellSlots.innerHTML = "";
  letterBank.innerHTML = "";

  [...target].forEach(() => {
    const slot = document.createElement("span");
    slot.className = "spell-slot";
    spellSlots.appendChild(slot);
  });

  createSpellingLetters(target).forEach((letter, index) => {
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
  const wordLabel = document.createElement("span");
  wordLabel.className = "question-word-en";
  wordLabel.textContent = currentWord.word;
  const meaningLabel = document.createElement("span");
  meaningLabel.className = "question-word-zh";
  meaningLabel.textContent = currentWord.zh;
  questionWord.replaceChildren(wordLabel, meaningLabel);
  hintText.textContent = "聽單字，選出最明顯的自然發音組合。";
  feedback.textContent =
    state.currentWordSource === "review"
      ? "升等前複習題：這個自然發音規則之前答錯過，再答對一次。"
      : "先看單字裡的字母組合，再聽一次發音。";
  choiceGrid.hidden = false;
  spellingPanel.hidden = true;
  choiceGrid.innerHTML = "";

  if (!currentPhonicsRule) {
    feedback.textContent = "這個單字沒有明顯的發音組合，請按下一題。";
    return;
  }

  const otherValidRules = getPhonicsRulesForWord(currentWord).filter((rule) => rule.id !== currentPhonicsRule.id);
  hintText.textContent = otherValidRules.length
    ? `單選題：這題主考 ${currentPhonicsRule.label}；${otherValidRules
        .map((rule) => rule.label)
        .join(" / ")} 也是這個單字的規則，所以不會放進選項。`
    : `單選題：選出 ${currentWord.word} 最明顯的自然發音組合。`;

  createPhonicsChoices(currentPhonicsRule, currentWord).forEach((rule) => {
    const node = choiceTemplate.content.firstElementChild.cloneNode(true);
    node.classList.add("phonics-card");
    node.dataset.ruleId = rule.id;
    node.querySelector(".choice-emoji").textContent = rule.emoji;
    node.querySelector(".choice-text").textContent = `${rule.label}：${rule.sound}`;
    node.addEventListener("click", () => {
      speakPhonicsRule(rule);
      answerPhonicsQuestion(rule, node);
    });
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
  } else {
    renderSpellingRound();
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

function getSpellingScorePoints(word) {
  const length = normalizeSpelling(word).length;
  if (length <= 5) return 1;
  if (length <= 7) return 2;
  if (length <= 10) return 3;
  return 4;
}

function rewardCorrectAnswer(baseEnergy, scorePoints = 1) {
  const streakBonus = Math.min(state.streak * 2, 10);
  const earned = Math.max(1, Number(scorePoints) || 1);
  const modeEnergy = getModeEnergy();
  const activeMode = requiredPracticeModes.includes(state.practiceMode) ? state.practiceMode : "spelling";
  state.score += earned;
  state.correctAnswers += 1;
  state.streak += 1;
  modeEnergy[activeMode] = Math.min(100, modeEnergy[activeMode] + baseEnergy + streakBonus);

  while (requiredPracticeModes.every((mode) => modeEnergy[mode] >= 100)) {
    if (hasAnyPendingReviewForLevel()) {
      state.levelUpBlocked = true;
      break;
    }

    requiredPracticeModes.forEach((mode) => {
      modeEnergy[mode] = 0;
    });
    state.level += 1;
    state.levelUpBlocked = false;
    state.currentWordId = null;
    state.currentWordSource = "main";
  }

  syncCombinedEnergy();

  buddy.classList.remove("buddy-idle");
  buddy.classList.add("buddy-cheer");
  setTimeout(() => {
    buddy.classList.remove("buddy-cheer");
    buddy.classList.add("buddy-idle");
  }, 720);

  saveState();
  return earned;
}

function finishCurrentWord() {
  if (state.currentWordSource === "review" && currentWord) {
    removeReviewWord(currentWord.id);
    state.currentWordId = null;
    state.currentWordSource = "main";
  } else {
    advanceProgress();
  }

  if (!hasAnyPendingReviewForLevel()) {
    state.levelUpBlocked = false;
  }

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
    const earned = rewardCorrectAnswer(22, 1);
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
    finishCurrentWord();
    const earned = rewardCorrectAnswer(26, 1);
    feedback.className = "feedback good";
    feedback.textContent = `答對了！${currentWord.word} 裡有 ${currentPhonicsRule.label}，${currentPhonicsRule.tip} 集點 +${earned}。`;
  } else {
    state.streak = 0;
    selectedNode.classList.add("wrong");
    feedback.className = "feedback try";
    feedback.textContent = `這題要注意 ${currentPhonicsRule.label}：${currentPhonicsRule.tip} 這個單字會在升等前再出現。`;
    moveIncorrectWordToReview();
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
    finishCurrentWord();
    const earned = rewardCorrectAnswer(28, getSpellingScorePoints(currentWord.word));
    feedback.className = "feedback good";
    feedback.textContent = `拼對了！「${currentWord.zh}」就是 ${currentWord.word}，集點 +${earned}。`;
    [...letterBank.children].forEach((button) => {
      button.disabled = true;
    });
    updateStats();
    return;
  }

  state.streak = 0;
  feedback.className = "feedback try";
  feedback.textContent =
    typed.length < answer.length
      ? "還少幾個字母，這個單字會在升等前再出現。"
      : "字母順序還不對，這個單字會在升等前再出現。";
  moveIncorrectWordToReview();
  saveState();
  updateStats();
}

function resetProgress() {
  state.score = 0;
  state.correctAnswers = 0;
  state.streak = 0;
  state.level = 1;
  state.energy = 0;
  state.modeEnergy = {
    spelling: 0,
    phonics: 0,
  };
  state.category = "all";
  state.practiceMode = "spelling";
  state.currentWordId = null;
  state.currentWordSource = "main";
  state.cursorByCategory = {};
  state.wordOrderByKey = {};
  state.reviewQueueByKey = {};
  state.levelUpBlocked = false;
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

startPlayerButton.addEventListener("click", enterPlayer);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") enterPlayer();
});
playerSelect.addEventListener("change", () => {
  if (playerSelect.value) {
    playerNameInput.value = playerSelect.value;
  }
});
switchPlayerButton.addEventListener("click", () => {
  saveState();
  currentPlayerName = "";
  showLogin("請選擇要接續的玩家。");
});

showLogin();
