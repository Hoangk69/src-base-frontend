import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HomeService } from "../service/home.service";

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private serviceHome: HomeService,
    private formBuilder: FormBuilder,
  ) {}

  myForm = this.formBuilder.group({
    accountNumber: ['', Validators.required],
    bin: ['', Validators.required],
  });

  get accountNumber() {
    return this.myForm.get('accountNumber');
  }

  get bin() {
    return this.myForm.get('bin');
  }

  async onSubmit() {
    console.log('click form');
    
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Handle form submission
    }
    await this.serviceHome.lookupBanks({
      accountNumber: this.accountNumber?.value,
      bin: this.bin?.value
    })
    console.log('hehe');
    
  }

  ngOnInit(): void {
  }
}
