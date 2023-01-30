import { notFoundError } from "@/errors";
import ticketRepository  from "@/repositories/ticket-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getTicketsTypes(){
  const ticketTypes = await ticketRepository.findTicketTypes();
  if(!ticketTypes){
    throw notFoundError();
  }
  return ticketTypes;
};
async function getTicketsByUserId(userId: number){
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if(!enrollment){
        throw notFoundError();
    }
    const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id)
    if(!ticket){
        throw notFoundError();
    }
    return ticket;
};

const ticketsService = {
    getTicketsTypes,
    getTicketsByUserId
};

export default ticketsService;
