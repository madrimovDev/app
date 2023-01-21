import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { rootRouter } from '@routers'
import { store } from '@store'

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
