import { renderToFile, Font } from "@react-pdf/renderer";
import { Resume } from "./src/resume/ResumePdf.tsx";

const fontLocation = `${import.meta.dir}/src/fonts/Roboto`;
Font.register({
    family: "Roboto",
    fonts: [
        {
            src: `${fontLocation}/Roboto-Regular.ttf`,
        },
        {
            src: `${fontLocation}/Roboto-Bold.ttf`,
            fontWeight: "bold",
        },
        {
            src: `${fontLocation}/Roboto-Italic.ttf`,
            fontWeight: "normal",
            fontStyle: "italic",
        },
        {
            src: `${fontLocation}/Roboto-BoldItalic.ttf`,
            fontWeight: "bold",
            fontStyle: "italic",
        },
    ],
});
Font.registerHyphenationCallback((word) => [word]);

await renderToFile(<Resume />, `${import.meta.dir}/public/resume.pdf`);
