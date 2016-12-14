import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { USER_DATA, USER } from './json/user';
import { GfxService } from './service/gfx.service';

@Component({
  selector: 'login',
  templateUrl: './dist/view/login.component.html',
})

export class LoginComponent {
  public user_data: any = USER_DATA;
  username: string = '';
  password: string = '';

  constructor(private router: Router, private gfx_service: GfxService) {
  }

  validLogin() {
    console.log(this.username == '');
    if (this.username == '' || this.password == '') {
      console.log(this.username)
      return true;
    } else {
      return false;
    }
  }

  onLogin() {
    this.router.navigate(['/survey_list']);
    this.gfx_service.login(this.username, this.password)
      .then((res) => {
        let temp = res;
        if(temp['success']){
          this.gfx_service.setCookie(res['cookie']);
          this.router.navigate(['/survey_list']);
        }
      })
  }
}
