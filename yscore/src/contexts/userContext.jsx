import { createContext, useContext, useState } from "react";
// import instance from './axiosContext';
const userContext = createContext({});
export const useUserContext = () => {
  return useContext(userContext);
};
const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
//   const loginUser = async () => {
//     try {
//       const params = { ...userDetails };
//       params._id = undefined;
//       const res = await instance.post('/users/login', params);
//       localStorage.setItem("token", JSON.stringify({ token: res.data.token }));
//       setUserDetails(res.data.user);
//       setIsUserLogged(true);
//       console.log("login res: ", res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const signupUser = async () => {
//     try {
//       console.log("signup details: ", userDetails);
//       const params = { ...userDetails };
//       params._id = undefined;
//       console.log("signup params: ", params);
//       const res = await instance.post('/users/signup', params);
//       localStorage.setItem("token", JSON.stringify({ token: res.data.token }));
//       setUserDetails(res.data.user);
//       setIsUserLogged(true);
//       console.log("signup res: ", res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const getUserDetails = async (token) => {
//     try {
//       const res = await instance.get('/users/token',
//         { headers: { authorization: `Bearer ${token}` } });
//       setUserDetails(res.data.user);
//       console.log("getUserDetails res.data.user: ", res.data.user);
//       setIsUserLogged(true);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     const token  = JSON.parse(localStorage.getItem('token'));
//     if(token) getUserDetails(token);
//   }, [])
  return (
    <userContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        userDetails,
        setUserDetails,
        allUsers,
        setAllUsers,
        // loginUser,
        // signupUser,
        // getUserDetails
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;