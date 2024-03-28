import {Children, createContext, useContext, useState} from 'react';

const LoginContext = createContext();

const LoginProvider = ({children}) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState();
  return (
    <LoginContext.Provider value={{isLoggedin, setIsLoggedin, user, setUser}}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
