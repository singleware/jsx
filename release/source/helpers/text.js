"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const common_1 = require("./common");
/**
 * Provides methods to help Text DOM.
 */
let Helper = class Helper extends Class.Null {
    /**
     * Gets a string with all given properties.
     * @param properties Element properties.
     * @returns Returns the element properties string.
     */
    static getProperties(properties) {
        let list = [];
        for (const property in properties) {
            if (properties[property] !== void 0) {
                list.push(`${property.toLowerCase()}="${this.escape(properties[property])}"`);
            }
        }
        return list.join(' ');
    }
    /**
     * Gets a string with all given children.
     * @param children Children list.
     * @returns Returns the children list string.
     * @throws Throws an error when the child type is not supported.
     */
    static getChildren(children) {
        let output = '';
        for (const child of children) {
            if (typeof child === 'string' || typeof child === 'number') {
                output += child;
            }
            else if (child instanceof Array) {
                output += this.getChildren(child);
            }
            else if (child) {
                const node = child.element;
                if (node) {
                    output += this.getChildren([node]);
                }
                else {
                    throw new TypeError(`Unsupported child type "${child}"`);
                }
            }
        }
        return output;
    }
    /**
     * Decorates the specified class to be a custom element.
     * @param name Tag name.
     * @returns Returns the decorator method.
     */
    static Describe(name) {
        return (type) => {
            return type;
        };
    }
    /**
     * Creates an element with the specified type.
     * @param type Component type or native element tag name.
     * @param properties Element properties.
     * @param children Element children.
     * @throws Throws an error when the element or component type is not supported.
     */
    static create(type, properties, ...children) {
        if (type instanceof Function) {
            return new type(properties, children).element;
        }
        else if (typeof type === 'string') {
            const attributes = this.getProperties(properties);
            const content = this.getChildren(children);
            if (content.length) {
                return `<${type}${attributes.length ? ` ${attributes}` : ''}>${content}</${type}>`;
            }
            else {
                return `<${type}${attributes.length ? ` ${attributes}` : ''}/>`;
            }
        }
        else {
            throw new TypeError(`Unsupported element or component type "${type}"`);
        }
    }
    /**
     * Appends the specified children into the given parent element. (Not supported in text mode)
     * @param parent Parent element.
     * @param children Children elements.
     * @returns Returns the parent element.
     * @throws Throws a type error when the child type is unsupported.
     */
    static append(parent, ...children) {
        throw new Error(`Operation not supported in text mode.`);
    }
    /**
     * Clear all children of the specified element. (Not supported in text mode)
     * @param element Element instance.
     * @returns Returns the cleared element instance.
     */
    static clear(element) {
        throw new Error(`Operation not supported in text mode.`);
    }
    /**
     * Unwraps the specified element into its parent.
     * @param element Element instance.
     * @throws Throws an error when the specified element has no parent.
     */
    static unwrap(element) {
        throw new Error(`Operation not supported in text mode.`);
    }
    /**
     * Determines whether the specified node is a child of the given parent element. (Not supported in text mode)
     * @param parent Parent element.
     * @param node Child node.
     * @returns Returns true when the specified node is child of the given parent, false otherwise.
     */
    static childOf(parent, node) {
        throw new Error(`Operation not supported in text mode.`);
    }
    /**
     * Escape any special HTML characters in the given input string.
     * @param input Input string.
     * @returns Returns the escaped input string.
     */
    static escape(input) {
        return common_1.Common.escape(input);
    }
};
__decorate([
    Class.Private()
], Helper, "getProperties", null);
__decorate([
    Class.Private()
], Helper, "getChildren", null);
__decorate([
    Class.Public()
], Helper, "Describe", null);
__decorate([
    Class.Public()
], Helper, "create", null);
__decorate([
    Class.Public()
], Helper, "append", null);
__decorate([
    Class.Public()
], Helper, "clear", null);
__decorate([
    Class.Public()
], Helper, "unwrap", null);
__decorate([
    Class.Public()
], Helper, "childOf", null);
__decorate([
    Class.Public()
], Helper, "escape", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
