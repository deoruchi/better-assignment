import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  login: boolean;
  usermail:string
  setUserLogin: (isLogin: boolean) => void;
  setCurrentUser:(usermail: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [login, setLogin] = useState(false);
const [usermail, setMail] = useState("")
  const setUserLogin = (isLogin: boolean) => {
    setLogin(isLogin);
  };
  const setCurrentUser = (mail:string)=>{
    setMail(mail)
  }

  

  return (
    <AuthContext.Provider value={{ login,usermail, setUserLogin, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => 
    { const context = useContext(AuthContext); if (context === undefined) { throw new Error('useAuth must be used within an AuthProvider'); } return context};
