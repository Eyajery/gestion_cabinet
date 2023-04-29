import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcabinetComponent } from './components/listcabinet/listcabinet.component';
import { AddcabinetComponent } from './components/addcabinet/addcabinet.component';
import {RouterModule,Routes} from "@angular/router";
import{ FormsModule } from "@angular/forms";
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterComponent } from './components/register/register.component';

const routers : Routes =[
{path:'cabinets', component: ListcabinetComponent},
{path:'addcabinet', component: AddcabinetComponent},
{path:'editcabinet/:id', component: AddcabinetComponent},
{path:'', redirectTo: '/user',pathMatch:'full'},
{path:'user', component: UserLoginComponent},
{path:'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListcabinetComponent,
    AddcabinetComponent,
    UserLoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
