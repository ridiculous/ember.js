import {
  PropertyDidChange,
  PROPERTY_DID_CHANGE,
} from '@ember/-internals/metal/lib/property_events';
import EmberArray, { MutableArray } from '../mixins/array';
import EmberObject from './object';

interface ArrayProxy<T, C extends EmberArray<T> = EmberArray<T>> extends MutableArray<T> {
  content: C;
  arrangedContent: C;
  objectAtContent(idx: number): T | undefined;
  replaceContent(idx: number, amt: number, objects: T[]): void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare class ArrayProxy<T, C extends EmberArray<T>>
  extends EmberObject
  implements PropertyDidChange
{
  [PROPERTY_DID_CHANGE](): void;
}

export { ArrayProxy as default };
