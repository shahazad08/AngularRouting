import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './routing/aboutus/aboutus.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { UserComponent } from './routing/user/user.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
