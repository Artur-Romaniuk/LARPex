import ParticipantDto from "../../../entities/ParticipantDto.ts";

interface IParticipantRepository {
  getParticipants(): Promise<ParticipantDto[]>;
  getParticipant(id: number): Promise<ParticipantDto>;
  createParticipant(participant: ParticipantDto): Promise<ParticipantDto>;
  updateParticipant(participant: ParticipantDto): Promise<ParticipantDto>;
  deleteParticipant(id: number): Promise<boolean>;
}

export default IParticipantRepository;
