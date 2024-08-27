import React from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthNavigation } from "./AuthNavigation";
import { MainNavigation } from "./MainNavigation";
import { useAuth } from "../hooks/useAuth";
import { useAuthCheck } from "../hooks/useAuthCheck";

export const AppNavigation = () => {
  const { authState } = useAuth();
  const { loading } = useAuthCheck();

  console.log("app navigation .tsx");

  if (loading) {
    // return <LoadingSpinner />;
  }

  return authState.isAuthenticated ? <MainNavigation /> : <AuthNavigation />;
};
