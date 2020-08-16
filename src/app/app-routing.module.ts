import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  // {
  //   path: '/',
  //   redirectTo: 'home',
  // },
  {
    path: 'home',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
