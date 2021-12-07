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
    this.router.navigate(['/asociados'])
  }

  goAhorros(){
    this.router.navigate(['/ahorros'])
  }

  goCajas(){
    this.router.navigate(['/cajas'])
  }

  // goPrestamos(){
  //   this.router.navigate(['/prestamos'])
  // }

  logout(){
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
