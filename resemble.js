const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { dirScreenshots, screenshotsNumber, options} = config;

async function createInform(){
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    let arrayIndex = []
    if (!fs.existsSync(`./results/${datetime}`)){
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    for (var i = 1; i < screenshotsNumber; i++) {
        const data = await compareImages(
            fs.readFileSync(`${dirScreenshots}v3/${i}.png`),
            fs.readFileSync(`${dirScreenshots}v4/${i}.png`),
            options
        );
        resultInfo[i] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        arrayIndex[i -1] = i
        fs.writeFileSync(`./results/${datetime}/compare-${i}.png`, data.getBuffer());
    }
    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo, arrayIndex));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo; 

}

(async ()=>console.log(await createInform()))();

function imageRender(i, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Screenshot: ${i}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../kraken/results/v3/${i}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../kraken/results/v4/${i}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${i}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo, arrayIndex){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for Ghost</h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${arrayIndex.map((value) =>imageRender(value, resInfo[value]))}
            </div>
            <div id="visualizer">
                ${arrayIndex.map((value) =>imageRender(value, resInfo[value]))}
            </div>
        </body>
    </html>`
}