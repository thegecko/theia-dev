/*
 * Copyright (C) 2017 TypeFox and others
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

import { injectable, inject } from 'inversify'; // IoC injection decorators
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common'; // Theia contribution points and registries
import { CommonMenus } from '@theia/core/lib/browser'; // Menus to extend
import { ConfirmDialog } from '@theia/core/lib/browser/dialogs';
import { AboutService, aboutServiceSymbol } from '../common/about-service';

// Outline a label to use for the command and menu item
const label = "About Application";
// Outline an ID for the command
const commandId = "app:about";

/**
 * Class to contain the command and menu contributions
 */
@injectable()
export class Contribution implements CommandContribution, MenuContribution {

    // Inject an about service to call
    @inject(aboutServiceSymbol) protected readonly aboutService!: AboutService;

    /**
     * Register our commands
     */
    public registerCommands(registry: CommandRegistry) {
        registry.registerCommand({
            id: commandId,
            label
        }, {
            execute: () => {
                // Call the about service and display the result
                this.aboutService.platformVersion()
                .then(result => {
                    const dialog = new ConfirmDialog({
                        title: "About",
                        msg: result
                    });
                    dialog.open();
                });
            }
        });
    }

    /**
     * Register our menu items
     */
    public registerMenus(menus: MenuModelRegistry) {
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId,
            label
        });
    }
}
