import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items = [
    { name: 'Usuário', description: 'Descrição sobre o usuário', showDescription: false },
    { name: 'Suporte', description: 'Link do zap: xxxxxxxx', showDescription: false },
  ];

  toggleDescription(item: any) {
    item.showDescription = !item.showDescription;
  }
}
