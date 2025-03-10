import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  const contacto = {};
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const salida = new ContactsController();
  const salidaArgv = parseaParams(process.argv.slice(2));
  const respuesta = salida.processOptions(salidaArgv);
  console.log(respuesta);
}

main();
