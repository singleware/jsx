import { Component } from '../component';
import { Properties } from '../properties';
/**
 * Provides methods to help with Text DOM.
 */
export declare class Helper {
    /**
     * Creates an element with the specified type.
     * @param type Component type or native element tag name.
     * @param properties Element properties.
     * @param children Element children.
     * @throws Throws an error when the element or component type is not supported.
     */
    static create(type: string | Component, properties: Properties, ...children: any[]): JSX.Element;
    /**
     * Appends the specified children into the given parent element. (Not supported in text mode)
     * @param parent Parent element.
     * @param children Children elements.
     * @returns Returns the parent element.
     * @throws Throws a type error when the child type is unsupported.
     */
    static append(parent: HTMLElement | ShadowRoot, ...children: any[]): HTMLElement | ShadowRoot;
    /**
     * Clear all children of the specified element. (Not supported in text mode)
     * @param element Element instance.
     * @returns Returns the cleared element instance.
     */
    static clear(element: HTMLElement | ShadowRoot): HTMLElement | ShadowRoot;
    /**
     * Determines whether the specified node is a child of the given parent element. (Not supported in text mode)
     * @param parent Parent element.
     * @param node Child node.
     * @returns Returns true when the specified node is child of the given parent, false otherwise.
     */
    static childOf(parent: HTMLElement, node: Node): boolean;
    /**
     * Gets a string with all given properties.
     * @param properties Element properties.
     * @returns Returns the element properties string.
     */
    private static getProperties;
    /**
     * Gets a string with all given children.
     * @param children Children list.
     * @returns Returns the children list string.
     * @throws Throws an error when the child type is not supported.
     */
    private static getChildren;
}
