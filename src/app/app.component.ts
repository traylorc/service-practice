import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './user.class';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private usersvc: UserService) 
  {

  }

  ngOnInit(): void
  {
    let newUser = new User();
    newUser.id = 10;
    newUser.username = "PLundmark";
    newUser.password = "Bluwiz1!";
    newUser.firstname = "Pekka";
    newUser.lastname = "Lundmark";
    newUser.phone = "333-666-8888";
    newUser.email = "Plundmark@nokia.com";
    newUser.isReviewer = false;
    newUser.isAdmin = false;


    this.usersvc.login("Ctraylor", "Bluwiz1!").subscribe(
      res => {console.log("success", res);},
      err => {console.error(err);}
    ) ;
  }

}
