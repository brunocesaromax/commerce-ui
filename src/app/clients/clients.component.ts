import { ClientsService } from '../service/clients.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Array<any>;
  client = {};

  constructor(private clientService: ClientsService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.clientService.list().subscribe(dados => 
      dados.forEach(element => {
        element.dateBirth= this.datePipe.transform(element.dateBirth, "yyyy-MM-dd");
      },
      this.clients = dados 
      ));
  }

  save() {
    this.clientService.save(this.client)
      .subscribe(() => {
        this.client = {};
        this.list();
        alert("Client created successfully.")
      });
  }

  delete(client: any) {
    this.clientService.delete(client)
      .subscribe(() => {
        this.list();
        alert("Client deleted successfully.")
      });
  }

  update(client: any) {
    this.client = client;
    client.dateBirth = this.datePipe.transform(client.dateBirth, "yyyy-MM-dd");
  }

}
