import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AlertModule,
  BreadcrumbModule,
  CardModule,
  CustomModalModule,
} from './components';
import { ClickOutsideModule } from 'ng-click-outside';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { AuthGuard } from './guards/auth.guard';
import { RedirectIfAuthenticatedGuard } from './guards/redirect-if-authenticated.guard';
import { LightboxModule } from 'ngx-lightbox';
import { AppTranslationModule } from 'src/app/app.translation.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './components/toast/toast.service';
import { AuthService } from '../app/auth/services/auth.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PagerModule } from './modules/pager/pager.module';
import { Utilities } from './services/utilities.service';
import { NotificationService } from './services/notification.service';
import { ConfirmationService } from './services/confirmation.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { ComboboxService } from './services/combobox.service';
import { ChangePassComponent } from 'src/app/auth/pages/change-pass/change-pass.component';
import { OnlyNumberValidatorDirective } from './directives/only-number';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { jaLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { FirstGuard } from 'src/app/first/guards/first.guard';
import { AuthMinistopService } from 'src/app/first/services/auth-from-ministop.service';
import { RoleGuard } from './guards/role.guard';
import { CalculateItemNoPipe } from './pipes/calculate-item-no';
import { AppMaxLengthDirective } from './directives/app-max-length.directive';
import { formatDatePipe } from './pipes/format-date';
import { TrimValueDirective } from './directives/trim-value.directive';
import { OnlyNumberIntergerDirective } from './directives/only-number-interger.directive';
import { CustomDatepickerDirective } from './directives/custom-datepicker.directive';
import { CustomDatepickerComponent } from './components/custom-datepicker/custom-datepicker.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
defineLocale('ja', jaLocale);

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    PagerModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    CustomModalModule,
    ClickOutsideModule,
    LightboxModule,
    AppTranslationModule,
    NgbModalModule,
    SelectModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    PagerModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    CustomModalModule,
    ClickOutsideModule,
    SpinnerComponent,
    ToastComponent,
    LoaderComponent,
    ConfirmationComponent,
    ChangePassComponent,
    OnlyNumberValidatorDirective,
    BsDatepickerModule,
    CalculateItemNoPipe,
    AppMaxLengthDirective,
    formatDatePipe,
    TrimValueDirective,
    OnlyNumberIntergerDirective,
    CustomDatepickerDirective,
  ],
  declarations: [
    SpinnerComponent,
    ToastComponent,
    LoaderComponent,
    ConfirmationComponent,
    ChangePassComponent,
    OnlyNumberValidatorDirective,
    CalculateItemNoPipe,
    AppMaxLengthDirective,
    formatDatePipe,
    TrimValueDirective,
    OnlyNumberIntergerDirective,
    CustomDatepickerDirective,
    CustomDatepickerComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    ToastService,
    AuthService,
    AuthGuard,
    FirstGuard,
    Utilities,
    NotificationService,
    ConfirmationService,
    TranslateService,
    RedirectIfAuthenticatedGuard,
    ComboboxService,
    BsLocaleService,
    AuthMinistopService,
    RoleGuard,
  ],
})
export class SharedModule {}
