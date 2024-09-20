import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
name="M Vamsi Krishna";
Registration="221801340009";
Domain="Software technology";
class="DS Lab";
img='https://admission.cutm.ac.in/assets/images/cutmlogo.png';
text_fld="text";
button="submit";
isdisabled:boolean=true;
}

