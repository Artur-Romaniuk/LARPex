import IEventRepository from "../logic/interfaces/repositories/IEventRepository.ts";
import EventRepository from "../logic/repositories/EventRepository.ts";
import useEventViewModel from "../logic/viewModel/useEventViewModel.ts";
import useEventModel from "../logic/model/useEventModel";
import EventRepositoryMock from "../logic/repositoryMock/EventRepositoryMock.ts";
import IGameRepository from "../logic/interfaces/repositories/IGameRepository.ts";
import GameRepository from "../logic/repositories/GameRepository.ts";
import useGameModel from "../logic/model/useGameModel";
import useGameViewModel from "../logic/viewModel/useGameViewModel.ts";
import IParticipantRepository from "../logic/interfaces/repositories/IParticipantRepository.ts";
import ParticipantRepository from "../logic/repositories/ParticipantRepository.ts";
import useParticipantModel from "../logic/model/useParticipantModel";
import useParticipantViewModel from "../logic/viewModel/useParticipantViewModel.ts";
import PaymentRepository from "../logic/repositories/PaymentRepository.ts";
import IPaymentRepository from "../logic/interfaces/repositories/IPaymentRepository.ts";
import usePaymentModel from "../logic/model/usePaymentModel";
import GameRepositoryMock from "../logic/repositoryMock/GameRepositoryMock.ts";

const eventRepository: IEventRepository = new EventRepository();
const eventRepositoryMock: IEventRepository = new EventRepositoryMock();

const gameRepository: IGameRepository = new GameRepository();
const gameRepositoryMock: IGameRepository = new GameRepositoryMock();

const participantsRepository: IParticipantRepository =
  new ParticipantRepository();

const paymentRepository: IPaymentRepository = new PaymentRepository();

//////////////// Repository ///////////////////////
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

//////////////// Model ///////////////////////
const injectEventModel = () => {
  return useEventModel;
};

const injectGameModel = () => {
  return useGameModel;
};

const injectParticipantModel = () => {
  return useParticipantModel;
};

const injectPaymentModel = () => {
  return usePaymentModel;
};

//////////////// ViewModel ///////////////////////
const injectEventViewModel = () => {
  return useEventViewModel;
};

const injectGameViewModel = () => {
  return useGameViewModel;
};

const injectParticipantViewModel = () => {
  return useParticipantViewModel;
};

const injectPaymentViewModel = () => {
  return usePaymentModel;
};

export {
  injectEventRepository,
  injectGameRepository,
  injectParticipantRepository,
  injectPaymentRepository,
  injectEventModel,
  injectGameModel,
  injectParticipantModel,
  injectPaymentModel,
  injectEventViewModel,
  injectGameViewModel,
  injectParticipantViewModel,
  injectPaymentViewModel,
};
