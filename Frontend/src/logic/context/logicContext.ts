import ILogicMgmt from "../interfaces/ILogicMgmt.ts";
import usePaymentViewModel from "../viewModel/usePaymentViewModel.ts";
import useParticipantViewModel from "../viewModel/useParticipantViewModel.ts";
import useEventViewModel from "../viewModel/useEventViewModel.ts";
import useGameViewModel from "../viewModel/useGameViewModel.ts";

const injectPayment = () => {
  return usePaymentViewModel;
};

const injectParticipants = () => {
  return useParticipantViewModel;
};

const injectEvent = () => {
  return useEventViewModel;
};

const injectGame = () => {
  return useGameViewModel;
};

const logicMgmt: ILogicMgmt = {
  injectPayment,
  injectParticipants,
  injectEvent,
  injectGame,
};

export default logicMgmt;
