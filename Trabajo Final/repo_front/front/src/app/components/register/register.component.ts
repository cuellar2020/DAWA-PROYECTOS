import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TesisService } from 'src/app/services/tesis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  id: string | null;
  constructor( private fb: FormBuilder,
                private router:Router,
               private _tesisService: TesisService,
               private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      password:['',Validators.required],
      email:['',Validators.email]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

 
  agregarUser() {

    const USER: User = {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
     
    }
    console.log(USER);
    this._tesisService.guardarUser(USER).subscribe(data =>{
      this.router.navigate(['/login'])
})   
    

    

  
  }

}
