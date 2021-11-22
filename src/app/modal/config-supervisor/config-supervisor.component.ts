import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-supervisor',
  templateUrl: './config-supervisor.component.html',
  styleUrls: ['./config-supervisor.component.scss']
})
export class ConfigSupervisorComponent implements OnInit {
  title = 'Configurações Supervisor';

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    window.alert('Fechou')
  }

}
