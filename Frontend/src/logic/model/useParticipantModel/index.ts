import { injectParticipantRepository } from "../../../config/context.ts";
import useGetParticipants from "./useGetParticipants.ts";
import useGetParticipant from "./useGetParticipant.ts";
import useCreateParticipant from "./useCreateParticipant.ts";
import useUpdateParticipant from "./useUpdateParticipant.ts";
import useDeleteParticipant from "./useDeleteParticipant.ts";
import { useEffect, useState } from "react";
import ParticipantDto from "../../../entities/ParticipantDto.ts";

interface useParticipantModelProps {
  id: number;
}

const useParticipantModel = (props: useParticipantModelProps) => {
  const { id } = props;
  const participantRepository = injectParticipantRepository();

  const getParticipants = useGetParticipants({ participantRepository });
  const getParticipant = useGetParticipant({ participantRepository, id });
  const createParticipant = useCreateParticipant({ participantRepository });
  const updateParticipant = useUpdateParticipant({ participantRepository });
  const deleteParticipant = useDeleteParticipant({ participantRepository });

  const participants = getParticipants.participants;
  const [participant, setParticipant] = useState<ParticipantDto>({
    id: 0,
    eventId: 0,
    name: "",
    description: "",
  } as ParticipantDto);

  useEffect(() => {
    getParticipant.execute();
    getParticipants.execute();
  }, []);

  useEffect(() => {
    if (getParticipant.participant) {
      setParticipant(getParticipant.participant);
    }
  }, [id, getParticipant.participant]);

  return {
    participants,
    getParticipants,

    participant,
    setParticipant,
    getParticipant,

    createParticipant,
    updateParticipant,
    deleteParticipant,
  };
};

export default useParticipantModel;
