import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu-ui',
  standalone: false,
  templateUrl: './menu-ui.html',
  styleUrl: './menu-ui.css',
})
export class MenuUi {

private menuService = inject(MenuService);


menus = toSignal(this.menuService.getLatestFour(),{initialValue:[]})


}
