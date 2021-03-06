/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
/// <reference path="./jsx.d.ts"/>

import { Properties } from './properties';

/**
 * Component interface.
 */
export interface Component extends JSX.ElementClass {
  /**
   * Default constructor.
   * @param properties Component properties.
   * @param children Component children.
   */
  new (properties?: Properties, children?: JSX.Element[]): Component;
}
