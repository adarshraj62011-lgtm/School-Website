import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  submitted = false;

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`School enquiry: ${data.get('subject') ?? ''}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name') ?? ''}\nEmail: ${data.get('email') ?? ''}\nPhone: ${data.get('phone') ?? ''}\n\n${data.get('message') ?? ''}`,
    );

    this.submitted = true;
    window.location.href = `mailto:adarshraj62011@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  }
}
