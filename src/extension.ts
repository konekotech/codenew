import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  const newFile = vscode.commands.registerCommand('extension.newFile', () => {
    vscode.commands.executeCommand('explorer.newFile');
  });

  const newFolder = vscode.commands.registerCommand('extension.newFolder', () => {
    vscode.commands.executeCommand('explorer.newFolder');
  });

  const showCustomPalette = vscode.commands.registerCommand('extension.showCustomPalette', async () => {
    const options: vscode.QuickPickItem[] = [
      { label: 'New File', description: '' },
      { label: 'New Folder', description: '' },
    ];

    const selection = await vscode.window.showQuickPick(options, {
      placeHolder: 'Choose an action',
    });

    if (selection) {
      if (selection.label === 'New File') {
        vscode.commands.executeCommand('extension.newFile');
      } else if (selection.label === 'New Folder') {
        vscode.commands.executeCommand('extension.newFolder');
      }
    }
  });

  context.subscriptions.push(newFile);
  context.subscriptions.push(newFolder);
  context.subscriptions.push(showCustomPalette);
}

export function deactivate() {}
