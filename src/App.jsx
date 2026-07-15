import Navbar from "./components/layout/Navbar"
import ArtistCard from "./components/ArtistCard"
// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen grid place-content-center h-full justify-center">
        <Navbar />
        <ArtistCard />
        {/* <MusicPlayer />*/}
      </div>
    </>
  )
}

export default App
