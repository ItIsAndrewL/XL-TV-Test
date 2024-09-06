/**
 * The App Component serves as an entrypoint for the application,
 * which shows the navigation controller.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tas = ["Andrew", "Ajay", "Jade", "Will", "Audrey", "Kiernan", "Ellie"];
  onClick() {
    let text = document.querySelector(".ta");
    let ran = Math.floor(Math.random()*6);
    text!.innerHTML = this.tas[ran];
  }
}
