import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TesisService } from 'src/app/services/tesis.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listUser: User[]=[];
  userForm: FormGroup;
  id: string | null;
  constructor( private fb: FormBuilder,
                private router:Router,
               private _userService: TesisService,
               private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      password:['',Validators.required],
      email:['',Validators.email]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
  }
  obtenerUser() {
    
  
  }

}
