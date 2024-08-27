import {SigninFormValues} from '../screens/auth/Signin/types';

export type AuthState = {
  isAuthenticated: boolean;
};

export type AuthContextType = {
  authState: AuthState;
  authenticate: (accessToken: string, refreshToken: string) => Promise<void>;
  signOut: () => Promise<void>;
  userData: SigninFormValues | null;
  setUserData: React.Dispatch<React.SetStateAction<SigninFormValues | null>>;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
