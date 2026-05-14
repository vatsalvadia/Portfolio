const fs = require('fs');
const pdf = require('pdf-parse');

async function run() {
    let dataBuffer = fs.readFileSync('d:/Web/Portfolio/Resume_Vatsal_Vadia.pdf');
    try {
        const data = await pdf(dataBuffer);
        console.log(data.text);
    } catch (e) {
        console.error(e);
    }
}
run();
