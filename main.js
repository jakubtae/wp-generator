const { removeBackground } = require("@imgly/background-removal-node");
const fs = require("fs");

const removeImageBackground = async (imgSource) => {
  const blob = await removeBackground(`assets/${imgSource}`);

  // Converting Blob to buffer
  const buffer = Buffer.from(await blob.arrayBuffer());

  // Generating data URL
  const dataURL = `data:image/png;base64,${buffer.toString("base64")}`;
  fs.writeFileSync(`output/${imgSource}.png`, dataURL.split(";base64,").pop(), {
    encoding: "base64",
  });
};

removeImageBackground("asset1.jpeg");
