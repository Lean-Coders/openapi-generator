/* tslint:disable */
/* eslint-disable */
/**
 * Enum test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    stringEnum?: InlineObjectStringEnumEnum;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    nullableStringEnum?: string | null;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    numberEnum?: InlineObjectNumberEnumEnum;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    nullableNumberEnum?: number | null;
}


/**
 * @export
 */
export const InlineObjectStringEnumEnum = {
    One: 'one' as 'one',
    Two: 'two' as 'two',
    Three: 'three' as 'three'
};
export type InlineObjectStringEnumEnum = typeof InlineObjectStringEnumEnum[keyof typeof InlineObjectStringEnumEnum];

/**
 * @export
 */
export const InlineObjectNumberEnumEnum = {
    NUMBER_1: 1 as 1,
    NUMBER_2: 2 as 2,
    NUMBER_3: 3 as 3
};
export type InlineObjectNumberEnumEnum = typeof InlineObjectNumberEnumEnum[keyof typeof InlineObjectNumberEnumEnum];


export function InlineObjectFromJSON(json: any): InlineObject {
    return InlineObjectFromJSONTyped(json, false);
}

export function InlineObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stringEnum': !exists(json, 'string-enum') ? undefined : json['string-enum'],
        'nullableStringEnum': !exists(json, 'nullable-string-enum') ? undefined : json['nullable-string-enum'],
        'numberEnum': !exists(json, 'number-enum') ? undefined : json['number-enum'],
        'nullableNumberEnum': !exists(json, 'nullable-number-enum') ? undefined : json['nullable-number-enum'],
    };
}

export function InlineObjectToJSON(value?: InlineObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'string-enum': value.stringEnum,
        'nullable-string-enum': value.nullableStringEnum,
        'number-enum': value.numberEnum,
        'nullable-number-enum': value.nullableNumberEnum,
    };
}

