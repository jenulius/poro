import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EnterRoute from './routes/enter'
import Navigator from './routes/navigator'
import AppRoute from './routes/app'
import SessionRoute from './routes/session'
import activateKeystrokeListener from './lib/keystroke-listener'
import ModalPlaceholder from './components/common/ModalPlaceholder'
activateKeystrokeListener()

ReactDOM.render(
  <React.StrictMode>
    <ModalPlaceholder />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigator />}>
          <Route path='enter' element={<EnterRoute />} />
          <Route path='app' element={<AppRoute />} />
          <Route path='session' element={<SessionRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
