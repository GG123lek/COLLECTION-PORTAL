import  { useState } from "react";
import "./DownloadComponent.css";
import download from "../assets/Images/download.svg";

function DownloadComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = (fileType) => {
        let filePath = '';
        switch (fileType) {
            case 'pdf':
                filePath = 'path/to/your/file.pdf';
                break;
            case 'csv':
                filePath = 'path/to/your/file.csv';
                break;
            case 'excel':
                filePath = 'path/to/your/file.xlsx';
                break;
            case 'txt':
                filePath = 'path/to/your/file.txt';
                break;
            default:
                return;
        }

        const link = document.createElement('a');
        link.href = filePath;
        link.download = `file.${fileType}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false); // Close dropdown after download
    };

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                style={{
                    background: '#00B3FE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    outline: 'none',
                    border: 'none',
                    borderRadius: '4px',
                    height: '40px', // Set a consistent height
                    padding: '0 15px', // Add padding for better spacing
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '16px', // Increase font size for better readability
                    transition: 'background 0.3s',
                    width:'100%'
                }}
            >
                <p style={{ color: 'white' }}>Download Report</p>
                <img src={download} alt='' />
            </button>
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    background: 'white',
                    border: '',
                    borderRadius: '4px',
                    marginTop: '',
                    zIndex: '1000',
                    width:'100%'
                }}>
                    <button onClick={() => handleDownload('pdf')}>Download PDF</button>
                    <button onClick={() => handleDownload('csv')}>Download CSV</button>
                    <button onClick={() => handleDownload('excel')}>Download Excel</button>
                    <button onClick={() => handleDownload('txt')}>Download TXT</button>
                </div>
            )}
        </div>
    );
}

export default DownloadComponent;
