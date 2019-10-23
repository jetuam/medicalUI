import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * NavbarComponent is used to perform navbar menu related operation
 */
export class NavbarComponent implements OnInit {

  localStorageData: object;

  constructor(private router: Router, private service: CommonService) {
    this.localStorageData = {}
  }

  ngOnInit() {
    /**
     * Header Sticky for header should be fixed top of the page.
     */
    let headerSticky = () => {
      const header = document.getElementById('myHeader');
      const sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
    window.onscroll = () => { headerSticky() };

    //LocalStorageData get

    this.localStorageData = this.service.getLocalStorage();
  }

  //logOut() is used to log out the approval login page

  logOut() {
    localStorage.removeItem('UserDetails');
    this.router.navigate(['/home']);
  }

  /**
   * responsive menu
   * Which is run with only mobile view port
   */
  navMenu = () => {
    const x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

}
