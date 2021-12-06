import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'login-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const data = {
        id_usuario: 'Rafael',
        passw: '1234'
    }
    this.authService.login(data).subscribe(
      res => {
        console.log(this.authService.valorUsrActual)
      }
    )
  }

}
