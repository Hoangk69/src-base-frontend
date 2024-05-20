import { Injectable } from '@angular/core';
import { ConfirmationComponent } from 'src/shared/components/confirmation/confirmation.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class ConfirmationService {
  title = '';
  constructor(private modalService: NgbModal, private translateService: TranslateService) {
    this.translateService.get('shared.notice').subscribe(value => this.title = value);
  }

  public show(message: string): Promise<boolean>{
    const modalRef = this.modalService.open(ConfirmationComponent, { size: 'md', windowClass: 'modal-holder', backdrop: 'static'});
    modalRef.componentInstance.title = this.title;
    modalRef.componentInstance.message = message;
    return modalRef.result;
  }

}
