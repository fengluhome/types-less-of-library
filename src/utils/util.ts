import * as deepmerge from 'deepmerge'
export function typeOf(obj: any) {
    const toString = Object.prototype.toString as any;
    const map: any = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}
export function merge(destinationArray: any, sourceArray: any) {
    let arr = Array.prototype.slice.call(arguments);
    return deepmerge.all(arr, {
        arrayMerge: function (destinationArray: any, sourceArray: any) {
            if (sourceArray.length > 0) {
                return sourceArray;
            } else {
                return destinationArray;
            }
        }
    });
}