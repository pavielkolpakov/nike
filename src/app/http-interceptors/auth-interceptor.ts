import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token') ?? '';

        let headers = req.headers.append('Authorization', `Token ${token}`);

        req = req.clone({ headers });

        return next.handle(req);
    }
}