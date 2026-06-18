import { Component } from '@angular/core';

@Component({
  selector: 'app-admission',
  imports: [],
  templateUrl: './admission.html',
  styleUrl: './admission.scss'
})
export class Admission {
  readyToPrint = false;

  generateApplication(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    this.readyToPrint = true;
    setTimeout(() => window.print());
  }
}
