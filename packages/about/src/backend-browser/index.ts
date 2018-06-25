/*
 * Copyright (C) 2017 TypeFox and others
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

import { ContainerModule } from 'inversify'; // IoC container
import { ConnectionHandler, JsonRpcConnectionHandler } from '@theia/core/lib/common'; // Theia connection objects
import { aboutServiceSymbol, aboutServicePath } from '../common/about-service';
import { ExpressAboutService } from './express-about-service';

/*
 * Create and return a default container
 */
export default new ContainerModule(bind => {

    // Inject the concrete implementation for the about service
    bind(aboutServiceSymbol).to(ExpressAboutService).inSingletonScope();

    // Set up a new connection listening on the service path for calls to the about service
    bind(ConnectionHandler).toDynamicValue(context =>
        new JsonRpcConnectionHandler(aboutServicePath, () =>
            context.container.get(aboutServiceSymbol)
        )
    ).inSingletonScope();
});
