import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../Shared/Services/data.service';
import { Customer } from '../Shared/DTOs/Models/Models';
import { ParamsOpenNewCurrentAccount } from '../Shared/DTOs/APIParams';

@Component({
  selector: 'app-initial-account-add',
  templateUrl: './initial-account-add.component.html',
  styleUrls: ['./initial-account-add.component.css']
})
export class InitialAccountAddComponent {
  initialCredit: number = 0;

  constructor(
    public dialogRef: MatDialogRef<InitialAccountAddComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer }
  ) {}

  onSubmit(): void {
    const param: ParamsOpenNewCurrentAccount = {
      customerId: this.data.customer.customerId,
      initialCredit: this.initialCredit,
    };

    this.dataService.openNewCurrentAccount(param).subscribe((response) => {
      if (response.success) {
        this.dialogRef.close(true);
      }
    });
  }
}
