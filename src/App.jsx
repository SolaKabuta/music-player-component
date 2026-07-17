

import Navbar from "./components/layout/Navbar"
import ArtistCard from "./components/ArtistCard"
import { MusicPlayer } from "./components/MusicPlayer"
import { useState } from 'react'

function App() {
  const [currentTrack, setCurrentTrack] = useState('London Calls (Interlude)'); // Id initial

  return (
    <>
      <div className="min-h-screen grid place-content-center justify-center">
        <Navbar currentTrack={currentTrack} onTrackChange={setCurrentTrack} />
        <ArtistCard />
        <MusicPlayer currentTrack={currentTrack} />
      </div>
    </>
  )
}

export default App
