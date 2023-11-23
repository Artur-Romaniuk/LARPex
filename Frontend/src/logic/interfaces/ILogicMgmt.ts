import usePaymentViewModel from "../viewModel/usePaymentViewModel.ts";
import useParticipantViewModel from "../viewModel/useParticipantViewModel.ts";
import useEventViewModel from "../viewModel/useEventViewModel.ts";
import useGameViewModel from "../viewModel/useGameViewModel.ts";

interface ILogicMgmt {
  injectPayment: () => typeof usePaymentViewModel;
  injectParticipants: () => typeof useParticipantViewModel;
  injectEvent: () => typeof useEventViewModel;
  injectGame: () => typeof useGameViewModel;
}

export default ILogicMgmt;
