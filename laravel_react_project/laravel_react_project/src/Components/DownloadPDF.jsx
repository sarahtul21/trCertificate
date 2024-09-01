import React from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";
import env from '../env';

const DownloadPDF = ({rootElementId , downloadFileName, imageName}) => {

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

    // const downloadPdfDocument = async () => {
    //     alert('downloading...');

    //     const pdf = new jsPDF("", "pt", "a4");

    //     // Load a specific image if needed
    //     const img = new Image();
    //     img.src = env.API_LINK_STORAGE + imageName; // Replace with your image URL

    //     img.onload = async function() {
    //         // Use html2canvas to capture the content of the element
    //         const canvas = await html2canvas(document.querySelector("#pdf"), {
    //             useCORS: true
    //         });

    //         const imgData = canvas.toDataURL("image/png");
    //         const pdfWidth = pdf.internal.pageSize.getWidth();
    //         const pdfHeight = pdf.internal.pageSize.getHeight();

    //         // Add the captured canvas image to the PDF
    //         pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    //         const width = '200px';
    //         const height = '200px'

    //         // Add the specific image to the PDF if needed
    //         pdf.addImage(img, "PNG", 200,200, width, height); // Set appropriate x, y, width, height

    //         // Save the PDF
    //         pdf.save("Certificate.pdf");
    //     };

    //     img.onerror = function() {
    //         console.error("Failed to load the image.");
    //     };
    // };

    return <button className='btn btn-accent' onClick={downloadPdfDocument}>Download Pdf</button>

}

export default DownloadPDF;
