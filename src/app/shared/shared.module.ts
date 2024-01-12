import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

const internalModules = [
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    internalModules
  ],
  exports: [
    ...internalModules
  ]
})
export class SharedModule { 
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    }
  }
}
