import { createContext, useContext, useEffect, useState } from "react";
import useGetUsers from "../hooks/user/useGetUsers.ts";
import UserDto from "../../entities/UserDto.ts";

const useCreateUserContext = () => {
  const [user, setUser] = useState<UserDto>({} as UserDto);
  const getUsers = useGetUsers();
  const users: string[] = getUsers.data
    ? getUsers.data.map((user) => user.userEmail)
    : [];

  const handleUserChange = (userEmail: string) => {
    const u = getUsers.data?.find((user) => user.userEmail === userEmail);
    if (u) setUser(u);
  };

  useEffect(() => {
    if (getUsers.data) {
      setUser(getUsers.data[0]);
    }
  }, [getUsers.data]);

  return { user, users, handleUserChange };
};

export type UserContext = ReturnType<typeof useCreateUserContext>;

const userContext = createContext<UserContext>({} as UserContext);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userContextValue = useCreateUserContext();

  return (
    <userContext.Provider value={userContextValue}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
