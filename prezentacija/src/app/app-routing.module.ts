import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuDisplayComponent } from './menu-display/menu-display.component';


const routes: Routes = [
  {path:"", redirectTo:"/menu", pathMatch:"full"},
  {path:"menu", component: MenuDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
