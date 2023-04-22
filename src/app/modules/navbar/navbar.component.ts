import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  router = inject(Router)

  route(path: string) {

    this.router.navigateByUrl(path)

  }



}
