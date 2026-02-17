import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { CategoryModel } from '../../../models/categoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  standalone: false,
  templateUrl: './update-category.html',
  styleUrl: './update-category.css',
})
export class UpdateCategory implements OnInit {

  @Input() id: string;
  private categoryService = inject(CategoryService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  category:CategoryModel= new CategoryModel();

  ngOnInit(): void {

    this.categoryService.getById(this.id).subscribe({
      next: data =>{
          this.category= data;
          this.cdr.detectChanges();
      },
      error: err => console.error(err)
    })

  }


  update(){
    this.categoryService.update(this.category.id,this.category).subscribe({
      complete: () => {
            this.router.navigate(['/admin/category'])
      },
      error: err=> console.error(err)
    })
  }





}
