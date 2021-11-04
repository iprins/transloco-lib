import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor(private readonly translocoService: TranslocoService){}

  setLang(lang: 'en' | 'es') {
    this.translocoService.setActiveLang(lang);
  }
}
