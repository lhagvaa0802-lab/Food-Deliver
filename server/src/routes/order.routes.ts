import { Router } from "express";
import { createOrder } from "../controllers/order/create-order";
import { getOrders } from "../controllers/order/get-order";
import { getOrderById } from "../controllers/order/get-order-id";
import { updateOrder } from "../controllers/order/update-order";
import { deleteOrder } from "../controllers/order/delete-order";

import { authMiddleware } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";

const orderRouter = Router();

orderRouter.post("/", authMiddleware, createOrder);
orderRouter.get("/", authMiddleware, getOrders);
orderRouter.get("/:id", authMiddleware, getOrderById);

orderRouter.put("/:id", authMiddleware, isAdmin, updateOrder);
orderRouter.delete("/:id", authMiddleware, isAdmin, deleteOrder);

export default orderRouter;
