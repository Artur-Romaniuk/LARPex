import ParticipantDto from "../../../entities/ParticipantDto.ts";
import CreateParticipantDto from "../../../entities/CreateParticipantDto.ts";

interface IParticipantRepository {
  getParticipants(): Promise<ParticipantDto[]>;
  getParticipant(id: number): Promise<ParticipantDto>;
  createParticipant(participant: CreateParticipantDto): Promise<ParticipantDto>;
  updateParticipant(participant: ParticipantDto): Promise<boolean>;
  deleteParticipant(id: number): Promise<boolean>;
}

export default IParticipantRepository;
