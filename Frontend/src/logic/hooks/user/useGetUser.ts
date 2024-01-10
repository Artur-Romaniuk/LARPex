import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetUser = (id: number) => {
  const userRepository = repositoryContext.injectUserRepository();
  const getUser = useQuery(["users", id], () =>
    userRepository.getUser(id),
  );

  return { getUser };
};

export type GetUser = ReturnType<typeof useGetUser>;

export default useGetUser;