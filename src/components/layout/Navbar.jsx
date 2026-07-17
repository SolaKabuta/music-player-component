// Navbar.jsx

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, stagger, delay} from "motion/react"
import { useState } from "react";
import artistData from "/data/artistData.json";
import { bind } from "cuelume";
import { track } from "motion/react-m";

bind();

export default function Navbar({ currentTrack, onTrackChange }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollow, setIsFollowing] = useState(false);
  
  const handleTrackClick = (trackId) => {
    onTrackChange(trackId);
  };
  
 return (
   <>
     <main className="lg:w-[930.38px] bg-primary/40 backdrop-blur-2xl text-white text-sm rounded-t-2xl p-6 [&_button]:cursor-pointer">
       <AnimatePresence>
         {/* NOW PLAYING */}
        <section className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
                <div className="bg-lime-400 h-1.5 w-1.5 rounded-full animate-ping"></div>
                <p>Now playing <span className="px-2">:</span></p>
                {artistData.map((item, index) => (
                  <div key={index} >
                            <motion.p key={currentTrack} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y:0}} exit={{ opacity: 0, y: -5 }} transition={{ delay: 0.3, duration: 0.5, exit: { duration: 0.1 , delay: 0 } }}>
                      {currentTrack}
                    </motion.p>
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-4">
              {/* HORIZONTAL DOTS */}
              <button data-cuelume-press="tick" data-cuelume-release="toggle">
                <svg width="13" height="13" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7285 13.7894C13.3143 13.7894 13.7892 13.3145 13.7892 12.7287C13.7892 12.1429 13.3143 11.668 12.7285 11.668C12.1427 11.668 11.6677 12.1429 11.6677 12.7287C11.6677 13.3145 12.1427 13.7894 12.7285 13.7894Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.1535 13.7894C20.7394 13.7894 21.2143 13.3145 21.2143 12.7287C21.2143 12.1429 20.7394 11.668 20.1535 11.668C19.5677 11.668 19.0928 12.1429 19.0928 12.7287C19.0928 13.3145 19.5677 13.7894 20.1535 13.7894Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.3034 13.7894C5.88922 13.7894 6.36413 13.3145 6.36413 12.7287C6.36413 12.1429 5.88922 11.668 5.3034 11.668C4.71758 11.668 4.24268 12.1429 4.24268 12.7287C4.24268 13.3145 4.71758 13.7894 5.3034 13.7894Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              {/* EXPAND */}
              <button data-cuelume-press="tick" data-cuelume-release="release" onClick={() => setIsOpen(!isOpen)}>
                <svg width="13" height="13" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8501 10.6067L22.2752 3.18164M22.2752 9.54599V3.18164H15.9108M10.6072 14.8496L3.18213 22.2747M3.18213 15.9103L3.18213 22.2747H9.54648" stroke="#F5FBEE" stroke-width="1.06072" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
        </section>
       </AnimatePresence>
        
          <AnimatePresence>
          {/* DIVIDER*/}
          {isOpen && (
           <motion.div initial={{ opacity: 0, scaleX: 0 }}
             animate={{ opacity: 1, scaleX: 1 }}
             exit={{ opacity: 0, scaleX: 0 }}
             transition={{ duration: 0.5, ease: "easeInOut", exit: { duration: 0.1 } }} className="bg-white/20 h-0.5 w-full rounded-full my-3">
           </motion.div> 
          )}
          </AnimatePresence>

        <AnimatePresence>
        {/* PROJECT DATA DROPDOWN MENU */}
        {isOpen && (
          <motion.section initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut", exit: {duration: 0.1} }} className="flex items-center gap-6" >
            <div  className="w-[40%] h-60" >
                {/* ARTIST INFO */}
                {artistData.map((item, index) => (
                  <motion.div key={index} className="text-pretty" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ delay: 0.8, duration: 0.6, exit: { duration: 0.1 } }}>
                    <p className="uppercase font-bold text-lg pb-2">{item.artist}</p>
                    <div className="opacity-60">
                      <p className="uppercase text-xs pb-4">About <span className="px-4">:</span></p>
                      <p>{item.bio}</p>
                      <p className="text-xs py-2">Inquiries - booking <span className="px-4">:</span> </p>
                      <a href={`mailto:${item.contact}`} className="text-lime-400 hover:underline">
                        {item.contact}
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div> 
          
          {/* DIVIDER */}
          <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}  className="bg-white/20 h-50 w-0.5 rounded-full"></motion.div>
          
          {/* TRACKS DATA */}
          <motion.section className=" h-60" key={track.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.8, duration: 0.8, exit: { duration: 0.1 , delay: 0 } }}>
            {artistData.map((item, index) => (
              <div key={index} className="text-pretty">
                <div className="flex justify-between gap-16">
                  <div className="flex items-center gap-6 pb-2">
                    <p className="uppercase font-bold text-lg">{item.project}</p>
                    {/* CTAs */}
                    <div className="pt-2">
                      {/* BOOKMARK BUTTON */}
                      {isBookmarked ? (
                        <button className="group" data-cuelume-toggle='toggle' onClick={() => setIsBookmarked(false)}>
                          <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className="transition duration-500 fill-secondary group-hover:stroke-accent group-hover:fill-accent" d="M5.30371 8.27312C5.30371 6.49093 5.30371 5.59984 5.65055 4.91914C5.95563 4.32037 6.44244 3.83356 7.04121 3.52848C7.72191 3.18164 8.61301 3.18164 10.3952 3.18164H15.0624C16.8446 3.18164 17.7357 3.18164 18.4164 3.52848C19.0151 3.83356 19.5019 4.32037 19.807 4.91914C20.1539 5.59984 20.1539 6.49093 20.1539 8.27312V22.2747L12.7288 18.0318L5.30371 22.2747V8.27312Z" stroke="#F5FBEE" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </button>
                      ) : (
                        <button className="group" data-cuelume-toggle='chime' onClick={() => setIsBookmarked(true)}>
                          <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className="transition duration-500 group-hover:stroke-accent group-hover:fill-accent" d="M5.30371 8.27312C5.30371 6.49093 5.30371 5.59984 5.65055 4.91914C5.95563 4.32037 6.44244 3.83356 7.04121 3.52848C7.72191 3.18164 8.61301 3.18164 10.3952 3.18164H15.0624C16.8446 3.18164 17.7357 3.18164 18.4164 3.52848C19.0151 3.83356 19.5019 4.32037 19.807 4.91914C20.1539 5.59984 20.1539 6.49093 20.1539 8.27312V22.2747L12.7288 18.0318L5.30371 22.2747V8.27312Z" stroke="#F5FBEE" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </button> 
                        )}
                        {/* LIKE BUTTON */}
                        {isLiked ? (
                          <button className="group" data-cuelume-toggle='toggle' onClick={() => setIsLiked(false)}>
                            <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" stroke-red-500 fill-red-500" d="M17.0896 3.18164C20.8257 3.18164 23.3361 6.73772 23.3361 10.0551C23.3361 16.7735 12.9174 22.2747 12.7288 22.2747C12.5403 22.2747 2.12158 16.7735 2.12158 10.0551C2.12158 6.73772 4.63196 3.18164 8.36807 3.18164C10.5131 3.18164 11.9156 4.26756 12.7288 5.22221C13.5421 4.26756 14.9446 3.18164 17.0896 3.18164Z" stroke="#F5FBEE" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </button>
                        ) : (
                          <button className="group" data-cuelume-toggle='sparkle' onClick={() => setIsLiked(true)}>
                            <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="transition duration-500 group-hover:stroke-red-500 group-hover:fill-red-500" d="M17.0896 3.18164C20.8257 3.18164 23.3361 6.73772 23.3361 10.0551C23.3361 16.7735 12.9174 22.2747 12.7288 22.2747C12.5403 22.2747 2.12158 16.7735 2.12158 10.0551C2.12158 6.73772 4.63196 3.18164 8.36807 3.18164C10.5131 3.18164 11.9156 4.26756 12.7288 5.22221C13.5421 4.26756 14.9446 3.18164 17.0896 3.18164Z" stroke="#F5FBEE" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </button>
                        )}
                    </div>
                  </div> 
                  <div className="pt-1">
                    {/* FOLLOW BUTTON */}
                    <a data-cuelume-toggle='success' href="https://soundcloud.com/kamorange" target="_blank" className="flex items-center gap-2 uppercase text-xs border-[0.5px] border-secondary rounded-full p-1 px-3 transition duration-300 hover:bg-secondary hover:text-primary hover:border-blue-700 active:bg-blue-700 active:text-secondary group">
                      <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="transition duration-500  group-hover:stroke-blue-700 group-active:stroke-secondary" d="M12.7288 16.4407H7.95557C6.47526 16.4407 5.7351 16.4407 5.13283 16.6234C3.7768 17.0347 2.71563 18.0959 2.30428 19.4519C2.12158 20.0542 2.12158 20.7944 2.12158 22.2747M20.1539 22.2747V15.9103M16.9717 19.0925H23.3361M15.3806 7.9549C15.3806 10.5911 13.2436 12.7282 10.6074 12.7282C7.97118 12.7282 5.83412 10.5911 5.83412 7.9549C5.83412 5.3187 7.97118 3.18164 10.6074 3.18164C13.2436 3.18164 15.3806 5.3187 15.3806 7.9549Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                     {isFollow ? (
                      <p className="transition duration-500 group-hover:text-blue-700 group-active:text-secondary" onClick={() => setIsFollowing(true)}>Following</p>
                     ) : (
                      <p className="transition duration-500 group-hover:text-blue-700 group-active:text-secondary" onClick={() => setIsFollowing(false)}>Follow</p>
                     )} 
                    </a>
                  </div>
                </div>
                <div className="text-xs opacity-60">
                  <p className="uppercase text-xs pb-4">Tracks <span className="px-4">:</span></p>
                </div>
                {/* TRACKS LIST */}
                <div className="flex flex-wrap gap-2 w-80">
                {item.tracks.map((track, trackIndex) => (
                    <motion.div key={track.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 1, x: -10, duration: 0.1, delay: 0 }}
                    transition={{ delay: trackIndex * 0.3, duration: 0.5 }} className="text-xs">
                    {track.id === currentTrack ? (
                      <button className={`border border-accent bg-secondary text-primary text-sm rounded-full py-1 px-4 transition duration-300 hover:bg-secondary hover:text-black hover:-translate-y-0.5`} data-cuelume-hover="bloom" onClick={() => handleTrackClick(track.id)}>{track.id}
                      </button>
                    ) : (
                      <button className={`border border-secondary text-sm rounded-full py-1 px-4 transition duration-300 hover:bg-secondary hover:text-black hover:-translate-y-0.5`} data-cuelume-hover="bloom" onClick={() => handleTrackClick(track.id)}>{track.id} <span className="px-2">|</span>{track.duration}
                      </button>
                    )}
                    </motion.div>
                ))}
                </div>
              </div>
            ))}
          </motion.section>
        </motion.section>
         )}
         </AnimatePresence>
     </main>
   </>
 );
};
