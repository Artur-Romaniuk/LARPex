import UserDto from "../../../entities/UserDto.ts";

interface IUserRepository {
  getUser(id: number): Promise<UserDto>;
  getUsers(): Promise<UserDto[]>;
  signInToEvent(
    eventId: number,
    userId: number,
    characterId: number
  ): Promise<boolean>;
  signOutFromEvent(eventId: number, userId: number): Promise<boolean>;
}

export default IUserRepository;
