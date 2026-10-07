import { CartApp } from './CartApps/CartAppUseContext/CartApp'
import { CartProviders } from './CartApps/CartAppUseContext/Providers/CartProviders'

function App() {
  return (
    <CartProviders>
      <CartApp/>
    </CartProviders>
  )
}

export default App
