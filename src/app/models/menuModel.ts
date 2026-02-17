import { CategoryModel } from "./categoryModel";

export class MenuModel{
  id:number;
  name:string;
  price:number;
  imageUrl:string;
  categoryId:number;
  category:CategoryModel;
}
