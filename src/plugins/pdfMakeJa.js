import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  GenShin: {
    normal: 'GenShinGothic-Normal-Sub.ttf',
    bold: 'GenShinGothic-Normal-Sub.ttf',
    italics: 'GenShinGothic-Normal-Sub.ttf',
    bolditalics: 'GenShinGothic-Normal-Sub.ttf',
  },
};

export default pdfMake;