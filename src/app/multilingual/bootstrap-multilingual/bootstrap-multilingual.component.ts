import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bootstrap-multilingual',
  templateUrl: './bootstrap-multilingual.component.html',
  styleUrls: ['./bootstrap-multilingual.component.scss']
})
export class BootstrapMultilingualComponent implements OnInit {

  constructor( public translate: TranslateService){
    translate.addLangs(['en', 'hn']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
  }

}
