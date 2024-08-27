import { useState, useEffect, useCallback } from "react";
import { useAuth } from "./useAuth";
import { retrieveTokenFromAsyncStorage } from "@/asyncStorageHelpers";

export const useAuthCheck = () => {
  const { authenticate } = useAuth();
  const [loading, setLoading] = useState(true);

  const checkAuthentication = useCallback(async () => {
    console.log("checkAuthentication from useAuthCheck.ts");
    try {
      const accessToken = await retrieveTokenFromAsyncStorage("accessToken");
      const refreshToken = await retrieveTokenFromAsyncStorage("refreshToken");
      console.log(accessToken, refreshToken);
      if (accessToken && refreshToken) {
        await authenticate(accessToken, refreshToken);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    } finally {
      setLoading(false);
    }
  }, [authenticate]);

  useEffect(() => {
    console.log("useeffect from useAuthCheck.ts");
    checkAuthentication();
  }, [checkAuthentication]);

  return { loading };
};
