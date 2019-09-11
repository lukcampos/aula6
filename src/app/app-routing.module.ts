import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent, UserComponent} from './components/index'

const routes: Routes = [
  {
    path:'list', component:ListComponent
  },{
    path:'',component:ListComponent
  },{
    path:'user', component:UserComponent
  }
]; //

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
