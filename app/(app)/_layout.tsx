import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import { useAuthCheck } from "@/hooks/useAuthCheck";

export default function AppLayout() {
  const { authState } = useAuth();
  const { loading } = useAuthCheck();

  // You can keep the splash screen open, or render a loading screen like we do here.
  //   if (authState.isAuthenticated) {
  //     return <Text>Loading...</Text>;
  //   }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!authState.isAuthenticated) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/onboarding/signin" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}
