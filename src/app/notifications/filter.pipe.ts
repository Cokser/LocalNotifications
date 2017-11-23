import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFor',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(dataArray: any, searchParam: string, searchProps: any[]) {
    return (dataArray.length && searchParam) ?
      dataArray.filter((data) =>
        searchProps.map((searchProp) => {
          if (searchProp.value && searchProp.name) {
            return data[searchProp.name].toString().toUpperCase().includes(searchParam.toUpperCase());
          }
        })
          .some((res) => res)
      )
      : dataArray;
  }
}
