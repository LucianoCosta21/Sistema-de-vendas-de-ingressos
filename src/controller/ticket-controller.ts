import { Router } from "express";
import { PartnerService } from "../services/partner-service";
import { TicketService } from "../services/ticket-service";

export const ticktRoutes = Router();

ticktRoutes.post("/:eventId/tickets",  async(req ,res) => {
    const userId = req.user!.id;
    const partnerService = new PartnerService();
    const partner = await partnerService.findByUserId(userId)

    if(!partner){
      res.status(403).json({ message: "Not authorized" });
      return;
    }

    const {num_tickets, price} = req.body;
    const {eventId} = req.params;
    const ticketsService = new TicketService();
    await ticketsService.createMany({
      eventId: +eventId,
      numTickets: num_tickets,
      price,
    });
    res.status(204).send();
});

ticktRoutes.get("/:eventId/tickets", (req , res)=> {});

ticktRoutes.get("/:eventId/tickets/:ticketId", (req , res)=> {});