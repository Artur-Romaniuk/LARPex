import IEventRepository from "../interfaces/repositories/IEventRepository.ts";
// import EventRepository from "../repositories/EventRepository.ts";
import EventRepositoryMock from "../repositoryMock/EventRepositoryMock.ts";
import IGameRepository from "../interfaces/repositories/IGameRepository.ts";
// import GameRepository from "../repositories/GameRepository.ts";
import GameRepositoryMock from "../repositoryMock/GameRepositoryMock.ts";
import IParticipantRepository from "../interfaces/repositories/IParticipantRepository.ts";
import ParticipantRepository from "../repositories/ParticipantRepository.ts";
import IPaymentRepository from "../interfaces/repositories/IPaymentRepository.ts";
import PaymentRepository from "../repositories/PaymentRepository.ts";

interface IRepositoryContext {
  injectEventRepository: () => IEventRepository;
  injectGameRepository: () => IGameRepository;
  injectParticipantRepository: () => IParticipantRepository;
  injectPaymentRepository: () => IPaymentRepository;
}

// const eventRepository: IEventRepository = new EventRepository();
const eventRepositoryMock: IEventRepository = new EventRepositoryMock();

// const gameRepository: IGameRepository = new GameRepository();
const gameRepositoryMock: IGameRepository = new GameRepositoryMock();

const participantsRepository: IParticipantRepository =
  new ParticipantRepository();

const paymentRepository: IPaymentRepository = new PaymentRepository();

const injectEventRepository = () => {
  // return eventRepository;
  return eventRepositoryMock;
};

const injectGameRepository = () => {
  // return gameRepository;
  return gameRepositoryMock;
};

const injectParticipantRepository = () => {
  return participantsRepository;
};

const injectPaymentRepository = () => {
  return paymentRepository;
};

const repositoryContext = {
  injectEventRepository,
  injectGameRepository,
  injectParticipantRepository,
  injectPaymentRepository,
} as IRepositoryContext;

export default repositoryContext;
