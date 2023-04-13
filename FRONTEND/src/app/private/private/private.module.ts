import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


const routes: Routes = [{
  path: 'private',
  component: PrivateComponent,
  canActivate: [AuthGuardService]
}
 
]

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivateModule { }
