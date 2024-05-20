import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';
import { Utilities } from 'src/shared/services/utilities.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  @HostBinding('class.is-open')
  isOpen = false;
  textLoading: string;

  constructor(
    private loaderService: LoaderService,
    private common: Utilities
  ) { }

  async ngOnInit() {
    this.textLoading = await this.common.trans('other.loading');
    this.subscription = this.loaderService.isOpen
      .subscribe(async (res) => {
        if (res.text) {
          this.textLoading = res.text;
        }
        else {
          this.textLoading = await this.common.trans('other.loading');
        }
        this.isOpen = res.result;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
