import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../login/shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  goAsociados(){
    
  }

  goAhorros(){
    // this.router.navigate(['/ahorros'])
    alert('Descomentar la linea de redireccion')
  }

  goCajas(){
    this.router.navigate(['/cajas'])
  }

  logout(){
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
