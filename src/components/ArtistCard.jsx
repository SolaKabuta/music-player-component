import Navbar from "./layout/Navbar";
import artistData from "/data/artistData.json";

export default function ArtistCard() {
 return (
   <>
     <main className="bg-blue-700 min-h-screen grid plaice-items-center justify-center ">
       <section className="max-w-4xl mx-auto px-4 py-14 sm:px-6 sm:py-20 md:py-28">
         <Navbar />
       {/* ARTIST AND MUSIC DATA */}
       <section className="grid grid-cols-3 bg-white rounded-2xl p-6 mb-3">
         <div className="">
           <img src="" alt="" />
           <div>
           <h1>Eexcklaers EP</h1>
           <p className="pb-5">Léo Patt</p>
             <div>
               <img src="" alt="" />
               <p className="bg-primary text-white text-xs rounded-full p-1 py-3">{artistData[0].genre}</p>
             </div>
           </div>
         </div>
         {/* DIVIDER */}
         <div className="bg-gray-700 h-[0.5px] w-fit rotate-90"></div>
         <div></div>
         <div></div> 
       </section>
       {/* MUSIC PLAYING */}
       <section>
       </section>
       </section>
     </main>
   </>
 );
};
