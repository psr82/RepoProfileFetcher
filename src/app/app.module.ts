import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserNameService} from '../app/services/user-name.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './components/user-name/user-name.component';
// import {HttpModule} from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [
      FormsModule
    ]
  ],
  providers: [UserNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
