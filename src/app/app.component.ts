import { Component } from '@angular/core';
import {ModalService, Modal, ModalExistRef, ModalData} from '@ngdbtools/common';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal';

  constructor(private modal: ModalService) {
  }

  public openModal() {
    const dialogModal = new Modal(LoginComponent, new ModalData('hello', 'world'));

    const sub = this.modal.open(dialogModal).subscribe((ref: ModalExistRef) => {
        if (ref.tag === dialogModal.tag && ref.resolve) {
            console.log(ref.resolve);
        }
        sub.unsubscribe();
    });
}

}
