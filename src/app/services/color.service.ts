import { Injectable } from '@angular/core';
import { NavbarComponent } from 'angular-bootstrap-md';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

constructor() { }
  navbar: NavbarComponent;
  setComponent(compomnet: NavbarComponent) {
    this.navbar= compomnet;

}
changeColor(name: string){

  this.navbar.SideClass = 'navbar  navbar-expand-lg navbar-dark fixed-top scrolling-navbar  '+ name;

}
}
