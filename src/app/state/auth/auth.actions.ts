import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
    INIT_USER = '[Auth] Initialize User',
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout'
}

export const InitUser = createAction (
    AuthActionTypes.INIT_USER
);

export const InitUserSuccess = createAction (
    '[Auth] Initialize User Success',
    props<{ token: string }>()
);

export const InitUserFailure = createAction (
    '[Auth] Initialize User Failure'
);


export const LogIn = createAction (
    AuthActionTypes.LOGIN,
    props<{email: string, password: string}>()
);

export const LogInSuccess = createAction (
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ token: string }>()
);

export const LogInFailure = createAction (
    AuthActionTypes.LOGIN_FAILURE
);

export const SignUp = createAction (
    AuthActionTypes.SIGNUP,
    props<{email: string, password: string, username: string}>()
);

export const SignUpSuccess = createAction (
    AuthActionTypes.SIGNUP_SUCCESS,
    props<{ token: string }>()
);

export const SignUpFailure = createAction (
    AuthActionTypes.SIGNUP_FAILURE
);

export const LogOut = createAction (
    AuthActionTypes.LOGOUT
);