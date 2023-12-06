import IEventRepository from "../repositories/interfaces/IEventRepository.ts";
import EventRepository from "../repositories/implementations/EventRepository.ts";
// import EventRepositoryMock from "../repositoryMock/EventRepositoryMock.ts";
import IGameRepository from "../repositories/interfaces/IGameRepository.ts";
import GameRepository from "../repositories/implementations/GameRepository.ts";
// import GameRepositoryMock from "../repositoryMock/GameRepositoryMock.ts";
import IParticipantRepository from "../repositories/interfaces/IParticipantRepository.ts";
import ParticipantRepository from "../repositories/implementations/ParticipantRepository.ts";
import IPaymentRepository from "../repositories/interfaces/IPaymentRepository.ts";
import PaymentRepository from "../repositories/implementations/PaymentRepository.ts";
import IImageRepository from "../repositories/interfaces/IImageRepository.ts";
import ILocationRepository from "../repositories/interfaces/ILocationRepository.ts";
import ITimeslotRepository from "../repositories/interfaces/ITimeslotRepository.ts";
import IUserRepository from "../repositories/interfaces/IUserRepository.ts";
import ImageRepository from "../repositories/implementations/ImageRepository.ts";
import LocationRepository from "../repositories/implementations/LocationRepository.ts";
import TimeslotRepository from "../repositories/implementations/TimeslotRepository.ts";
import UserRepository from "../repositories/implementations/UserRepository.ts";

interface IRepositoryContext {
  injectEventRepository: () => IEventRepository;
  injectGameRepository: () => IGameRepository;
  injectImageRepository: () => IImageRepository;
  injectLocationRepository: () => ILocationRepository;
  injectParticipantRepository: () => IParticipantRepository;
  injectPaymentRepository: () => IPaymentRepository;
  injectTimeslotRepository: () => ITimeslotRepository;
  injectUserRepository: () => IUserRepository;
}

const eventRepository: IEventRepository = new EventRepository();
// const eventRepositoryMock: IEventRepository = new EventRepositoryMock();

const gameRepository: IGameRepository = new GameRepository();
// const gameRepositoryMock: IGameRepository = new GameRepositoryMock();

const imageRepository: IImageRepository = new ImageRepository();

const locationRepository: ILocationRepository = new LocationRepository();

const participantsRepository: IParticipantRepository =
  new ParticipantRepository();

const paymentRepository: IPaymentRepository = new PaymentRepository();

const timeslotRepository: ITimeslotRepository = new TimeslotRepository();

const userRepository: IUserRepository = new UserRepository();

const injectEventRepository = () => {
  return eventRepository;
  // return eventRepositoryMock;
};

const injectGameRepository = () => {
  return gameRepository;
  // return gameRepositoryMock;
};

const injectImageRepository = () => {
  return imageRepository;
};

const injectLocationRepository = () => {
  return locationRepository;
};

const injectParticipantRepository = () => {
  return participantsRepository;
};

const injectPaymentRepository = () => {
  return paymentRepository;
};

const injectTimeslotRepository = () => {
  return timeslotRepository;
}

const injectUserRepository = () => {
  return userRepository;
}

const repositoryContext = {
  injectEventRepository,
  injectGameRepository,
  injectImageRepository,
  injectLocationRepository,
  injectParticipantRepository,
  injectPaymentRepository,
  injectTimeslotRepository,
  injectUserRepository,
} as IRepositoryContext;

export default repositoryContext;
