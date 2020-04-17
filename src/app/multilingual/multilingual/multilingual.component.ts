import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multilingual',
  templateUrl: './multilingual.component.html',
  styleUrls: ['./multilingual.component.scss']
})
export class MultilingualComponent implements OnInit {
  languages: any[] = ['en', 'hn'];
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hn']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
  }

}
