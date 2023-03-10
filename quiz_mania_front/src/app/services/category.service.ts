import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  //load alll the categories
  public categories()
  {
    return this._http.get(`${baseUrl}/category/`);
  }

  // add categories
  public addCategory(category: any)
  {
    return this._http.post(`${baseUrl}/category/`,category);
  }
}
