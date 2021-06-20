import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import storeConfig from '../globalState/store'
import 'tailwindcss/tailwind.css'

const { store, persistor } = storeConfig()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
