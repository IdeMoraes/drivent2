import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTickets, getTicketsTypes } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter

  .all("/*", authenticateToken)
  .get("/types", getTicketsTypes)
  .get("", getTickets)

export { ticketsRouter };
