# H1-H4 Word Buddy Quest

給國小二年級玩的英文單字練習遊戲。題庫依照 H1-H4 考卷課別安排，孩子可以用「選中文意思」或「拼出英文單字」兩種模式練習，答題後集點、升級、解鎖徽章和夥伴。

## 功能

- H1-L1 到 H4 期末複習，共 17 個級數進度。
- 認字模式：聽英文發音，選出正確中文意思。
- 拼字模式：看中文提示，點字母拼出英文單字。
- 自然發音模式：看/聽單字，選出它包含的字母組合規則，例如 ch、sh、ee、oo、magic e。
- 自動記憶上次玩到哪一題、目前等級、集點、練習模式和課別。
- 可直接用 GitHub Pages 發布，iPad Safari 開網址即可玩。

## 本機遊玩

直接用瀏覽器開啟 `index.html` 即可。

## 上傳到 GitHub Pages

1. 在 GitHub 建立一個新的 repository，例如 `word-buddy-quest`。
2. 把這個資料夾裡的檔案上傳到 repository 根目錄。
3. 到 repository 的 `Settings`。
4. 選 `Pages`。
5. `Build and deployment` 設定：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. 等 GitHub 產生網址。

發布後網址通常會像這樣：

```text
https://你的帳號.github.io/word-buddy-quest/
```

## 檔案說明

- `index.html`: 網頁結構
- `styles.css`: 畫面與互動樣式
- `app.js`: 題庫、拼字模式、集點升級與進度記憶
- `h4-vocabulary-plan.md`: H1-H4 單字級數規劃

## 進度紀錄

遊戲進度存在瀏覽器的 `localStorage`。同一台 iPad 或電腦、同一個瀏覽器再次打開會接續玩；如果清除 Safari 網站資料、換瀏覽器或換裝置，進度會重新開始。
