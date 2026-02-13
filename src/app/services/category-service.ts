import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '../models/categoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

private http = inject(HttpClient);
apiUrl = "https://localhost:7000/api/categories/";

getAll(){
  return this.http.get<CategoryModel[]>(this.apiUrl);
}

create(model:CategoryModel){
  return this.http.post<CategoryModel>(this.apiUrl,model);
}

delete(id:number){

  return this.http.delete(this.apiUrl + id);

}




}
