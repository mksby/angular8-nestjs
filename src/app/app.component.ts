import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from "../assets/i18n/en.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setTranslation('en', defaultLanguage);
    this.translate.setDefaultLang('en');
  }
}
