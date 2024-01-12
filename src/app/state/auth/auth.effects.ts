import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { LogIn, LogInFailure, LogInSuccess, SignUp, SignUpFailure, SignUpSuccess, InitUser, InitUserSuccess, InitUserFailure } from "./auth.actions";
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    InitUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(InitUser),
            switchMap((payload) => {
                return this.authService.initUser().pipe(
                    map(response => {
                        console.log(response);
                        return InitUserSuccess({token: response.user.token});
                    }),
                    catchError(() => (
                        of(InitUserFailure)
                    ))
                )
            })
        )
    )

    SignUp$ = createEffect(() => 
        this.actions$.pipe(
            ofType(SignUp),
            switchMap(payload => {
                return this.authService.register(payload.email, payload.password, payload.username).pipe(
                    map(response => {
                        console.log(response);
                        return SignUpSuccess({ token: response.user.token });
                    }),
                    catchError(() => (
                        of(SignUpFailure)
                    ))
                );
        })
    ));

    SignUpSuccess$ = createEffect(() => 
        this.actions$.pipe(
            ofType(SignUpSuccess),
            tap(payload => {
                localStorage.setItem('token', payload.token);
                this.router.navigateByUrl('/');
            })
    ), {dispatch: false});

    LogIn$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LogIn),
            switchMap(payload => (
                this.authService.login(payload.email, payload.password).pipe(
                    map(response => {
                        console.log(response);
                        return LogInSuccess({ token: response.user.token });
                    }),
                    catchError(() => (
                        of(LogInFailure)
                    ))
                ))
            )
        )
    )

    LogInSuccess$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LogInSuccess),
            tap(payload => {
                localStorage.setItem('token', payload.token);
                this.router.navigateByUrl('/');
            })
    ), {dispatch: false});

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private readonly authService: AuthService,
        private router: Router
    ) {}

 
}