import { Pipe, PipeTransform } from '@angular/core';
import { CustomerModel } from './../../models/customer.model'

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(values: any[], filter: string): any {
    if (!values || !values.length) return [];
    if (!filter) return values;

    filter = filter.toUpperCase();

    if (filter && Array.isArray(values)) {
      const keys = Object.keys(values[0]);

      return values.filter(
        (val: CustomerModel) => val.name.toUpperCase().indexOf(filter) > -1 ||
        val.username.toUpperCase().indexOf(filter) > -1 ||
        val.email.toUpperCase().indexOf(filter) > -1 
      );
    }
  }
}

@Pipe({
  name: 'columnPipe'
})
export class ColumnPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let columnNames = [];
    for (var i = 0; i < value.length; i++) {
      for (let key in value[i]) {
        if (columnNames.indexOf(key) === -1) {
          columnNames.push(key);
        }
      }
    }
    return columnNames;
  }
}

@Pipe({
  name: 'rowPipe'
})

export class RowPipe implements PipeTransform {
  transform(value?: any, args?: any): any {
    let rowValues = Object.keys(value);
    return rowValues.map(k => value[k]);
  }
}