// MusicPlayer.jsx

// const tracks = [
//   { id: 'vertigo', title: 'Vertigo' },
//   { id: 'regrets', title: 'Regrets' },
//   { id: 'twisted_truth', title: 'Twisted Truth' },
//   { id: 'bad_news', title: 'Bad News (I Kill The President)' },
//   { id: 'london_calls', title: 'London Calls (Interlude)' },
// ];

export function MusicPlayer() {
  // const { currentTrackId, isPlaying, playTrack } = ArtistCard();

  return (
    <>
      <main className="flex grid-cols-2 h-20 w-3/4 rounded-2xl">
        {/* START/PAUSE BUTTON */}
        <section className=" bg-primary/40 w-1/4 rounded-2xl">
          <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9077 7.94824C13.7877 8.5833 13.7877 9.89326 12.9077 10.5283L3.05225 17.6406C1.99997 18.3998 0.530761 17.6482 0.530761 16.3506L0.530762 2.12598C0.530762 0.828475 1.99999 0.0761344 3.05225 0.83496L12.9077 7.94824Z" fill="#F5FBEE" stroke="#F5FBEE" stroke-width="1.06072"/>
          </svg>
        </section>
        {/* TRACK UI */}
        <section className="bg-secondary w-full rounded-r-2xl">
        </section>
      </main>
    </>
  );
}
