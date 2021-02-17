import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuenta', url: '/cuenta', icon: 'wallet' },
    { title: 'Polizas', url: '/polizas', icon:'receipt'},
    { title: 'Transferencias', url: '/trasnferencias', icon: 'swap-horizontal' },
    { title: 'Actualizar', url: '/actualizar', icon: 'id-card' },
    { title: 'Salir', url: '/folder/Trash', icon: 'exit' },
    { title: 'Login', url: '/login', icon: 'finger-print' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
