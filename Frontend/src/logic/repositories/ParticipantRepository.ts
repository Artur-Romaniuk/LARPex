import IParticipantRepository from "../interfaces/repositories/IParticipantRepository.ts";
import ParticipantDto from "../../entities/ParticipantDto.ts";
import axios from "axios";
import { API_HOST } from "../../config/config.ts";

class ParticipantRepository implements IParticipantRepository {
  getParticipants(): Promise<ParticipantDto[]> {
    return axios
      .get(API_HOST + "/Participant/getParticipants")
      .then((res) => res.data);
  }

  getParticipant(id: number): Promise<ParticipantDto> {
    return axios
      .get(API_HOST + "/Participant/getParticipant/" + id)
      .then((res) => res.data);
  }

  createParticipant(participant: ParticipantDto): Promise<ParticipantDto> {
    return axios
      .post(API_HOST + "/Participant", participant)
      .then((res) => res.data);
  }

  updateParticipant(participant: ParticipantDto): Promise<ParticipantDto> {
    return axios
      .put(API_HOST + "/Participant", participant)
      .then((res) => res.data);
  }

  deleteParticipant(id: number): Promise<boolean> {
    return axios.delete(API_HOST + "/Participant?id=" + id);
  }
}

export default ParticipantRepository;
