import { handler } from "./upload-lambda";
//import sdk

const test = handler().then(() => {
    const x = 123
    console.log("test");

})