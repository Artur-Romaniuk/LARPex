import UserDto from "../../../entities/UserDto.ts";

interface IUserRepository {
  getUser(id: number): Promise<UserDto>;
  getUsers(): Promise<UserDto[]>;
}

export default IUserRepository;