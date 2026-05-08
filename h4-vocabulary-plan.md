# H1-H6 Word Buddy Quest 單字級數進度

這份進度依照 H1 到 H6 考卷與新版單字表中可辨識的課別安排。遊戲會從 H1-L1 開始，答題集點升級後依序解鎖下一課；同一台裝置的瀏覽器會記住上次練到的單字，下次打開可以接續玩。

| 遊戲等級 | 考卷課別 | 主題 | 單字 |
| --- | --- | --- | --- |
| Lv.1 | H1-L1 | My Classroom 教室 | classroom, window, door, desk, chair, fan, air conditioner, board, teacher, boy, schoolbag, book, pencil, ruler, eraser, marker, sharpener |
| Lv.2 | H1-L2 | Family and Rooms 家人與房間 | father, mother, grandfather, grandmother, brother, sister, baby, family, living room, bedroom, bathroom, kitchen |
| Lv.3 | H1-L3 | Numbers and Age 數字與年齡 | one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, age, birthday, candle |
| Lv.4 | H1-L4 | Colors and Clothes 顏色與衣物 | red, blue, yellow, green, black, white, purple, orange, pink, socks, shoes, pants, shorts, skirt |
| Lv.5 | H2-L1 | Body Parts 1 五官 | eye, ear, mouth, nose, hair, head, face, neck, shoulder, tooth, lips |
| Lv.6 | H2-L2 | Body Parts 2 身體部位 | hand, arm, finger, leg, foot, toe, body, knee |
| Lv.7 | H2-L3 | Actions 動作 | run, walk, jump, kick, throw, stand, sit, eat, drink, swim, sleep, fly |
| Lv.8 | H2-L4 | Pets and Animals 寵物與動物 | mouse, cat, rabbit, sheep, fish, hamster, lizard, tiger, bee, snake, guinea pig, parrot, bird, butterfly, dog, monkey |
| Lv.9 | H3-L1 | Fruits 水果 | apple, banana, orange, watermelon, durian, papaya, coconut, kiwi, grapes, strawberry, pear, cherry, mango |
| Lv.10 | H3-L2 | Breakfast 早餐 | breakfast, bread, toast, sandwich, egg, bacon, ham, rice, milk, juice, cereal |
| Lv.11 | H3-L3 | Lunch and Dinner 午晚餐 | lunch, dinner, rice, noodles, soup, chicken, fish, beef, pork, vegetables, salad, dumplings |
| Lv.12 | H3-L4 | Daily Routine 日常作息 | daily routine, get up, go to school, go home, do homework, take a shower, take a bath, eat lunch, eat dinner, go to bed, clock, time |
| Lv.13 | H4-L1 | Drinks 飲料 | tea, cola, bubble tea, water, juice, milk, coffee, hot chocolate |
| Lv.14 | H4-L2 | Snacks 點心 | doughnut, popcorn, pretzels, marshmallows, chips, cookie, ice cream, crackers |
| Lv.15 | H4-L3 | Playground 遊樂場 | playground, slide, swing, seesaw, sandbox, merry-go-round, jump rope, run, classroom, bedroom |
| Lv.16 | H4-L4 | Sports 運動 | basketball, baseball, tennis, badminton, bowling, golf, soccer, ping-pong, volleyball |
| Lv.17 | H4 Final Review | 期末複習 | brother, sister, grandfather, friend, three, white, green, cherry, cheese, French fries, drum, trumpet, cream, watch |
| Lv.18-29 | 新版 H1-01 到 H6-02 | 新版單字表補充 | 已排除既有題庫中重複出現的英文單字後加入遊戲 |

## 遊戲模式

- 拼字模式：看中文提示，從答案字母加上額外干擾字母的字母池中拼出英文單字。
- 自然發音模式：看/聽單字，選出它包含的字母組合規則。
- 已移除英文對中文選擇題，讓練習重心放在真正會拼、會看發音規則。

## 記憶進度

- `localStorage` 會依照玩家名字儲存分數、連續答對、等級、目前模式、選擇的課別、目前題目與每個課別的下一題位置。
- 同一台裝置可以建立多位玩家，下次打開後選自己的名字即可接續。
- 每位玩家在同一個模式與級數中會有自己的洗牌單字順序，不會每個人都看到一樣的題目順序。
- 答錯的單字會先放進該級數的複習隊列，等能量要升等時再出現；補答正確後才會真正升等。
- 答對後會把該課別的進度往下一個單字推進。
- 答錯或還沒答完就關掉網頁，下次會回到同一題繼續練。
- 這份紀錄存在使用中的瀏覽器與裝置上；清除網站資料或換裝置會重新開始。

## 小寵物等級

| 解鎖等級 | 小寵物 |
| --- | --- |
| Lv.1 | Flufflet |
| Lv.5 | Leafloo |
| Lv.9 | Gemkid |
| Lv.13 | Cometot |
| Lv.17 | Word Champ |

## 自然發音規則

自然發音模式會從 H1-H6 單字中挑出有明顯字母組合的字，讓孩子練習「看到組合就想到聲音」。

| 類型 | 規則例子 |
| --- | --- |
| 子音組合 | ch, sh, th, sch, ck, ng |
| 母音組合 | ee, ea, ai, ay, oa, ow, ou, oo, oi/oy |
| r-controlled vowels | ar, er, ir/ur, or |
| 長母音規則 | magic e, igh/eigh |
| 子音混合音 | s-blend, l-blend, r-blend |
| 其他常見規則 | soft c, soft g, final y, -le, all |
