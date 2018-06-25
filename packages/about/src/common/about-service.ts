/*
 * Copyright (C) 2017 TypeFox and others
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

/**
 * The strongly-typed service interface
 */
export interface AboutService {

    /**
     * Method to get the platform version
     * @return the platform version
     */
    platformVersion(): Promise<string>;
}

/**
 * The API path to run the service over
 */
export const aboutServicePath = '/services/about';

/**
 * A unique symbol to guarantee the correct IoC object is resolved
 */
export const aboutServiceSymbol = Symbol(aboutServicePath);
