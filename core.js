const puppeteer = require("puppeteer");
const { ipcRenderer } = require("electron");

class Bot {
    constructor() {
    }

    async create(){
        try{
            this.browser = await puppeteer.launch({headless: false});
            const page = await this.browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36');
            await page.goto('https://web.whatsapp.com', { waitUntil: "domcontentloaded" });
            await page.screenshot({path: 'qr.png'});
            ipcRenderer.send("load-qr");
        }
        catch (e) {
            throw(e);
        }

    }

    async close(){
        await this.browser.close();
    }

    async startInterval() {
        this.messager = setInterval( () =>{
            console.log("hola");
        }, 1000)
    }

    async stopInterval(){
        clearInterval(this.messager);
    }
}

const bot = new Bot();
module.exports = bot;