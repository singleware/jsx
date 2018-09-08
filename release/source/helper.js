"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Provides methods that helps with DOM.
 */
let Helper = class Helper {
    /**
     * Creates an element with the specified type.
     * @param type Component type or native element type.
     * @param properties Element properties.
     * @param children Element children.
     * @throws Throws a type error when the element or component type is unsupported.
     */
    static create(type, properties, ...children) {
        if (type instanceof Function) {
            return this.createFromComponent(type, properties, ...children);
        }
        else if (typeof type === 'string') {
            return this.createFromElement(type, properties, ...children);
        }
        else {
            throw new TypeError(`Unsupported element or component type "${type}"`);
        }
    }
    /**
     * Appends the specified children into the specified parent element.
     * @param parent Parent element.
     * @param children Children elements.
     * @returns Returns the parent element.
     * @throws Throws a type error when the child type is unsupported.
     */
    static append(element, ...children) {
        for (const child of children) {
            if (child instanceof Node) {
                element.appendChild(child);
            }
            else if (child instanceof NodeList || child instanceof Array) {
                this.append(element, ...child);
            }
            else if (typeof child === 'string' || typeof child === 'number') {
                this.renderer.innerHTML = child;
                this.append(element, ...this.renderer.childNodes);
            }
            else if (child) {
                const node = child.element;
                if (node instanceof Node) {
                    this.append(element, node);
                }
                else {
                    throw new TypeError(`Unsupported child type "${child}"`);
                }
            }
        }
        return element;
    }
    /**
     * Clear all children of the specified element.
     * @param element Element instance.
     * @returns Returns the cleared element instance.
     */
    static clear(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        return element;
    }
    /**
     * Creates a new component with the specified type.
     * @param type Component type.
     * @param properties Component properties.
     * @param children Component children.
     * @returns Returns the component instance.
     */
    static createFromComponent(type, properties, ...children) {
        return new type(properties, children).element;
    }
    /**
     * Creates a native element with the specified type.
     * @param type Element type.
     * @param properties Element properties.
     * @param children Element children.
     * @returns Returns the element instance.
     */
    static createFromElement(type, properties, ...children) {
        const element = document.createElement(type);
        if (properties) {
            for (const name in properties) {
                if (properties[name] !== void 0) {
                    if (name in element) {
                        element[name] = properties[name];
                    }
                    else {
                        element.setAttribute(name, properties[name]);
                    }
                }
            }
        }
        return this.append(element, ...children);
    }
};
/**
 * Renderer for temporary elements.
 */
Helper.renderer = document.createElement('body');
__decorate([
    Class.Private()
], Helper, "renderer", void 0);
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
    Class.Private()
], Helper, "createFromComponent", null);
__decorate([
    Class.Private()
], Helper, "createFromElement", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
