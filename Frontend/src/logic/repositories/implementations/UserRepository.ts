import IUserRepository from "../interfaces/IUserRepository.ts";
import ISignInEventData from "../interfaces/ISignInEventData.ts";
import ISignOutFromData from "../interfaces/ISignOutFromData.ts";
import UserDto from "../../../entities/UserDto.ts";
import axios from "axios";
import { API_HOST } from "../../../config/config.ts";
import UserEventDto from "../../../entities/UserEventDto.ts";

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

  signInToEvent(data: ISignInEventData): Promise<{
    eventId: number;
    orderId: string;
  }> {
    return axios
      .post(`${API_HOST}/Events/assignUser`, data)
      .then((response) => {
        return response.data;
      });
  }

  signOutFromEvent(data: ISignOutFromData): Promise<boolean> {
    return axios
      .post(`${API_HOST}/Events/unassignUser`, data)
      .then((response) => {
        return response.data;
      });
  }

  getUserEvents(id: number): Promise<UserEventDto[]> {
    return axios
      .get(`${API_HOST}/Events/userEvents?userId=${id}`)
      .then((response) => {
        return response.data;
      });
  }
}

export default UserRepository;
