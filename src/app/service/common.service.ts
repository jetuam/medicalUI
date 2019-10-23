import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/**
 * CommonService is used to perform all common service related API operation
 */
export class CommonService {
  showLogout = false;
  showSignin = true;

  constructor(private http: HttpClient) { }

  /**
   * getLocalStorage() used to get value from local storage
   * @returns local data value
   */
  getLocalStorage = () => {
    let data;
    if (localStorage.getItem('UserDetails') != null) {
      let localUser = localStorage.getItem('UserDetails');
      const approvarId = JSON.parse(localUser).approvarId;
      const approverName = JSON.parse(localUser).approverName;
      const approverRole = JSON.parse(localUser).approverRole;
      data = { showLogout: true, showSignin: false, localUser, approvarId, approverName, approverRole };
    }
    else {
      data = { showLogout: false, showSignin: true }
    }
    return data;
  }

  /**
    * postMakeClaim() for make claim data API call
    * @param {object} claimValue 
    * @returns the Claim Data value
    */
  postMakeClaim(claimValue) {
    return this.http.post('http://18.189.186.75:8000/medicalclaims/claims', claimValue, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /**
   * getHttpRequest used to call the all get API URL 
   * @param {string} apiUrl
   */
  getHttpRequest = (apiUrl: string) => {
    return this.http.get(apiUrl)
  }

  /**
   * postHttpRequest used to call the all post API URL 
   * @param {string} apiUrl
   * @param {object} requestParam 
   */
  postHttpRequest = (apiUrl: string, requestParam) => {
    return this.http.post(apiUrl, requestParam)
  }
}
