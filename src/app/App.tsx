import {Suspense} from 'react';
import {MainPage} from '../pages/MainPage';
import './styles/index.scss'

function App() {

  return (
      <Suspense fallback="">
          <MainPage/>
      </Suspense>
  )
}

export default App
