// convert-docs.js
import fs from "fs";
import path from "path";
import mammoth from "mammoth";

const inputDir = "./manuals"; // put your .docx files here
const outputDir = "./frontend/public/docs"; // static HTML output for React

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertDocs() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".docx"));

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace(/\.docx$/, ".html");
    const outputPath = path.join(outputDir, outputFile);

    try {
      const result = await mammoth.convertToHtml({ path: inputPath });
      fs.writeFileSync(outputPath, result.value, "utf8");
      console.log(`✅ Converted ${file} → ${outputFile}`);
    } catch (err) {
      console.error(`❌ Failed to convert ${file}:`, err);
    }
  }
}

convertDocs();
