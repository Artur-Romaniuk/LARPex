import IUserRepository from "../interfaces/IUserRepository.ts";
import UserDto from "../../../entities/UserDto.ts";
import axios from "axios";
import {API_HOST} from "../../../config/config.ts";

class UserRepository implements IUserRepository {
  getUser(id: number): Promise<UserDto> {
    return axios.get(`${API_HOST}/User/getUser/${id}`).then((response) => {
      return response.data;
    });
  }

  getUsers(): Promise<UserDto[]> {
    return axios.get(`${API_HOST}/User`).then((response) => {
      return response.data;
    });
  }

  signInToEvent(eventId: number, userId: number, characterId: number): Promise<boolean> {
    const data = {
      CharacterId: characterId, 
      EventId: eventId,
      UserId: userId,
    };

    return axios
      .post(`${API_HOST}/Events/assignUser`, data)
      .then((response) => {
        return response.data;
      });
  }

  signOutFromEvent(eventId: number, userId: number): Promise<boolean> {
    const data = {
      EventId: eventId,
      UserId: userId,
    };

    return axios
      .post(
        `${API_HOST}/Events/unassignUser`, data
      )
      .then((response) => {
        return response.data;
      });
  }
}

export default UserRepository;