/* dev tools */
import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";

/* routers */
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import apiRouter from "./routers/apiRouter";

/* middle ware */
import { embedder, localsMiddleware } from "./middlewares";

// 서버 구현 위한 express 프레임워크 불러오기
const app = express();
// 위의 구동 현황을 보여주기 위해 로거 사용
const logger = morgan("dev");

// 웹 뷰 렌더링 프레임워크로 pug사용한다고 선언
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express 로 구동되는 db등의 일회성 세션 정보 사용한다고 선언
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// root부터 각 1차적인 라우트들 알려주기
app.use(flash());
app.use(embedder);
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

export default app;
