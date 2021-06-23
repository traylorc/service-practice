import { Component } from '@angular/core';
import { UserService } from './services/user.service';


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
    this.usersvc.list().subscribe(
      res => {console.log(res);}
    );
  }

}
