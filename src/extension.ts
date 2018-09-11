import {
  commands,
  Disposable,
  ExtensionContext,
  StatusBarAlignment,
  StatusBarItem,
  TextDocument,
  ViewColumn,
  window
} from "vscode";
import * as xml2json from "xml2js";
import * as constantes from "./constantes";

export function activate(context: ExtensionContext) {
  let object = new ObjectViewer();

  let disposable = commands.registerCommand("extension.objectViewer", () => {
    object.objectViewer();
  });

  context.subscriptions.push(object);
  context.subscriptions.push(disposable);
}

class ObjectViewer {
  public objectViewer() {
    let editor = window.activeTextEditor;
    let doc = editor.document;

    let splitName = doc.fileName.split("\\");
    let nameObject = splitName[splitName.length - 1].split(".")[0];

    if (doc.languageId === "xml") {
      const panel = window.createWebviewPanel(
        "objectView",
        "Object - " + nameObject,
        ViewColumn.One,
        { enableScripts: true }
      );

      let html = this._getHTML(doc);

      panel.webview.html = html;
    }
  }

  public _getHTML(doc: TextDocument): string {
    let html;

    let docContent = doc.getText();
    xml2json.parseString(docContent, function(err, result) {
      if (err == null) {
        let fields = result.CustomObject.fields;
        let splitName = doc.fileName.split("\\");
        let nameObject = splitName[splitName.length - 1].split(".")[0];
        html = constantes.ExtensionConstants.CABECERA;

        html += constantes.ExtensionConstants.TABLA_INICIO;

        html += "<h1>" + nameObject + "</h1>";

        for (let index in fields) {
          html += "<tr>";

          if (fields[index].label != undefined)
            html += "<td>" + fields[index].label + "</td>";
          else html += "<td></td>";

          html += "<td>" + fields[index].fullName + "</td>";

          if (fields[index].type != undefined)
            html += "<td>" + fields[index].type + "</td>";
          else html += "<td></td>";

          if (fields[index].referenceTo != undefined)
            html += "<td>" + fields[index].referenceTo + "</td>";
          else html += "<td></td>";

          if (fields[index].length != undefined)
            html += "<td>" + fields[index].length + "</td>";
          else html += "<td></td>";

          if (fields[index].valueSet != undefined) {
            if (fields[index].valueSet[0].valueSetDefinition != undefined) {
              html +=
                `<td>
                    <a class="btn btn-primary" data-toggle="collapse"
          href="#valueSet` +
                index +
                `" role="button" aria-expanded="false"
          aria-controls="collapseExample"> Mostrar
                    </a>
                    <div class="collapse" id="valueSet` +
                index +
                `">
                      <div class="card card-body">`;
              html += constantes.ExtensionConstants.TABLE_PICKLIST_INICIO;
              for (let index2 in fields[index].valueSet[0].valueSetDefinition) {
                if (
                  fields[index].valueSet[0].valueSetDefinition[index2] !=
                  undefined
                ) {
                  for (let index3 in fields[index].valueSet[0]
                    .valueSetDefinition[index2].value) {
                    html += "<tr>";
                    html +=
                      "<td>" +
                      fields[index].valueSet[0].valueSetDefinition[index2]
                        .value[index3].label +
                      "</td>";
                    html +=
                      "<td>" +
                      fields[index].valueSet[0].valueSetDefinition[index2]
                        .value[index3].fullName +
                      "</td>";
                    if (
                      !fields[index].valueSet[0].valueSetDefinition[index2]
                        .value[index3].default
                    ) {
                      html += '<td><i class="far fa-check-circle"></td>';
                    } else {
                      html += '<td><i class="far fa-times-circle"></i></td>';
                    }
                    html += "</tr>";
                  }
                }
              }
              html += constantes.ExtensionConstants.TABLE_PICKLIST_FIN;
              html += `</div>
                    </div>
                  </td>`;
            } else {
              html += "<td>" + fields[index].valueSet[0].valueSetName + "</td>";
            }
          } else html += "<td></td>";

          if (fields[index].formula != undefined)
            html +=
              `<td>
                    <a class="btn btn-primary" data-toggle="collapse" href="#formulaID` +
              index +
              `" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Mostrar
                    </a>
                    
                    <div class="collapse" id="formulaID` +
              index +
              `">
                      <div class="card card-body">` +
              fields[index].formula +
              `</div>
                    </div>
                  </td>`;
          else html += "<td></td>";

          if (fields[index].required)
            html += '<td><i class="far fa-check-circle"></i></td>';
          else html += '<td><i class="far fa-times-circle"></i></td>';

          if (fields[index].unique)
            html += '<td><i class="far fa-check-circle"></i></td>';
          else html += '<td><i class="far fa-times-circle"></i></td>';

          html += "</tr>";
        }

        html += constantes.ExtensionConstants.TABLA_FIN;
      } else {
        console.log("Error parse xml --> " + err);
      }
    });

    return html;
  }

  dispose() {}
}
