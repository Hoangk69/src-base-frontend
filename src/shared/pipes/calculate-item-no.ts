import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateItemNo',
})
export class CalculateItemNoPipe implements PipeTransform {
  transform(value: number, searchCache: any) {
    const page = searchCache.page - 1;
    const size = searchCache.limit;
    value = value + 1;
    const itemNo = page * size + value;
    return isNaN(itemNo) ? value : itemNo;
  }
}
