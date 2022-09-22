import { createContext, useContext, useState } from "react";
// import instance from './axiosContext';
const userContext = createContext({});
export const useUserContext = () => {
  return useContext(userContext);
};
const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <userContext.Provider
      value={{
        userDetails,
        setUserDetails,
        isUserLogged, 
        setIsUserLogged,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;