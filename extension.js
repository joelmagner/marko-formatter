// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const prettyPrintSource = require("@marko/prettyprint").prettyPrintSource;
const assign = require("object-assign");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const Output = () => {
    const output = vscode.window.createOutputChannel("Marko Formatter");

    return (message, show) => {
      output.clear();
      output.append(message);
      if (show) {
        output.show();
      }
    };
  };

  let output = Output();
  let showOutput = (message) => {
    output(message, true);
  };

  output("Marko Formatter is now active!");

  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider("marko", {
      provideDocumentFormattingEdits: (doc) => {
        let editor = vscode.window.activeTextEditor;
        if (!editor || !editor.document) {
          return;
        }

        let range = doc.validateRange(
          new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE)
        );
        let ugly = doc.getText();
        let pretty;
        let prettyOptions = {
          filename: doc.fileName,
        };
        let config = vscode.workspace.getConfiguration("marko.formatter");
        prettyOptions = assign(prettyOptions, config);

        try {
          pretty = prettyPrintSource(ugly, prettyOptions);
        } catch (error) {
          console.error(error);
          vscode.window.showErrorMessage(
            "Marko Formatter encountered an error, see OUTPUT for details."
          );
          return showOutput(error.toString());
        }

        return editor
          .edit((e) => e.replace(range, pretty))
          .catch((error) => {
            console.log(error);
            vscode.window.showErrorMessage(
              "Marko Formatter encountered an error, see OUTPUT for details."
            );
            return showOutput(error.toString());
          });
      },
    })
  );
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
