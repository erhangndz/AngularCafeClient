import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../../models/menuModel';
import { MenuService } from '../../../services/menu-service';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-menu',
  standalone: false,
  templateUrl: './update-menu.html',
  styleUrl: './update-menu.css',
})
export class UpdateMenu implements OnInit {

private menuService = inject(MenuService);
private categoryService = inject(CategoryService);
private router = inject(Router);
private cdr = inject(ChangeDetectorRef);

menu: MenuModel = new MenuModel();
@Input() id: string;

ngOnInit(): void {

const menuId = Number(this.id);

this.menuService.getById(menuId).subscribe({
  next: data => {
    this.menu= data;

    this.cdr.detectChanges();


  }
})


}


 categories = toSignal(this.categoryService.getAll(),{initialValue:[]})

  update(){
    this.menuService.update(this.menu.id,this.menu).subscribe({
      complete: () => this.router.navigate(['admin/menu'])
    })
  }


}
