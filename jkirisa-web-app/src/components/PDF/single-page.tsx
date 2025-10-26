import { useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

import 'src/assets/styles.css'

// import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
    cMapUrl: 'cmaps/',
    standardFontDataUrl: 'standard_fonts/',
    wasmUrl: '/wasm/',
}

export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
            <Document
                file={pdf}
                options={options}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </>
    )
}