import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootContainer = document.getElementById('root') as HTMLElement

const root = createRoot(rootContainer)

const app = <StrictMode></StrictMode>

root.render(app)
