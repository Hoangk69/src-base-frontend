import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Constants } from '../models/constants';

@Pipe({
  name: 'formatDate',
})
export class formatDatePipe implements PipeTransform {
  transform(
    value: string,
    format: string = Constants.FORMAT_DATE_TIME,
  ): string {
    return value && moment(value) ? moment(value).format(format) : '';
  }
}
