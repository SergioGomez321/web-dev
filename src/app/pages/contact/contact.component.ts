import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) {
  }

  ngOnInit(): void {
  }


  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    alert("formulario enviado correctamnte")
      //swal("Formulario de contacto", "Mensaje enviado correctamente", "success");
    });
    }

}
