import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DialogAction, Modal, ModalData, ModalExistRef, ModalService } from '@ngdbtools/common';
import { FormDialog, FormDialogComponent, TextBoxFormControl, DropdownFormControl, AutoCompleteFormControl } from '@ngdbtools/dynamic-form';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'company-reuseables';

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

  openQuickForm() {

    const dialog = new FormDialog('Your Profile');
    dialog.setProceedAction(DialogAction.PROCEED.setText('Submit'));
    dialog.setFormControls(this.getQuickFormControls());

    const modal = new Modal(FormDialogComponent, new ModalData(FormDialog.FORM_DIALOG_DATA_KEY, dialog));

    const sub = this.modal.open(modal).subscribe((ref: ModalExistRef) => {
      if (ref.resolve) {
        alert(JSON.stringify(ref.resolve));
      }
      sub.unsubscribe();
    });

  }


  getQuickFormControls() {
    return [
      new TextBoxFormControl({
        key: 'firstName',
        label: 'First Name',
        placeholder: 'Your first name',
        column: 6,
      }),

      new TextBoxFormControl({
        key: 'lastName',
        label: 'Last Name',
        placeholder: 'Your last name',
        column: 6,
      }),

    ];
  }

}
