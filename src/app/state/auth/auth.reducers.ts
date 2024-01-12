import { createReducer, on } from "@ngrx/store";
import { InitUserSuccess, LogInFailure, LogInSuccess, LogOut, SignUpFailure, SignUpSuccess, InitUserFailure } from "./auth.actions";

export interface AuthData {
    token: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: AuthData | null;
    errorMessage: string | null;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
}

export const authReducer = createReducer(
    initialState,
    on(InitUserSuccess, ( state, { token } ) => ({
        ...state,
        isAuthenticated: true,
        user: {
            token: token
        }
    })),
    on(InitUserFailure, (state) => ({
        ...state,
        errorMessage: "Incorrect email or password."
    })),
    on(LogInSuccess, (state, { token}) => ({
        ...state,
        isAuthenticated: true,
        user: {
            token: token
        },
    })),
    on(LogInFailure, (state) => ({
        ...state,
        errorMessage: "Incorrect email or password."
    })),
    on(SignUpSuccess, (state, { token }) => ({
        ...state,
        isAuthenticated: true,
        user: {
            token: token
        },
    })),
    on(SignUpFailure, state => ({
        ...state,
        errorMessage: 'That email is already in use.'
    })),
    on(LogOut, state => state)
)