import { Component, OnInit } from "@angular/core";
import { AlertService } from "../services/alert.service";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ColorService } from '../services/color.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  registermodel = false;
  constructor(private alert: AlertService, private auth: AuthService,private route: Router,private color: ColorService ) {}

  ngOnInit() {this.color.changeColor('');}

  rigsterToggle(event) {
    this.registermodel = event;
  }
  rigster(){
    this.registermodel = true;
  }
  signIn(){
    this.auth.GoogleAuth();
  }
}
