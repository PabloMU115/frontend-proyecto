import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  loginForm: FormGroup;
  errorInicio: boolean = false;

  constructor(private fb : FormBuilder,
              private authService: AuthService,
              private router:Router) { 
    this.loginForm = this.fb.group({
      id_usuario: ['', Validators.required],
      passw: ['', Validators.required]
    });
  }
              

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.authService.login(this.loginForm.value)
    .subscribe(
      res=>{
        if(!res || res === 401){
          this.errorInicio= res === 401;
        }else{
          this.router.navigate(['/home']);
        }
      }
    )
  }
}
