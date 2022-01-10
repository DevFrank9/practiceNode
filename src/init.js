import "regenerator-runtime";
import "dotenv/config";
/* db */
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";

// app이란 변수로 server.js 담기
import app from "./server";

// 포트번호 할당
const PORT = process.env.PORT || 4000;

// 포트 연결 성공시 log 띄우기
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
