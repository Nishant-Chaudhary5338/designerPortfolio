import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './components/HomePage'
import ImageDetail from './components/ImageDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/image/:id' element={<ImageDetail /> } />
      </Routes>
     
      
    </div>
  )
}

export default App
