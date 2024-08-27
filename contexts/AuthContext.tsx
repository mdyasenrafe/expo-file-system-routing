import React, { createContext, useState, useCallback, useEffect } from "react";
import { AuthContextType, AuthProviderProps, AuthState } from "./types";
import { saveTokenToAsyncStorage } from "@/asyncStorageHelpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {SigninFormValues} from '../screens/auth/Signin/types';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
  });
  const [userData, setUserData] = useState<any | null>(null);

  console.log("authcontext.tsx file");

  // Memoize the authenticate function
  const authenticate = useCallback(
    async (accessToken: string, refreshToken: string) => {
      console.log("authenticated calling");
      saveTokenToAsyncStorage("accessToken", accessToken);
      saveTokenToAsyncStorage("refreshToken", refreshToken);
      setAuthState((prevState) => ({
        ...prevState,
        accessToken,
        refreshToken,
        isAuthenticated: true,
      }));
    },
    []
  );

  const signOut = useCallback(async () => {
    console.log("calling signout");
    setAuthState({
      isAuthenticated: false,
    });
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
    setUserData(null);
  }, []);

  const value = {
    authState,
    authenticate,
    signOut,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
