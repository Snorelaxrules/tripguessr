import fs from "fs";
import path from "path";
import exifr from "exifr";

const folder = "./public/images";

const files = fs.readdirSync(folder);

const photos = [];

for (const file of files) {
    const gps = await exifr.gps(path.join(folder, file));

    photos.push({
        file,
        latitude: gps?.latitude,
        longitude: gps?.longitude,
    });
}

fs.writeFileSync("./src/photos.json", JSON.stringify(photos, null, 2));

console.log(photos);
