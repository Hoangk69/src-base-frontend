import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { PagerService } from './services/index';
import { AppTranslationModule } from 'src/app/app.translation.module';
@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
  ],
  declarations: [PagerComponent],
  providers: [PagerService],
  exports: [PagerComponent],
})
export class PagerModule { }
