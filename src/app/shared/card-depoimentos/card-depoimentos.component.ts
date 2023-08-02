import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  @Input() imagem: string = '';
  @Input() depoimento: string = '';
  @Input() nome: string = '';
}
