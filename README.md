# DroneWeb — Frontend for Drone Data Recording & Tracking

โครงการนี้เป็นเว็บ frontend (Next.js) สำหรับระบบบันทึกและติดตามข้อมูลจากโดรน (ข้อมูลสถานะและอุณหภูมิ) โดยมีหน้าแสดงกราฟิก 3 มิติ, สตรีมบันทึกและหน้าบันทึกอุณหภูมิ

## ภาพรวม

- เทคโนโลยีหลัก: Next.js, React, Tailwind CSS, Framer Motion
- ฟีเจอร์เด่น: หน้าแสดง logs, การบันทึกอุณหภูมิ, ส่วนประกอบ UI ที่แยกเป็นโมดูล, 3D model (lazy-loaded), dark mode และ smooth scroll

## โครงสร้างสำคัญ

- `app/` — หน้าและ layout ของ Next.js
- `components/` — UI components, animations, 3D model และส่วนอื่นๆ
- `utils/` — ข้อมูลคงที่และ helper functions
- `public/` — รูปภาพและทรัพยากรสาธารณะ

## ข้อกำหนด (Prerequisites)

- Node.js 16 หรือใหม่กว่า (แนะนำ Node 18+)
- npm (มาพร้อม Node) หรือ pnpm/yarn ตามความชอบ

## วิธีใช้งาน (Local development)

เปิด terminal (cmd.exe) แล้วรันคำสั่งต่อไปนี้จากโฟลเดอร์โปรเจค (รากของ repository):

```cmd
npm install
npm run dev
```

หลังจาก `npm run dev` เว็บจะรันในโหมด development (โดยปกติที่ http://localhost:3000) — ตรวจสอบข้อความในเทอร์มินัลเพื่อยืนยันพอร์ต

## ตัวแปรแวดล้อม (Environment)

โปรเจค frontend นี้เรียกใช้ backend API ภายนอก — หากต้องตั้งค่า endpoint หรือ token ให้เพิ่มไฟล์ `.env.local` ในรูทของโปรเจคและกำหนดค่าที่จำเป็น เช่น:

```
# ตัวอย่าง: NEXT_PUBLIC_API_BASE=https://api.example.com และ NEXT_PUBLIC_DRONE_ID=XXXXXXXX
```

## การปรับแต่ง / พัฒนาเพิ่มเติม

- ส่วนประกอบ 3D และอนิเมชันถูกโหลดแบบ lazy เพื่อประสิทธิภาพ — ถ้าต้องการทดสอบโมดูล 3D ให้ดู `components/3dmodel/UseModel.tsx`
- สไตล์ใช้ Tailwind CSS และไฟล์ global อยู่ที่ `app/globals.css`
