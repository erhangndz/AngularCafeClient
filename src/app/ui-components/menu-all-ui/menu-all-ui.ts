import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu-all-ui',
  standalone: false,
  templateUrl: './menu-all-ui.html',
  styleUrl: './menu-all-ui.css',
})
export class MenuAllUi {

private menuService = inject(MenuService);


menus = toSignal(this.menuService.getAll(),{initialValue:[]})

}
