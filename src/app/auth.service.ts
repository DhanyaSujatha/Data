import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserAuth } from './userauth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange= new Subject<boolean>();
    user;

  constructor(private router:Router) { }
  registerUser(authdata: UserAuth){
    this.user= {
        email:authdata.email,
        userID:Math.round(Math.random()*10000).toString()
    };
    this.authSuccessfully();
    this.router.navigate(['/measurement']);
        }
        login(authdata:UserAuth) {
            this.user= {
                email:authdata.email,
                userID:Math.round(Math.random()*10000).toString()
            }; 
        this.authSuccessfully();
            this.router.navigate(['/measurement']);
        }
        logout() {
            this.user=null;
            this.authChange.next(false);
            this.router.navigate(['/login']);
        }
       
        getUser() {
            return {...this.user};
        }
        isAuth() {
            return this.user!=null;
        }
        authSuccessfully(){
            this.authChange.next(true);
        }
    }
