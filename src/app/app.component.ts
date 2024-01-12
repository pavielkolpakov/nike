import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { InitUser } from './state/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nike';

  constructor(
    private readonly authService: AuthService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(InitUser());
  }
}
