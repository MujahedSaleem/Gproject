import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CustomValidators } from "../Validator/CustomValidators";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  FormBuilder
} from "@angular/forms";
import { User } from "src/Model/User";
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model: Partial<User>;
  @Output() cancelRegsiter = new EventEmitter();
  registerModel: FormGroup;
  constructor(private fb: FormBuilder, private Authservice: AuthService, private route: Router) {}
  ngOnInit() {
    this.createRegisterForm();
  }
  cancel() {
    this.cancelRegsiter.emit(false);
  }
  createRegisterForm() {
    this.registerModel = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [
          null,
          Validators.compose([
            Validators.required,
            CustomValidators.patternValidator(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, {
              IsValid: true
            })
          ])
        ],
        passwrod: [null, Validators.required],
        confirmPassword: ["", Validators.required]
      },
      { validators: CustomValidators.matchPassword }
    );
  }

  register() {
    if ( this.registerModel.valid){
      this.model= Object.assign({} , this.registerModel.value);
      this.Authservice.SignUp(this.model.email, this.registerModel.value.passwrod);
      Swal('Message', 'Submitted successfully!', 'success').then( v => {
        this.Authservice.SignIn(this.model.email, this.registerModel.value.passwrod);
      });

    }



  }
}
