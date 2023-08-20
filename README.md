### 安裝相關套件與 JSON-server

```
npm install
npm install -g json-server
```
---
### 如何運行該專案
**運行 json-server 並載入 mock 檔 (目前專案底下的 mock 檔取名為 order.json)**

```
json-server order.json --watch
```

**啟動專案**
```
npm run dev
```
---
### 關於該專案

+ 使用 Vue + Vite + TypeScript
+ Taliwind CSS + PrimeVue
+ 有 RWD
+ 套件使用
	+ zod：定義 form schema
	+ vee-validate：使用於 form 
   