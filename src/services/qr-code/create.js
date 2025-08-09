import prompt from "prompt";
import QRCodeprompt from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(QRCodeprompt, handle);

    prompt.start();
}

export default createQRCode;