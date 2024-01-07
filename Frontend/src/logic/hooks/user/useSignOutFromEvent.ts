import repositoryContext from "../../repositories/repositoryContext.ts";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  MutationKey,
} from "react-query";
import ISignOutFromData from "../../repositories/interfaces/ISignOutFromData.ts";

const useSignOutFromEvent = (): {
  signOutFromEvent: (
    data: ISignOutFromData,
    options?: UseMutationOptions<boolean, Error, ISignOutFromData, MutationKey>
  ) => UseMutationResult<boolean, Error, ISignOutFromData, MutationKey>;
} => {
  const userRepository = repositoryContext.injectUserRepository();

  const signOutFromEvent = (
    data: ISignOutFromData,
    options?: UseMutationOptions<boolean, Error, ISignOutFromData, MutationKey>
  ): UseMutationResult<boolean, Error, ISignOutFromData, MutationKey> => {
    return useMutation(
      ["signOutFromEvent", data],
      (variables: ISignOutFromData) =>
        userRepository.signOutFromEvent(variables),
      options
    );
  };

  return { signOutFromEvent };
};

export type SignOutFromEvent = ReturnType<typeof useSignOutFromEvent>;

export default useSignOutFromEvent;
