import { Pipe, PipeTransform } from '@angular/core';

interface StringIndexedObject {
  [key: string]: any;
}

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipe implements PipeTransform {

  transform(value: StringIndexedObject): StringIndexedObject {
    debugger;
    if (!value || typeof value !== 'object') {
      return value;
    }

    const transformedObject: StringIndexedObject = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        transformedObject[key] = typeof value[key] === 'string' ? value[key].toUpperCase() : value[key].toUpperCase();
      }
    }
    return transformedObject;
  }

}
