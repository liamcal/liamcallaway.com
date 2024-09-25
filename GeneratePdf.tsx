import { renderToFile } from "@react-pdf/renderer";
import { MyDocument } from "./src/resume/ResumePdf.tsx";

// console.log(JSON.stringify(import.meta.env, null, 2));
console.log(import.meta.env.BASE_URL);
await renderToFile(<MyDocument />, `${import.meta.dir}/public/my-doc.pdf`);
