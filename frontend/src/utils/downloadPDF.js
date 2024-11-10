import html2pdf from 'html2pdf.js';

export const downloadPDF = (htmlContent) => {
  // Define margins for the document
  const options = {
    margin: 15, // Margin for the document
    filename: 'document.pdf', // Output file name
    image: { type: 'jpeg', quality: 0.98 }, // Image type for any images in the content
    html2canvas: { scale: 2 }, // Render at higher scale for better quality
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // PDF settings (A4 size, portrait)
  };

  // Convert HTML content to PDF and apply the options
  html2pdf()
    .from(htmlContent)
    .set(options)  // Apply options (margins, filename, etc.)
    .save(); // Trigger PDF download
};