import deepmerge from 'deepmerge';

export function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
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
export function isNumber(num) {
    return typeOf(num) == 'number';
}
export function isBoolean(obj) {
    return typeOf(obj) == 'boolean';
}
/**
 * 是否是函数
 * @param {Mix}
 * @returns {Boolean}
 */
export function isFunction(func) {
    return typeOf(func) == 'function';
}

/**
 * 是否是字符串
 * @param {Mix}
 * @returns {Boolean}
 */
export function isString(string) {
    return typeOf(string) == 'string';
}

/**
 * 是否为对象类型
 * @param {Mix}
 * @returns {Boolean}
 */
export function isObject(object) {
    return typeOf(object) == 'object';
}
/**
 * 判断目标参数是否Array对象
 * @param {Mix} 
 * @returns {boolean} 类型判断结果
 */
export function isArray(source) {
    return typeOf(source) == 'array';
}
export const isEmpty = val => val == null || !(Object.keys(val) || val).length;

export const isPromiseLike = obj =>
    obj !== null &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function';

export const extend = function (target, source) {

    if (target && source && isObject(source)) {
        for (let p in source) {
            target[p] = source[p];
        }

        let prototype_fields = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf'
        ];

        for (let j = 0, key; j < prototype_fields.length; j++) {
            key = prototype_fields[j];
            if (Object.prototype.constructor.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
export function setDevicePixelRatio(context) {
    let devicePixelRatio = window.devicePixelRatio;
    context.canvas.width = context.canvas.width * devicePixelRatio;
    context.canvas.height = context.canvas.height * devicePixelRatio;
    context.canvas.style.width = context.canvas.width / devicePixelRatio + 'px';
    context.canvas.style.height = context.canvas.height / devicePixelRatio + 'px';

    context.scale(devicePixelRatio, devicePixelRatio);
}
export function encodeHTML(source) {
    return String(source)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function detectmob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
}

export function merge() {
    let arr = Array.prototype.slice.call(arguments);
    return deepmerge.all(arr, {
        arrayMerge: function (destinationArray, sourceArray) {
            return sourceArray || [];
        }
    });
}
export function clearPushArray(a, b) {
    if (Array.isArray(b)) {
        a.splice(0, a.length);
        b.forEach(function (val) {
            a.push(val);
        });
    } else if (b != null) {
        a.splice(0, a.length, b);
    } else {
        a.splice(0, a.length);
    }
}