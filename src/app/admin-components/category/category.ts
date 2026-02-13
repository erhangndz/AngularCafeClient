import { Component, inject } from '@angular/core';
import { CategoryModel } from '../../models/categoryModel';
import { CategoryService } from '../../services/category-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

  private categoryService= inject(CategoryService);


  categories = toSignal(this.categoryService.getAll(), {initialValue: []} )


  delete(id:number){
    if(confirm('Silmek istediğinize emin misiniz?')){
      this.categoryService.delete(id).subscribe({
        next: () => window.location.reload()
      })
    }
  }


}
