import prompt from "prompt";
import promptSchemaQRCODE from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";


async function createQRCODE() {
    prompt.get(promptSchemaQRCODE, handle)

    prompt.start()
}

export default createQRCODE;