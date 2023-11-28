import useParticipantModel from "../model/useParticipantModel";

interface useParticipantViewModelProps {
  id: number;
}

const useParticipantViewModel = (props: useParticipantViewModelProps) => {
  const participantModel = useParticipantModel(props);

  const handleParticipantChange = (name: string, value: string) => {
    participantModel.setParticipant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createParticipant = () => {
    console.log("createParticipant");
    participantModel.createParticipant.createParticipant(
      participantModel.participant,
    );
    participantModel.getParticipants.execute();
  };

  const updateParticipant = () => {
    console.log("updateParticipant");
    participantModel.updateParticipant.updateParticipant(
      participantModel.participant,
    );
    participantModel.getParticipants.execute();
    participantModel.getParticipant.execute();
  };

  const deleteParticipant = (id: number) => {
    console.log("deleteParticipant");
    participantModel.deleteParticipant.deleteParticipant(id);
    participantModel.getParticipants.execute();
  };

  return {
    participants: participantModel.participants,
    participantsLoading: participantModel.getParticipants.loadings,

    participant: participantModel.participant,
    handleParticipantChange,
    participantLoading: participantModel.getParticipant.loadings,

    createParticipant: createParticipant,
    createParticipantLoading: participantModel.createParticipant.loadings,

    updateParticipant: updateParticipant,
    updateParticipantLoading: participantModel.updateParticipant.loadings,

    deleteParticipant: deleteParticipant,
    deleteParticipantLoading: participantModel.deleteParticipant.loadings,
  };
};

export default useParticipantViewModel;
