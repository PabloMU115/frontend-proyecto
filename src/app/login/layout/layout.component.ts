import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'login-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  loginForm: FormGroup;
  errorInicio: boolean = false;

  constructor(private fb : FormBuilder,
              private authService: AuthService) { 
    this.loginForm = this.fb.group({
      id_usuario: ['', Validators.required],
      passw: ['', Validators.required]
    });
  }
              

  ngOnInit(): void {
    // const data = {
    //     id_usuario: 'Rafael',
    //     passw: '1234'
    // }
    // this.authService.login(data).subscribe(
    //   res => {
    //     console.log(this.authService.valorUsrActual)
    //   }
    // )
  }
  onSubmit() {
    this.authService.login({id_usuario: this.loginForm.value.usuario, passw: this.loginForm.value.passw})
    .subscribe(
      res=>{
        if(!res || res === 401){
          this.errorInicio= res === 401;
        }else{
          //this.router.navigate(['/home']);
        }
      }
    )
  }
}
