import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { SessionGuard } from './guards/session.guard';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { PasswordChangedMessageComponent } from './components/password-changed-message/password-changed-message.component';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { AccountDeletedMessageComponent } from './components/account-deleted-message/account-deleted-message.component';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';
import { ScreeningDaysComponent } from './components/screening-days/screening-days.component';
import { AccountRegisteredMessageComponent } from './components/account-registered-message/account-registered-message.component';
import { ReservationSeatsComponent } from './components/reservation-seats/reservation-seats.component';
import { ReservationAddedMessageComponent } from './components/reservation-added-message/reservation-added-message.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ProgrammeComponent,
    LoginComponent,
    AboutUsComponent,
    FooterComponent,
    AnnouncementComponent,
    MainPageComponent,
    MovieDetailComponent,
    SignUpComponent,
    UserPanelComponent,
    NavigationPanelComponent,
    AccountSettingsComponent,
    ReservationsComponent,
    DiscountsComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    PasswordChangedMessageComponent,
    AccountDeletedMessageComponent,
    NewReservationComponent,
    ScreeningDaysComponent,
    AccountRegisteredMessageComponent,
    ReservationSeatsComponent,
    ReservationAddedMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'programme', component: ProgrammeComponent },
      { path: 'main-page', component: MainPageComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'login', 
      canActivate: [NotLoggedGuard],
      component: LoginComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'user-panel',
        canActivate: [SessionGuard],
        component: UserPanelComponent },
      { path: 'password-changed-message', 
        canActivate: [NotLoggedGuard],
        component: PasswordChangedMessageComponent },
      { path: 'account-deleted-message', 
        canActivate: [NotLoggedGuard],
        component: AccountDeletedMessageComponent },
      { path: 'new-reservation',
        canActivate: [SessionGuard],
        component: NewReservationComponent },
      { path: 'account-registered-message',
        canActivate: [NotLoggedGuard],
        component: AccountRegisteredMessageComponent},
      { path: 'reservation-added-message',
        canActivate: [SessionGuard],
        component: ReservationAddedMessageComponent},
      { path: '', redirectTo: 'main-page' , pathMatch: 'full' },
      { path: '**', redirectTo: 'main-page' , pathMatch: 'full' }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
