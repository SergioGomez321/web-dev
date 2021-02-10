import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Response } from 'src/app/models/response';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact :  Contact = new Contact();
  constructor(public _MessageService: MessageService) {}

  ngOnInit(): void {}

    sendForm(){
      if(this.validateEmail(this.contact.email)){
        console.log("correo correcto");
      }

      this._MessageService.sendEmail(this.contact).subscribe((response : Response) => {
        if(response.result){
          Swal.fire('Success!', response.message, 'success');
          this.contact = new Contact();
        }
        else 
        Swal.fire('Error!', response.message, 'error');
      });
    }


    validateInput(event : KeyboardEvent) {
      console.log(event.keyCode);
      if( (event.keyCode >= 64 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)
        || event.keyCode == 190 || event.keyCode == 8 || event.keyCode == 32 || event.keyCode == 9
        || (event.keyCode >= 48 && event.keyCode <= 57))
        return true;
      else 
        return false;
      
    }


    validateEmail(value) {
      return (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value));
    }

}
