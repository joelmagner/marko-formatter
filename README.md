<br>
<br>

## <p align="center"> Marko5 Code Formatter </P>

<br>
<br>

<div align="center">
    <img src="https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-medium-cropped.png" alt="Marko Logo" style="width:400px;"/>
</div>

<br>
<br>

## How to Use

Set as default formatter when standing on a `.marko`-file.

`CMD + SHIFT + P` -> `Format Document`

## Extension Settings

| Command                       | Description                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `marko.formatter.eol`         | The EOL sequence (defaults to require('os').EOL)                                                           |
| `marko.formatter.filename`    | The path to the template being pretty printed (required unless prettyPrintFile(filename, options) is used) |
| `marko.formatter.indent`      | The indent string (defaults to a String with four spaces)                                                  |
| `marko.formatter.noSemi`      | If set, will format JS without semicolons.                                                                 |
| `marko.formatter.singleQuote` | If set, will prefer single quotes.                                                                         |
| `marko.formatter.maxLen`      | The max line length (defaults to 80, set to -1 to disable)                                                 |
| `marko.formatter.configFiles` | Should search for .marko-prettyprint/.editorconfig files? (defaults to true)                               |
| `marko.formatter.syntax`      | The syntax to use. Can either be "html" or "concise" (defaults to "html")                                  |
