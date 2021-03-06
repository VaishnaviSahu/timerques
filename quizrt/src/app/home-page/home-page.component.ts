import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PlayersComponent} from '../players/players.component';
import {LoginComponent} from '../login/login.component';
import {AuthService, GoogleLoginProvider} from 'angular-6-social-login';

export interface DialogData {

  name: string;
  country:string;
  password:string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
//   counter:number = 10;
//   message:any[]=["djshfsj","ddfd","fsdfdsfds","dsfdfdfd","dffdsfdsfdsf","fdfdsfsd","hdgccjsdgh","hfgshdgfhjds","jdhgfdhgfj"];
//   i:number=0;
//   score:number=0;
name: string;
country:string;
password: string;
  constructor(private dialog: MatDialog, private socialAuthService: AuthService){ }

//   ngOnInit() {
//     console.log(this.counter);
//     this.gameClock();
//   }

//   gameClock() {
//     const intervalMain = setInterval(() => {
//     // this.mainClock=counter;
//     this.counter--;
//     if (this.counter <= 0) {
//      // this.mainClock="Time Up :p"
      // clearInterval(intervalMain);
//       this.resetTimer();

//     }
//   }, 1000);
// }

// resetTimer(){
//   // code here

//   this.i++;
//   this.score+=this.counter*2;
//   this.counter=10;
// }

public socialSignIn(socialPlatform: string){
  let socialPlatformProvider;
  if(socialPlatform== "google"){
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  }

  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData)=> {console.log(socialPlatform +" sign in data: ", userData);}
  );
}

openDialog(): void {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "40%";
  this.dialog.open(PlayersComponent,dialogConfig);

}

openDialog1():void {
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "40%";
  this.dialog.open(LoginComponent,dialogConfig);

}


}
