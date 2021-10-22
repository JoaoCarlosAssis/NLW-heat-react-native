import React, { createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null;
  isSigningIng: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}
type AuthContextProviderProps = {
  children: ReactNode
}
export const AuthContext = createContext({} as AuthContextData)


function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isSigningIng, setIsSigningIng] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn(){

  }
  async function signOut(){

  }

  return (
    <AuthContext.Provider value={
      {
        user,
        isSigningIng,
        signIn,
        signOut
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export {useAuth, AuthContextProvider}