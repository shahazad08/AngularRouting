import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutusComponent } from './routing/aboutus/aboutus.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './routing/user/user.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    DemoComponentComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
