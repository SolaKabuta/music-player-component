import { useState } from "react";
import artistData from "/data/artistData.json";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  
 return (
   <>
     <main className="  bg-primary/20 text-white rounded-2xl p-6 [&_button]:cursor-pointer">
        <section className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
                <div className="bg-lime-400 h-1.5 w-1.5 rounded-full animate-ping"></div>
                <p>Now playing :</p>
                {artistData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p>{item.artist}</p>
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-4">
              <button>
                <svg width="13" height="13" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7285 13.7894C13.3143 13.7894 13.7892 13.3145 13.7892 12.7287C13.7892 12.1429 13.3143 11.668 12.7285 11.668C12.1427 11.668 11.6677 12.1429 11.6677 12.7287C11.6677 13.3145 12.1427 13.7894 12.7285 13.7894Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.1535 13.7894C20.7394 13.7894 21.2143 13.3145 21.2143 12.7287C21.2143 12.1429 20.7394 11.668 20.1535 11.668C19.5677 11.668 19.0928 12.1429 19.0928 12.7287C19.0928 13.3145 19.5677 13.7894 20.1535 13.7894Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.3034 13.7894C5.88922 13.7894 6.36413 13.3145 6.36413 12.7287C6.36413 12.1429 5.88922 11.668 5.3034 11.668C4.71758 11.668 4.24268 12.1429 4.24268 12.7287C4.24268 13.3145 4.71758 13.7894 5.3034 13.7894Z" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg width="13" height="13" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8501 10.6067L22.2752 3.18164M22.2752 9.54599V3.18164H15.9108M10.6072 14.8496L3.18213 22.2747M3.18213 15.9103L3.18213 22.2747H9.54648" stroke="#F5FBEE" stroke-width="1.06072" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
        </section>
        {/* DIVIDER*/}
        <div className="bg-white/30 h-[0.8px] w-full rounded-full my-4"></div> 
     
        {/* PROJECT DATA DROPDOWN MENU */}
        {isOpen && (
        <section className="flex items-center gap-6 ">
          <div className="w-[40%] h-50">
              {/* ARTIST INFO */}
              {artistData.map((item, index) => (
                <div key={index} className="text-pretty">
                  <p className="uppercase font-bold pb-2">{item.artist}</p>
                  <div className="text-xs opacity-60">
                    <p className="uppercase text-xs pb-4">About <span className="px-4">:</span></p>
                    <p className="text-xs">{item.bio}</p>
                    <p className="py-2">Inquiries - booking : </p>
                    <a href={`mailto:${item.contact}`} className="text-lime-400 hover:underline">
                      {item.contact}
                    </a>
                  </div>
                </div>
              ))}
          </div> 
          {/* DIVIDER */}
          <div className="bg-white opacity-40 h-50 w-0.5 rounded-full"></div>
          {/* TRACKS IDs */}
          <div className=" h-50">
            {artistData.map((item, index) => (
              <div key={index} className="text-pretty">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="uppercase font-bold pb-2">{item.project}</p>
                    <button>
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.30371 8.27312C5.30371 6.49093 5.30371 5.59984 5.65055 4.91914C5.95563 4.32037 6.44244 3.83356 7.04121 3.52848C7.72191 3.18164 8.61301 3.18164 10.3952 3.18164H15.0624C16.8446 3.18164 17.7357 3.18164 18.4164 3.52848C19.0151 3.83356 19.5019 4.32037 19.807 4.91914C20.1539 5.59984 20.1539 6.49093 20.1539 8.27312V22.2747L12.7288 18.0318L5.30371 22.2747V8.27312Z" stroke="#F5FBEE" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <button>
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.0896 3.18164C20.8257 3.18164 23.3361 6.73772 23.3361 10.0551C23.3361 16.7735 12.9174 22.2747 12.7288 22.2747C12.5403 22.2747 2.12158 16.7735 2.12158 10.0551C2.12158 6.73772 4.63196 3.18164 8.36807 3.18164C10.5131 3.18164 11.9156 4.26756 12.7288 5.22221C13.5421 4.26756 14.9446 3.18164 17.0896 3.18164Z" stroke="#F5FBEE" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div> 
                  <div>
                    <button>Follow</button>
                  </div>
                </div>
                <div className="text-xs opacity-60">
                  <p className="uppercase text-xs pb-4">Tracks <span className="px-4">:</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}
     </main>
   </>
 );
};
