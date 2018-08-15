/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the JSX package to generate  the
 * dynamic HTML.
 */
import * as DOM from '../source';

const link = <a href="/test">Test link.</a>;
const div = <div>{link}</div>;