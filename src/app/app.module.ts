import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CLCoremoduleModule } from './core/coremodule.module';
import { CLCoreComponentComponent } from './core/corecomponent.component';
import { CLLoginComponentComponent } from './login/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CLWelcomeComponent } from './welcome/welcome/welcome.component';
import { CLProgressComponent } from './mycomponent/progress/progress.component';
import { CLConfirmmessageComponent } from './mycomponent/confirmmessage/confirmmessage.component';
import { CLDashboardComponent } from './welcome/dashboard/dashboard.component';
import { CLStudentListComponent } from './welcome/student-list/student-list.component';
import { CLUserregistrationComponent } from './welcome/userregistration/userregistration.component';
import { CLPaymentComponent } from './welcome/payment/payment/payment.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CLLoginComponentComponent },
  {
    path: 'studentsection', component: HomeComponent, children:
      [{
        path: 'registration', component: CLUserregistrationComponent,
      },
      ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'welcome', component: CLWelcomeComponent,
    children: [{
      path: 'studentList', component: CLStudentListComponent,
    },
    {
      path: 'dashboard', component: CLDashboardComponent
    },
    {
      path: 'registration', component: CLUserregistrationComponent,
    },
    {
      path: 'payment', component: CLPaymentComponent,
    },
  ]
  },
  // { path: 'home', component:  },
];

@NgModule({
  declarations: [
    AppComponent,
    CLCoreComponentComponent,
    CLLoginComponentComponent,
    HomeComponent,
    CLUserregistrationComponent,
    CLStudentListComponent
    ,
    CLWelcomeComponent,
    CLProgressComponent,
    CLConfirmmessageComponent,
    CLDashboardComponent,
    CLPaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CLCoremoduleModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
