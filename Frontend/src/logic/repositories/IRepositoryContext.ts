import IEventRepository from "./interfaces/IEventRepository.ts";
import IGameRepository from "./interfaces/IGameRepository.ts";
import IImageRepository from "./interfaces/IImageRepository.ts";
import ILocationRepository from "./interfaces/ILocationRepository.ts";
import IParticipantRepository from "./interfaces/IParticipantRepository.ts";
import IPaymentRepository from "./interfaces/IPaymentRepository.ts";
import ITimeslotRepository from "./interfaces/ITimeslotRepository.ts";
import IUserRepository from "./interfaces/IUserRepository.ts";
import IOrderRepository from "./interfaces/IOrderRepository.ts";

interface IRepositoryContext {
  injectEventRepository: () => IEventRepository;
  injectGameRepository: () => IGameRepository;
  injectImageRepository: () => IImageRepository;
  injectLocationRepository: () => ILocationRepository;
  injectParticipantRepository: () => IParticipantRepository;
  injectPaymentRepository: () => IPaymentRepository;
  injectTimeslotRepository: () => ITimeslotRepository;
  injectUserRepository: () => IUserRepository;
  injectOrderRepository: () => IOrderRepository;
}

export default IRepositoryContext;
