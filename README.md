# WU Thasala — One Page Showcase

สรุปหน้าเว็บหนึ่งหน้าสำหรับโปรโมตแอป WU Thasala พร้อมลิงก์ดาวน์โหลด iOS และ Android สร้างด้วย Vite แบบ Vanilla (ไม่ใช้ Framework) จึงเบาและโหลดเร็ว

## โครงสร้างหน้า

- Hero พร้อมโลโก้ ปุ่มดาวน์โหลด และภาพตัวอย่างในกรอบมือถือ
- ฟีเจอร์เด่นแบบการ์ด
- หน้าจอแอป (Screenshots) 3 ภาพ
- Footer พร้อมลิงก์ดาวน์โหลด

## เริ่มต้นใช้งาน

ต้องมี Node.js เวอร์ชัน 18+ และ npm

ติดตั้งแพ็กเกจ:

```powershell
npm install
```

รันโหมดพัฒนา (จะเปิดเบราว์เซอร์อัตโนมัติ):

```powershell
npm run dev
```

สร้างไฟล์สำหรับโปรดักชัน:

```powershell
npm run build
```

พรีวิวไฟล์ build ที่ได้:

```powershell
npm run serve
```

## แก้ไขรูปและเนื้อหา

- โลโก้/ไอคอนแอป: `src/assets/app-icon.svg`
- ภาพหน้าจอแอป: `src/assets/screenshot1.svg`, `src/assets/screenshot2.svg`, `src/assets/screenshot3.svg`
  - เปลี่ยนเป็นไฟล์ `.png` หรือ `.jpg` ของจริงได้ แล้วอัปเดตพาธในไฟล์ `src/components/Screenshots.js`
- ข้อความส่วนต่าง ๆ แก้ได้ที่:
  - `src/components/Hero.js`
  - `src/components/Features.js`
  - `src/components/Screenshots.js`
  - `src/components/Footer.js`

ลิงก์ดาวน์โหลดสโตร์ถูกตั้งค่าไว้แล้ว:

- iOS: https://apps.apple.com/us/app/wu-thasala/id6747904778
- Android: https://play.google.com/store/apps/details?id=com.cdtwu.thasalaapp

## ใบอนุญาต

MIT
