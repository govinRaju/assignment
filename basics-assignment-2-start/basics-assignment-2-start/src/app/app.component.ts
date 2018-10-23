import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username = "Test";
  usernames = "sanju";
  allowNewServer = false;

  constructor(){
    setTimeout(()=>{
    this.allowNewServer=true;
  },2000);
  }
}
