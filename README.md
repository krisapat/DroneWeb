Drone API Server - Assignment #1
API Server สำหรับระบบจัดการ Drone Configuration และ Logging ที่สร้างด้วย Node.js และ Express.js

📋 Features
GET /configs/{droneId} - ดึงข้อมูล configuration ของ drone
GET /status/{droneId} - ดึงสถานะของ drone
GET /logs/{droneId} - ดึงรายการ log ของ drone (รองรับ pagination)
POST /logs - สร้าง log record ใหม่
🛠 Technology Stack
Node.js - Runtime environment
Express.js - Web framework
Axios - HTTP client สำหรับเรียก external APIs
dotenv - Environment variables management
📦 Installation
1. Clone the repository
bash
git clone <your-repository-url>
cd drone-api-server
2. Install dependencies
bash
npm install
3. Setup environment variables
สร้างไฟล์ .env และกำหนดค่าตัวแปรต่างๆ:

bash
cp .env.example .env
แก้ไขไฟล์ .env:

bash
PORT=3000
NODE_ENV=production
DRONE_CONFIG_URL=https://script.google.com/macros/s/AKfycbzwclqJRodyVjzYyY-NTQDb9cWG6Hoc5vGAABVtr5-jPA_ET_2IasrAJK4aeo5XoONiaA/exec
LOG_URL=https://app-tracking.pockethost.io/api/collections/drone_logs/records
LOG_API_TOKEN=20250901efx
🚀 Running the Application
Development Mode
bash
npm run dev
Production Mode
bash
npm start
Server จะรันที่ http://localhost:3000 (หรือ port ที่กำหนดใน environment variable)

📡 API Endpoints
1. GET /configs/{droneId}
ดึงข้อมูล configuration ของ drone

Request:

GET /configs/3001
Response:

json
{
  "drone_id": 3001,
  "drone_name": "Dot Dot",
  "light": "on",
  "country": "India",
  "weight": 21
}
2. GET /status/{droneId}
ดึงสถานะของ drone

Request:

GET /status/3001
Response:

json
{
  "condition": "good"
}
3. GET /logs/{droneId}
ดึงรายการ log ของ drone (เรียงตาม created date ล่าสุดก่อน, จำกัด 12 รายการ)

Request:

GET /logs/3001
With Pagination:

GET /logs/3001?page=1&limit=12
Response:

json
[
  {
    "drone_id": 3001,
    "drone_name": "Dot Dot",
    "created": "2024-09-22T07:37:57.411Z",
    "country": "India",
    "celsius": 46
  },
  {
    "drone_id": 3001,
    "drone_name": "Dot Dot",
    "created": "2024-09-22T07:37:32.111Z",
    "country": "India",
    "celsius": 45
  }
]
Response with Pagination Info:

json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 12,
    "totalItems": 25,
    "totalPages": 3,
    "hasNext": true,
    "hasPrev": false
  }
}
4. POST /logs
สร้าง log record ใหม่

Request:

json
POST /logs
Content-Type: application/json

{
  "drone_id": 3001,
  "drone_name": "Dot Dot",
  "country": "India",
  "celsius": 47.5
}
Response:

json
{
  "success": true,
  "message": "Log created successfully",
  "data": {
    "drone_id": 3001,
    "drone_name": "Dot Dot",
    "country": "India",
    "celsius": 47.5,
    "created": "2024-09-22T08:30:15.123Z"
  }
}
5. GET /health
Health check endpoint

Response:

json
{
  "status": "OK",
  "timestamp": "2024-09-22T08:30:15.123Z",
  "environment": "production"
}
🌐 Deployment
Heroku
สร้าง Heroku app
bash
heroku create your-app-name
กำหนด environment variables
bash
heroku config:set DRONE_CONFIG_URL="https://script.google.com/macros/s/AKfycbzwclqJRodyVjzYyY-NTQDb9cWG6Hoc5vGAABVtr5-jPA_ET_2IasrAJK4aeo5XoONiaA/exec"
heroku config:set LOG_URL="https://app-tracking.pockethost.io/api/collections/drone_logs/records"
heroku config:set LOG_API_TOKEN="20250901efx"
Deploy
bash
git push heroku main
Railway/Render/Vercel
เชื่อมต่อ GitHub repository
กำหนด environment variables ใน dashboard
Deploy จะทำงานอัตโนมัติ
🔒 Security Features
ใช้ environment variables เพื่อเก็บข้อมูลสำคัญ
ไม่แสดง API tokens ใน source code
CORS support สำหรับ cross-origin requests
Input validation และ error handling
🧪 Testing
ทดสอบ API endpoints ด้วย:

cURL
bash
# Get drone config
curl http://localhost:3000/configs/3001

# Get drone status
curl http://localhost:3000/status/3001

# Get drone logs
curl http://localhost:3000/logs/3001

# Create new log
curl -X POST http://localhost:3000/logs \
  -H "Content-Type: application/json" \
  -d '{"drone_id": 3001, "drone_name": "Dot Dot", "country": "India", "celsius": 47.5}'
Postman
Import collection หรือใช้ manual testing กับแต่ละ endpoint

📁 Project Structure
drone-api-server/
├── server.js          # Main application file
├── package.json       # Dependencies และ scripts
├── .env.example       # Environment variables template
├── .env              # Environment variables (ไม่ commit)
├── .gitignore        # Git ignore rules
└── README.md         # Documentation
⚠️ Important Notes
อย่าลืมสร้างไฟล์ .env และกำหนดค่า environment variables
API tokens จะต้องเก็บใน environment variables เท่านั้น
Server รองรับ pagination สำหรับ logs endpoint (bonus feature)
มี error handling และ input validation ครบถ้วน
