import { Component, inject } from '@angular/core';
import { CategoryModel } from '../../../models/categoryModel';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  standalone: false,
  templateUrl: './create-category.html',
  styleUrl: './create-category.css',
})
export class CreateCategory {

  private categoryService = inject(CategoryService);
  private router = inject(Router);


category:CategoryModel= new CategoryModel();


create(){
  this.categoryService.create(this.category).subscribe({
    next: data => {
      this.router.navigate(['/admin/category'])
    },
    error: err => console.log(err)
  })
}


}
