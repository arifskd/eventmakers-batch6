import { s3Clients } from "@/utils/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile({ key, folder, body }) {
  // convert from file to Buffer
  const buffer = Buffer.from(await body.arrayBuffer());

  try {
    const fileUpload = await s3Clients.send(
      new PutObjectCommand({
        Key: `${folder}/${key}`,
        ContentType: "image/png",
        Bucket: process.env.R2_BUCKETNAME,
        Body: buffer,
      }),
    );
    console.log(fileUpload);
  } catch (error) {
    console.log(error);
  }
}
