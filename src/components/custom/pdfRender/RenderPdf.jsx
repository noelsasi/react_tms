import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { useDispatch } from 'react-redux'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { downloadThesis } from '../../pages/dashboard/slices'

export default function RenderPdf({ fileUrl, thesisId, title }) {
  const dispatch = useDispatch()
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const handleDownload = async () => {
    try {
      // Fetch the file if it's a URL
      const response = await fetch(fileUrl)
      const blob = await response.blob()

      // Create download link
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.setAttribute('download', `${title}.pdf`)

      // Trigger download
      document.body.appendChild(link)
      link.click()

      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(link.href)

      dispatch(downloadThesis(thesisId))
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mx-3">
        <h4>{title}</h4>
        <button
          onClick={handleDownload}
          style={{
            margin: '10px 0',
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Download Thesis
        </button>
      </div>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance, getFilePlugin()]}
          />
        </div>
      </Worker>
    </div>
  )
}
