import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { BehaviorSubject, catchError, mapTo, Observable, of, tap } from 'rxjs';

import jwt_decode from 'jwt-decode'

import { environment } from '../../../../environments/environment'
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private JWT_TOKEN = 'JWT_TOKEN';
  private usrActualSubject = new BehaviorSubject<Usuario>(new Usuario()); 
  public usrActual = this.usrActualSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user : {id_usuario:string, passw: string}): Observable<any>{
    return this.http.post<any>(`${environment.server}/auth/iniciar`, user)
      .pipe(
        tap(
          ({token}) => {       
            this.doLogin(token);
            // console.log(this.getTokenDecode());
          }
        ), 
        mapTo(true),
        catchError(
          error => {
            this.doLogout();
            return of (error.status)
          }
        )
      )
  }

  logOut(){
    this.http.post<any>(`${environment.server}/auth/cerrar`, {id_usuario: this.getUsrActual().id_usuario})
      .subscribe();
    this.doLogout();
    this.router.navigate(['/home']);
  }

  private guardarToken(token: string){
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  doLogin(token: string){
    this.guardarToken(token);
    this.usrActualSubject.next(this.getUsrActual());
  }

  doLogout(){
    if (this.getJwtToken()) {
      this.eliminarToken();
    } 
    this.usrActualSubject.next(this.getUsrActual());
  }

  public getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }
  
  private eliminarToken(){
    localStorage.removeItem(this.JWT_TOKEN);
  }

  isLoggedIn(){
    return !!this.getJwtToken(); 
  }

  private getTokenDecode():any{
    return jwt_decode(this.getJwtToken()!); 
  }
 
  private getUsrActual() : Usuario {
    if (!this.getJwtToken()) {
      return new Usuario(); 
    }
    const token = this.getTokenDecode();
    return new Usuario(token.sub, parseInt(token.rol));
  }
  
  public get valorUsrActual(): Usuario{
    return this.usrActualSubject.value;
  }
 
}
