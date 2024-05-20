import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit {
  public message: string;
  public title: string;

  public constructor(private activeModal: NgbActiveModal) {}

  public ngOnInit(): void {}

  public onConfirm(): void {
    this.activeModal.close(true);
  }

  public onCancel(): void {
    this.activeModal.close(false);
  }

  public hideConfirm(): void {
    this.activeModal.close(false);
  }
}
