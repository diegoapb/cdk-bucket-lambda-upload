// export const handler = async () => {
//     console.log("hello");
//     return {
//         statusCode: 200,
//         body: JSON.stringify({
//             message: "hello",
//         }),
//     };
// }

import * as https from "https";
import * as fs from "fs";
import * as AWS from "aws-sdk";

const s3obj = new AWS.S3();
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || "";

function downloadFile(url: string, dest: string): Promise<any> {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(dest);
        console.log("created file write stream: " + dest);

        // Fetches URL using HTTP
        https.get(url, (response) => {
            // Logs downloaded file message
            console.log("downloaded file: " + url);

            // Pipes response to file
            response.pipe(file);

            // Defines callback for stream "finish" event
            file.on("finish", function () {
                // Logs wrote-to-file message
                console.log("wrote to file: " + dest);

                // Closes file stream and resolves promise
                file.close();
                resolve(null);
            });
        });
    });
}

export const handler = async () => {
    // Logs start message + S3_BUCKET_NAME
    console.log("download-file --> START");
    console.log(`writing to S3 bucket: ${S3_BUCKET_NAME}`);

    const filename = "dummy" + ".pdf";
    const filepath = "/tmp/" + filename;
    const downloadUrl =
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    const documentId = "dummyID2"+ ".pdf";

    // Logs downloadUrl
    console.log(`downloadUrl: ${downloadUrl}`);
    console.log('documentId: ' + documentId);
    console.log(`filepath: ${filepath}`);

    // Downloads file to /tmp
    await downloadFile(downloadUrl, filepath);

    s3obj
        .upload({
            Bucket: S3_BUCKET_NAME,
            Key: documentId,
            Body: fs.readFileSync(filepath),
        })
        .send((err, data) => {
            console.log(err, data);
            // Logs error
            if (err) {
                console.log(`download-file --> ERROR`);
                console.log(err);
                return;
            }
            console.log(`download-file --> SUCCESS --> ${filename}`);
        });
};
