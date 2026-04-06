import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes";
import foodsRouter from "./routes/food.routes";
import categoryRouter from "./routes/category.routes";
import orderRouter from "./routes/order.routes";
import loginRouter from "./routes/login.routes";

const app = express();
const port = 4000;

app.use(express.json());
app.use(
  cors({
    origin: "https://food-deliver-n8v4.vercel.app",
    credentials: true,
  }),
);

app.use("/users", userRouter);
app.use("/foods", foodsRouter);
app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);
app.use("/auth", loginRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
