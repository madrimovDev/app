import React, { StrictMode } from 'react'
import { Test } from '@components'
import { createRoot } from 'react-dom/client'

const rootContainer = document.getElementById('root') as HTMLElement

const root = createRoot(rootContainer)

const app = (
	<StrictMode>
		<Test />
	</StrictMode>
)

root.render(app)
