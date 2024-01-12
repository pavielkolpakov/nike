import { createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth/auth.reducers';

export interface AppState {
    auth: AuthState
}

export const selectAuthState = createFeatureSelector<AuthState>('auth');