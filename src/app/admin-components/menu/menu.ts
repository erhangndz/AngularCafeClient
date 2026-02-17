import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu-service';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

private menuService = inject(MenuService);


menus = toSignal(this.menuService.getAll(),{
  initialValue:[]
})



delete(id:number){

  Swal.fire({
  title: "Silmek istediğinize emin misiniz?",
  text: "Bu işlemi geri alamazsınız!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Evet, Sil!",
  cancelButtonText: "İptal"
}).then((result) => {
  if (result.isConfirmed) {

      this.menuService.delete(id).subscribe({
        complete: () =>{
            Swal.fire({
      title: "Silindi!",
      text: "Öğe başarıyla silindi.",
      icon: "success",
      showConfirmButton:false
    });

      setTimeout(()=>{
        window.location.reload()
      },1000);

        }
      })


  }
});

}



}
