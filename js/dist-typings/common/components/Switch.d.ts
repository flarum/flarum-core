/// <reference types="mithril" />
import Checkbox, { ICheckboxAttrs } from './Checkbox';
/**
 * The `Switch` component is a `Checkbox`, but with a switch display instead of
 * a tick/cross one.
 */
export default class Switch extends Checkbox {
    static initAttrs(attrs: ICheckboxAttrs): void;
    getDisplay(): import("mithril").Children;
}
