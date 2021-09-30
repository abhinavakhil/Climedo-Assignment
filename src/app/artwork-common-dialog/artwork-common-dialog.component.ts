import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artwork-common-dialog',
  templateUrl: './artwork-common-dialog.component.html',
  styleUrls: ['./artwork-common-dialog.component.scss'],
})
export class ArtworkCommonDialogComponent implements OnInit {
  @Input() data: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.close();
  }
}
