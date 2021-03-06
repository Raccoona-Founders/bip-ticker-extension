import ExtensionPlatform from 'Core/Extension';

const extension = ExtensionPlatform.getExtension();

export function setupContextMenu() {
    extension.contextMenus.removeAll();
    // extension.contextMenus.create({
    //     title: 'by Plark with 🚀',
    //     contexts: ['browser_action'],
    //     onclick: () => {
    //         extension.tabs.create({
    //             url: 'https://plark.io?utm_source=kuna-extention&utm_medium=context',
    //         });
    //     },
    // });

    extension.contextMenus.create({
        title: 'Source code',
        contexts: ['browser_action'],
        onclick: () => {
            extension.tabs.create({
                url: 'https://github.com/Raccoona-Crypto/bip-ticker-extension',
            });
        },
    });
}