import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes/main";
import students from "./routes/student";
import books from "./routes/books";
import loans from "./routes/loans";
import cors from "cors";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({windowMs: 15 * 60 * 1000,max: 100});

const server = express();

server.use(helmet());
server.use(express.json());
server.use(limiter);
server.use(cors({origin: "http://localhost:5000"}));
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.use("/", router);
server.use("/", students);
server.use("/", books);
server.use("/", loans);

server.listen(5000, () => {
  console.log("Server 5000");
});
