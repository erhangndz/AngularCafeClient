import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MenuModel } from '../models/menuModel';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private http = inject(HttpClient);
  apiUrl = "https://localhost:7000/api/menus/";


  getAll(){
    return this.http.get<MenuModel[]>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<MenuModel>(this.apiUrl+id);
  }

  create(model:MenuModel){
    return this.http.post(this.apiUrl,model);
  }

  update(id:number,model:MenuModel){
    return this.http.put(this.apiUrl+id,model);
  }

  delete(id:number){
    return this.http.delete(this.apiUrl+id);
  }




}
