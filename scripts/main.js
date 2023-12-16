const { appendFileSync, writeFileSync, readFileSync } = require("fs");

const MIDDLE_CHARACTERS = [
  { middles: ["ـا"], first: "ا" },
  { middles: ["ـبـ", "ـب"], first: "ب" },
  { middles: ["ﭙ", "ـپ"], first: "پ" },
  { middles: ["ـتـ", "ـت"], first: "ت" },
  { middles: ["ـثـ", "ـث"], first: "ث" },
  { middles: ["ـجـ", "ـج"], first: "ج" },
  { middles: ["ـچـ", "ـچ"], first: "چ" },
  { middles: ["ﺤ", "ـح"], first: "ح" },
  { middles: ["ـخـ", "ـخ"], first: "خ" },
  { middles: ["ـد"], first: "د" },
  { middles: ["ـذ"], first: "ذ" },
  { middles: ["ـر"], first: "ر" },
  { middles: ["ـز"], first: "ز" },
  { middles: ["ـژ"], first: "ژ" },
  { middles: ["ـسـ", "ـس"], first: "س" },
  { middles: ["ـشـ", "ـش"], first: "ش" },
  { middles: ["ـصـ", "ـص"], first: "ص" },
  { middles: ["ـضـ", "ـض"], first: "ض" },
  { middles: ["ـطـ", "ـط"], first: "ط" },
  { middles: ["ـظـ", "ـظ"], first: "ظ" },
  { middles: ["ـعـ", "ـع"], first: "ع" },
  { middles: ["ـغـ", "ـغ"], first: "غ" },
  { middles: ["ـفـ", "ـف"], first: "ف" },
  { middles: ["ـقـ", "ـق"], first: "ق" },
  { middles: ["ﮑ", "ـک"], first: "ک" },
  { middles: ["ـگـ", "ـگ"], first: "گ" },
  { middles: ["ـلـ", "ـل"], first: "ل" },
  { middles: ["ﻤ", "ـم"], first: "م" },
  { middles: ["ﻨ", "ـن"], first: "ن" },
  { middles: ["ـو"], first: "و" },
  { middles: ["ـهـ", "ـه"], first: "ه" },
  { middles: ["ـیـ", "ـی"], first: "ی" },
];

const data = JSON.parse(readFileSync("data.json", "utf8"));

writeFileSync("output.txt", "");

for (const datum of data) {
  const content = datum.content
    .split("\n")[1]
    .trim()
    .split(" ")
    .map((x) => {
      let firstChar = x[0];

      for (const { middles, first } of MIDDLE_CHARACTERS) {
        for (const middle of middles) {
          firstChar = firstChar.replace(middle, first);
        }
      }

      return firstChar + x.slice(1);
    })
    .join(" ");
  const code = +datum.code.replace(/"/g, "");
  const sql = `INSERT INTO wp_angle_numbers(code, content) VALUES (${code}, '${content}');`;
  appendFileSync("output.txt", sql);
}
