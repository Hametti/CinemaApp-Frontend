import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ProgrammeComponent } from './programme/programme.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ProgrammeComponent,
    LoginComponent,
    AboutUsComponent,
    FooterComponent,
    AnnouncementComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'programme', component: ProgrammeComponent },
      { path: 'welcome', component: MainPageComponent },
      { path: 'about-us', component: AboutUsComponent},
      { path: 'login', component: LoginComponent},
      { path: '**', redirectTo: '/welcome' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
