import { Component,OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { usuarioextendido } from "./usuarioextendido";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:SocialUser;
  usuario:usuarioextendido;
  constructor(private authService: AuthService) { }

  
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log(FacebookLoginProvider.PROVIDER_ID)
    console.log(this.authService.signIn(FacebookLoginProvider.PROVIDER_ID));
  }
  
  
  signOut(): void {
    this.authService.signOut();
  } 
  ngOnInit(){
    /*this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user)
    });*/

    this.authService.authState.subscribe((usuario) => {
      this.user = usuario;
      console.log(usuario)
    });

  }
}