import React from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";

const DownloadPDF = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = async () => {
        alert('downloading...');

    const pdf = new jsPDF("", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // console.log(pdfWidth +'.....'+ pdfHeight)
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Certificate.pdf");
    }

    return <button className='btn btn-accent' onClick={downloadPdfDocument}>Download Pdf</button>

}

export default DownloadPDF;