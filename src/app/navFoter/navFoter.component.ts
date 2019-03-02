import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from 'angular-bootstrap-md';
import { ColorService } from '../services/color.service';
@Component({
  selector: 'app-navFoter',
  templateUrl: './navFoter.component.html',
  styleUrls: ['./navFoter.component.css']
})
export class NavFoterComponent implements OnInit {
dashboard = false;
  constructor(private color: ColorService) { }
  @ViewChild('navbar') navbar: NavbarComponent;
  ngOnInit() {

    this.color.setComponent(this.navbar);
 }




}
