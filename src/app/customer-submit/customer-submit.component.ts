import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../Shared/Services/data.service';
import { Customer } from '../Shared/DTOs/Models/Models';
import { APIResponseSubmitCustomerAsync } from '../Shared/DTOs/APIResponses';

@Component({
  selector: 'app-customer-submit',
  templateUrl: './customer-submit.component.html',
  styleUrls: ['./customer-submit.component.css']
})
export class CustomerSubmitComponent {
  customerForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CustomerSubmitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // Add other form controls as needed
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.customerForm.valid) {
      const newCustomer: Customer = this.customerForm.value;
      this.dataService.submitCustomerAsync(newCustomer).subscribe((response: APIResponseSubmitCustomerAsync) => {
        if (response.success) {
          // Customer added successfully
          this.dialogRef.close(true);
        } else {
          // Handle error
          console.error(response.errorMessage);
        }
      });
    }
  }

  CloseDialog(){
    this.dialogRef.close();
  }
}
