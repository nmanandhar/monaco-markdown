import {editor} from 'monaco-editor';
import {activateFormatting} from "./formatting";
import {setWordDefinitionFor, TextEditor} from "./vscode-monaco";
import {activateListEditing} from "./listEditing";

export class MonacoMarkdownExtension {
    activate(editor: editor.IStandaloneCodeEditor) {
        let textEditor = new TextEditor(editor, 'markdown')

        activateFormatting(textEditor)
        activateListEditing(textEditor)

        // Allow `*` in word pattern for quick styling
        setWordDefinitionFor('markdown',
            /(-?\d*\.\d\w*)|([^\!\@\#\%\^\&\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s\，\。\《\》\？\；\：\‘\“\’\”\（\）\【\】\、]+)/g
        );
    }
}
