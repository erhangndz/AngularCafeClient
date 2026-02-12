import { Component, signal } from '@angular/core';
import { CategoryModel } from './models/categoryModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

title:string= "Kategoriler"

category: CategoryModel
categories: CategoryModel[] = [
  {id:1,name:'Kahveler'},
  {id:2,name:'Tatlılar'},
  {id:3,name:'İçecekler'}
 ]


}
