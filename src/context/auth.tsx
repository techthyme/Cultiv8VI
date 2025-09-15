"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Session } from "@/types";

interface AuthState {
  session: Session | null;
  // userType: string;
  // setUserType: Dispatch<SetStateAction<string>>;
}

type AuthAction = { type: "LOGIN" } | { type: "LOGOUT" };

interface AuthContextType {
  state: AuthState;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        session: null,
      };
    case "LOGOUT":
      return {
        session: null,
      };

    default:
      return state;
  }
};

const initialState: AuthState = {
  session: null,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const value: AuthContextType = {
    state,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
