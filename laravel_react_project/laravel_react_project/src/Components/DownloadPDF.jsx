import React from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";
import env from '../env';

const DownloadPDF = ({rootElementId , downloadFileName, imageName}) => {

    const downloadPdfDocument = async () => {
        alert('downloading...');

    const pdf = new jsPDF("", "pt", "a4");
    const data = await html2canvas(document.querySelector('#'+rootElementId));
    const img = data.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // console.log(pdfWidth +'.....'+ pdfHeight)
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(downloadFileName);
    }

    return <button className='btn btn-primary btn-xs' onClick={downloadPdfDocument}>Pdf</button>

}

export default DownloadPDF;
