import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetUsers = () => {
  const userRepository = repositoryContext.injectUserRepository();
  const getUsers = useQuery("users", userRepository.getUsers);

  return getUsers;
};

export type GetUsers = ReturnType<typeof useGetUsers>;

export default useGetUsers;
