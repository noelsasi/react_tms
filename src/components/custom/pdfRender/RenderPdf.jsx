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

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(new Blob([fileUrl]))
    link.setAttribute('download', `${title}.pdf`)
    link.click()
    link.remove()
    dispatch(downloadThesis(thesisId))
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
            fileUrl={
              fileUrl ||
              'https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf'
            }
            plugins={[defaultLayoutPluginInstance, getFilePlugin()]}
          />
        </div>
      </Worker>
    </div>
  )
}
