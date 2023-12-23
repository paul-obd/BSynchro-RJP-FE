import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/Services/data.service';
import { Customer } from '../Shared/DTOs/Models/Models';
import { MatDialog } from '@angular/material/dialog';
import { CustomerViewComponent } from '../customer-view/customer-view.component';
import { CustomerSubmitComponent } from '../customer-submit/customer-submit.component';
import { InitialAccountAddComponent } from '../initial-account-add/initial-account-add.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit{
  
  customers!: Customer[];
  displayedColumns: string[] = ['customerName', 'actions'];
  constructor(private readonly dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getCustomersByEntryUserIdAdvancedAsync().subscribe(res=>{
      if(res.success == true){
        this.customers = res.data;
      }
    })
  }

  getCustomersByEntryUserIdAdvancedAsync(){
    this.dataService.getCustomersByEntryUserIdAdvancedAsync().subscribe(res=>{
      if(res.success == true){
        this.customers = res.data;
      }
    })
  }

  openCustomerViewComponentPopup(customer: Customer): void {
    const dialogRef = this.dialog.open(CustomerViewComponent, {
      width: '400px',
      data: { customer },
    });
  }

  openCustomerSubmitComponentPopup(): void {
    const dialogRef = this.dialog.open(CustomerSubmitComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Customer added successfully, refresh the customer list
        this.getCustomersByEntryUserIdAdvancedAsync();
      }
    });
  }

  openInitialAccountAddComponentPopup(customer: Customer): void {
    const dialogRef = this.dialog.open(InitialAccountAddComponent, {
      width: '400px',
      data: { customer: customer},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCustomersByEntryUserIdAdvancedAsync();
      }
    });
  }

}
