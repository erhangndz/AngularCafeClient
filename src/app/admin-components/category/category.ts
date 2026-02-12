import { Component } from '@angular/core';
import { CategoryModel } from '../../models/categoryModel';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

  categories: CategoryModel[] = [
    {id:1,name:'Kahveler'},
    {id:2,name:'Tatlılar'},
    {id:3,name:'İçecekler'}
   ]


getCategories(){

return this.categories;

}



}
