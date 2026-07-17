// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useRef, useState, useEffect, useCallback } from 'react';

import {
  TRACK_LIST,
  titleToSlug,
  slugToTitle,
  getAudioUrl,
  getTrackIndex,
  TRACKS_BY_SLUG,
} from '../../data/trackConfig.js';

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

export function MusicPlayer({ currentTrack, setCurrentTrack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSlug = titleToSlug(currentTrack);
  const hasAudio = currentSlug && TRACKS_BY_SLUG[currentSlug];
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !hasAudio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn('Lecture bloquée par le navigateur :', err);
      setIsPlaying(false);
    }
  }, [hasAudio]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const goToTrack = useCallback(
    (direction) => {
      const index = getTrackIndex(currentTrack);
      if (index === -1) return;

      const nextIndex =
        direction === 'next'
          ? (index + 1) % TRACK_LIST.length
          : (index - 1 + TRACK_LIST.length) % TRACK_LIST.length;

      setCurrentTrack(slugToTitle(TRACK_LIST[nextIndex].slug));
    },
    [currentTrack, setCurrentTrack],
  );

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  };

  // Quand le morceau change : recharger la source et relancer la lecture
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    pause();
    setCurrentTime(0);
    setDuration(0);

    if (!hasAudio) return;

    audio.src = getAudioUrl(currentSlug);
    audio.load();
    play();
  }, [currentSlug, hasAudio, pause, play]);

  // Synchroniser l'état React avec les événements natifs de <audio>
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      goToTrack('next');
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [goToTrack]);

  return (
    <>
      <main className="flex grid-cols-2 h-15 rounded-2xl">
        <section className="flex justify-center items-center bg-primary w-1/4 rounded-l-2xl">
          <button
            type="button"
            aria-label={isPlaying ? 'Pause' : 'Lecture'}
            onClick={togglePlayPause}
            disabled={!hasAudio}
            className="disabled:opacity-40"
          >
            {isPlaying ? (
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="0" width="4" height="19" fill="#F5FBEE" />
                <rect x="10" y="0" width="4" height="19" fill="#F5FBEE" />
              </svg>
            ) : (
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9077 7.94824C13.7877 8.5833 13.7877 9.89326 12.9077 10.5283L3.05225 17.6406C1.99997 18.3998 0.530761 17.6482 0.530761 16.3506L0.530762 2.12598C0.530762 0.828475 1.99999 0.0761344 3.05225 0.83496L12.9077 7.94824Z"
                  fill="#F5FBEE"
                  stroke="#F5FBEE"
                  strokeWidth="1.06072"
                />
              </svg>
            )}
          </button>
        </section>

        <section className="flex items-center bg-secondary w-full px-3 rounded-r-2xl">
          <button
            type="button"
            aria-label="Morceau précédent"
            onClick={() => goToTrack('prev')}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.1538 17.6842C20.1538 18.8146 20.1538 19.3799 19.9221 19.6702C19.7206 19.9226 19.415 20.0695 19.0919 20.0691C18.7205 20.0687 18.2791 19.7157 17.3964 19.0095L11.2031 14.0548C10.6369 13.6018 10.3537 13.3753 10.2512 13.1017C10.1614 12.8618 10.1614 12.5974 10.2512 12.3575C10.3537 12.0838 10.6369 11.8573 11.2031 11.4043L17.3964 6.44969C18.2791 5.74352 18.7205 5.39044 19.0919 5.39004C19.415 5.38969 19.7206 5.53656 19.9221 5.78903C20.1538 6.07932 20.1538 6.64453 20.1538 7.77494L20.1538 17.6842Z"
                fill="#333232"
              />
              <path
                d="M5.30366 20.1547L5.30366 5.30451M17.3964 6.44968L11.2031 11.4043C10.6369 11.8573 10.3537 12.0838 10.2512 12.3575C10.1614 12.5974 10.1614 12.8618 10.2512 13.1017C10.3537 13.3753 10.6369 13.6018 11.2031 14.0548L17.3964 19.0095C18.2791 19.7157 18.7205 20.0687 19.0919 20.0691C19.415 20.0695 19.7206 19.9226 19.9221 19.6702C20.1538 19.3799 20.1538 18.8146 20.1538 17.6842L20.1538 7.77494C20.1538 6.64453 20.1538 6.07932 19.9221 5.78903C19.7206 5.53656 19.415 5.38969 19.0919 5.39004C18.7205 5.39044 18.2791 5.74352 17.3964 6.44968Z"
                stroke="#333232"
                strokeWidth="1.06072"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Barre de progression"
            onClick={handleSeek}
            className="bg-primary/20 w-[70%] h-5 mx-2 rounded-full overflow-hidden"
            disabled={!hasAudio}
          >
            <motion.div
              className="bg-accent h-full rounded-full pointer-events-none"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </button>

          <audio ref={audioRef} preload="metadata" />

          <button
            type="button"
            aria-label="Morceau suivant"
            onClick={() => goToTrack('next')}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.30371 7.77316C5.30371 6.64275 5.30371 6.07754 5.53543 5.78725C5.73696 5.53478 6.04255 5.38791 6.36558 5.38826C6.73702 5.38866 7.17837 5.74174 8.06108 6.4479L14.2544 11.4025C14.8206 11.8556 15.1038 12.0821 15.2063 12.3557C15.2962 12.5956 15.2962 12.86 15.2063 13.0999C15.1038 13.3736 14.8206 13.6001 14.2544 14.0531L8.06108 19.0077C7.17837 19.7139 6.73702 20.067 6.36558 20.0674C6.04255 20.0677 5.73696 19.9208 5.53543 19.6684C5.30371 19.3781 5.30371 18.8129 5.30371 17.6825V7.77316Z"
                fill="#333232"
              />
              <path
                d="M20.1539 5.30273V20.1529M8.06108 19.0077L14.2544 14.0531C14.8206 13.6001 15.1038 13.3736 15.2063 13.0999C15.2962 12.86 15.2962 12.5956 15.2063 12.3557C15.1038 12.0821 14.8206 11.8556 14.2544 11.4025L8.06108 6.4479C7.17837 5.74174 6.73702 5.38866 6.36558 5.38826C6.04255 5.38791 5.73696 5.53478 5.53543 5.78725C5.30371 6.07754 5.30371 6.64275 5.30371 7.77316V17.6825C5.30371 18.8129 5.30371 19.3781 5.53543 19.6684C5.73696 19.9208 6.04255 20.0677 6.36558 20.0674C7.17837 20.067 7.17837 19.7139 8.06108 19.0077Z"
                stroke="#333232"
                strokeWidth="1.06072"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex">
            <p className="text-primary text-md pl-4">{formatTime(currentTime)}</p>
            <span className="px-3">/</span>
            <p>{formatTime(duration)}</p>
          </div>
        </section>
      </main>
    </>
  );
}
