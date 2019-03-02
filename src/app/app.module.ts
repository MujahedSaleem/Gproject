import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule, DropdownModule } from "angular-bootstrap-md";
import { NavFoterComponent } from "./navFoter/navFoter.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";
import { JwtModule } from "@auth0/angular-jwt";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "src/environments/environment";
import { AuthGuard } from "../app/gurd/auth.guard";
import { AlertService } from './services/alert.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { ColorService } from './services/color.service';
@NgModule({
   declarations: [
      AppComponent,
      NavFoterComponent,
      FooterComponent,
      HomeComponent,
      RegisterComponent,
      DashboardComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot(),
      DropdownModule.forRoot(),
      ReactiveFormsModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      //importsfirebase/firestore, onlyneededfordatabasefeatures\n
      AngularFireAuthModule,
      //importsfirebase/auth,\onlyneededforauthfeatures\n
      AngularFireDatabaseModule,
      SweetAlert2Module.forRoot({
        buttonsStyling: false,
        customClass: 'modal-content',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn'}),
     CollapseModule.forRoot(),
     WavesModule.forRoot()
   ],

  providers: [UserService, AuthGuard, AlertService, ColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
