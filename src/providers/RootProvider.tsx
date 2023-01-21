import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from '@store'
import { rootRouter } from '@routers'

const RootProvider = () => {
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={rootRouter} />
			</Provider>
		</>
	)
}

export default RootProvider
