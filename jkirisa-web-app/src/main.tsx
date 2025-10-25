import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'src/store'
import 'src/assets/scss/index.scss'
import 'antd/dist/reset.css'
import { App } from 'src/App/App'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'public/pdf.worker.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
