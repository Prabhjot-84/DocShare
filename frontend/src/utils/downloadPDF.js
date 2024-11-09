// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';  // Use * to import all named exports

pdfMake.vfs = pdfFonts.pdfMake.vfs;


// Define styles for PDF
const styles = {
    header: { fontSize: 20, bold: true, margin: [0, 10] }, // Added margin
    subheader: { fontSize: 16.5, bold: true, margin: [0, 8] }, // Added margin
    paragraph: { fontSize: 13, margin: [0, 5] }, // Added margin for paragraphs
    listItem: { fontSize: 13 },
    blockquote: {
        fontSize: 14,
        italics: true,
        margin: [0, 10, 0, 10],
        background: '#b3ff99', // Light gray background
        padding: [5, 10], // Optional padding for better appearance
    },
    boldText: { fontSize: 13, bold: true }, // Style for bold text
    italicText: { fontSize: 13, italics: true }, // Style for italic text
};

// Function to convert HTML to pdfmake content
const parseHtmlToPdfContent = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const content = [];

    const applyBoldStyle = (text) => {
        return { text, style: 'boldText' };
    };

    const applyItalicStyle = (text) => {
        return { text, style: 'italicText' };
    };

    doc.body.childNodes.forEach((node) => {
        if (node.nodeName === 'H1') {
            content.push({ text: node.textContent, style: 'header' });
        } else if (node.nodeName === 'H2') {
            content.push({ text: node.textContent, style: 'subheader' });
        } else if (node.nodeName === 'P') {
            let paragraphContent = [];
            node.childNodes.forEach((childNode) => {
                if (childNode.nodeName === '#text') {
                    paragraphContent.push(childNode.textContent);
                } else if (childNode.nodeName === 'STRONG') {
                    paragraphContent.push(applyBoldStyle(childNode.textContent));
                } else if (childNode.nodeName === 'EM') {
                    paragraphContent.push(applyItalicStyle(childNode.textContent));
                }
            });
            content.push({ text: paragraphContent, style: 'paragraph' });
        } else if (node.nodeName === 'UL') {
            const listItems = [];
            node.childNodes.forEach((listItem) => {
                if (listItem.nodeName === 'LI') {
                    let listItemContent = [];
                    listItem.childNodes.forEach((childNode) => {
                        if (childNode.nodeName === '#text') {
                            listItemContent.push(childNode.textContent);
                        } else if (childNode.nodeName === 'STRONG') {
                            listItemContent.push(applyBoldStyle(childNode.textContent));
                        } else if (childNode.nodeName === 'EM') {
                            listItemContent.push(applyItalicStyle(childNode.textContent));
                        }
                    });
                    listItems.push({ text: listItemContent, style: 'listItem' });
                }
            });
            content.push({ ul: listItems });
        } else if (node.nodeName === 'OL') {
            const listItems = [];
            node.childNodes.forEach((listItem) => {
                if (listItem.nodeName === 'LI') {
                    let listItemContent = [];
                    listItem.childNodes.forEach((childNode) => {
                        if (childNode.nodeName === '#text') {
                            listItemContent.push(childNode.textContent);
                        } else if (childNode.nodeName === 'STRONG') {
                            listItemContent.push(applyBoldStyle(childNode.textContent));
                        } else if (childNode.nodeName === 'EM') {
                            listItemContent.push(applyItalicStyle(childNode.textContent));
                        }
                    });
                    listItems.push({ text: listItemContent, style: 'listItem' });
                }
            });
            content.push({ ol: listItems });
        } else if (node.nodeName === 'BLOCKQUOTE') {
            content.push({ text: `"${node.textContent}"`, style: 'blockquote' });
        }
    });

    return content;
};

// Function to download PDF
export const downloadPDF = (htmlContent) => {
    const docDefinition = {
        content: parseHtmlToPdfContent(htmlContent),
        styles,
    };

    pdfMake.createPdf(docDefinition).download('document.pdf');
};