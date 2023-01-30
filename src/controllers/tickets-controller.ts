import { AuthenticatedRequest } from "@/middlewares";
import ticketsService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketTypes = await ticketsService.getTicketsTypes();
    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
};
export async function getTickets(req: AuthenticatedRequest, res: Response) {
    const {userId} = req;
    try {
      const ticketTypes = await ticketsService.getTicketsByUserId(userId);
      return res.status(httpStatus.OK).send(ticketTypes);
    } catch (error) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }