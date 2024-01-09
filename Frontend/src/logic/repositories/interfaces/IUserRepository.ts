import UserDto from "../../../entities/UserDto.ts";
import ISignInEventData from "../interfaces/ISignInEventData.ts";
import ISignOutFromData from "./ISignOutFromData.ts";

interface IUserRepository {
  getUser(id: number): Promise<UserDto>;
  getUsers(): Promise<UserDto[]>;
  signInToEvent(
    data: ISignInEventData,
  ): Promise<boolean>;
  signOutFromEvent(data: ISignOutFromData): Promise<boolean>;
}

export default IUserRepository;
