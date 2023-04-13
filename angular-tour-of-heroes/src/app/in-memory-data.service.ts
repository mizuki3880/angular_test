import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      {id:12, name: 'ドクター・ストレンジ'},
      {id:13, name: 'アイアンマン'},
      {id:14, name: 'マイティー・ソー'},
      {id:15, name: 'ハルク'},
      {id:16, name: 'ヴィジョン'},
      {id:17, name: 'ホークアイ'},
      {id:18, name: 'キャプテン・アメリカ'},
      {id:19, name: 'ファルコン'},
      {id:20, name: 'スパイダーマ！'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+ 1 : 11;
  }
}
