import UserDto from "../../../entities/UserDto.ts";
import ISignInEventData from "../interfaces/ISignInEventData.ts";
import ISignOutFromData from "./ISignOutFromData.ts";
import UserEventDto from "../../../entities/UserEventDto.ts";

interface IUserRepository {
  getUserEvents(id: number): Promise<UserEventDto[]>;
  getUser(id: number): Promise<UserDto>;
  getUsers(): Promise<UserDto[]>;
  signInToEvent(data: ISignInEventData): Promise<{
    eventId: number;
    orderId: string;
  }>;
  signOutFromEvent(data: ISignOutFromData): Promise<boolean>;
}

export default IUserRepository;
