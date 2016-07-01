import { Component } from '@angular/core';
import { Caracteristique } from './app.caracteristique';
import { InputDd4 } from './app.input';

@Component({
  selector: 'my-app',
  template: `<h1>Creation du héros pas-à-pas</h1>
  <p>Points en reserve {{datas.stockPoints}}</p>
  <caracteristique [title]="'Force'" [bigTitle]="'FOR'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Constitution'" [bigTitle]="'CON'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Dexterité'" [bigTitle]="'DEX'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Intelligence'" [bigTitle]="'INT'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Sagesse'" [bigTitle]="'SAG'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Charisme'" [bigTitle]="'CHA'" [character]="datas"></caracteristique>
  <input-dd4 [lbl]="'teesst'"  [character]="datas"></input-dd4>
  `,
   directives:[Caracteristique, InputDd4]
})
export class AppComponent {
    datas={'nom':'', 'FOR':5, 'CON':'3', 'DEX':6, stockPoints:10}
}
