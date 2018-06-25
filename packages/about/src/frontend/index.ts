/*
 * Copyright (C) 2017 TypeFox and others
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

import { ContainerModule } from 'inversify'; // IoC container
import { CommandContribution, MenuContribution } from '@theia/core/lib/common'; // Theia contribution points
import { WebSocketConnectionProvider } from '@theia/core/lib/browser'; // Theia connection object
import { AboutService, aboutServicePath, aboutServiceSymbol } from '../common/about-service';
import { Contribution } from './contribution';

/*
 * Create and return a default container
 */
export default new ContainerModule(bind => {

    // Expose any about service from the backend
    bind(aboutServiceSymbol).toDynamicValue(context => {
        const provider = context.container.get(WebSocketConnectionProvider);
        return provider.createProxy<AboutService>(aboutServicePath);
    }).inSingletonScope();

    // Bind our command and menu contributions
    bind(CommandContribution).to(Contribution);
    bind(MenuContribution).to(Contribution);
});
