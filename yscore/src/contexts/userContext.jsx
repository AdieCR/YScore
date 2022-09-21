import { createContext, useContext, useState } from "react";
// import instance from './axiosContext';
const userContext = createContext({});
export const useUserContext = () => {
  return useContext(userContext);
};
const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  return (
    <userContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        userDetails,
        setUserDetails,
        allUsers,
        setAllUsers,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;