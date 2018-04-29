import { Component } from '@angular/core';
declare let FB: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fbAsyncInit()  {
    FB.init({
      appId      : '2055364314701838',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });
    FB.getLoginStatus(function(response) {
      
    });
      
    FB.AppEvents.logPageView();   
      
  };
  loading = ()=>{
    var js, fjs = document.getElementsByTagName('script')[0];
     if (document.getElementById('facebook-jssdk')) {return;}
     js = document.createElement('script'); 
     js.id = 'facebook-jssdk';
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
  }
  statusChangeCallback(response){
     if(response.status === 'connected'){
       console.log("logeado y autenticado correctamente");
     }else{
       console.log("not autenticado")
     }
   }
   checkLoginState() {
    FB.getLoginStatus(function(response) {
      console.log(response.status);
    })
  }
}