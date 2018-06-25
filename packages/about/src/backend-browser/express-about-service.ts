/*
 * Copyright (C) 2017 TypeFox and others
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

import * as express from 'express';
import { injectable } from 'inversify';
import { AboutService } from '../common/about-service';

@injectable()
export class ExpressAboutService implements AboutService {

    public platformVersion(): Promise<string> {
        const app = express();
        return new Promise((resolve, _reject) => {
            resolve(`Express server mounted at: ${JSON.stringify(app.mountpath)}`);
        });
    }
}
