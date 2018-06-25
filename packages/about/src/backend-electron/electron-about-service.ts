/*
 * Copyright (C) 2017 TypeFox and others
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

import { app } from 'electron';
import { injectable } from 'inversify';
import { AboutService } from '../common/about-service';

@injectable()
export class ElectronAboutService implements AboutService {

    public platformVersion(): Promise<string> {
        return new Promise((resolve, _reject) => {
            resolve(`${app.getName()}: ${process.versions.electron}`);
        });
    }
}
