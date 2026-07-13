import Navbar from "./layout/Navbar";
import artistData from "/data/artistData.json";

export default function ArtistCard() {
 return (
   <>
     <main className="min-h-screen grid plaice-items-center justify-center ">
       <section className="max-w-4xl mx-auto px-4 py-14 sm:px-6 sm:py-20 md:py-28">
         <Navbar />
       {/* ARTIST AND MUSIC DATA */}
       <section className="relative z-50 -top-8 grid grid-cols-3 bg-secondary rounded-2xl p-6 mb-3">
         <div className="">
           <img src="" alt="" />
           <div>
           <h1>Eexcklaers EP</h1>
           <p className="pb-5">Léo Patt</p>
             <div className="flex items-center gap-2 bg-primary text-secondary text-xs rounded-full px-4 py-2 w-fit">
               <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8.59204 22.5094C7.11777 20.4055 6.25049 17.8457 6.25049 15.0819C6.25049 11.5026 9.15043 8.60156 12.7276 8.60156C16.3047 8.60156 19.2046 11.5026 19.2046 15.0819" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M8.59204 22.5094C7.11777 20.4055 6.25049 17.8457 6.25049 15.0819C6.25049 11.5026 9.15043 8.60156 12.7276 8.60156C16.3047 8.60156 19.2046 11.5026 19.2046 15.0819" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M19.5554 21.5451C19.4388 21.5515 19.3243 21.5624 19.2066 21.5624C15.6294 21.5624 12.7295 18.6613 12.7295 15.082" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M19.5554 21.5451C19.4388 21.5515 19.3243 21.5624 19.2066 21.5624C15.6294 21.5624 12.7295 18.6613 12.7295 15.082" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M14.075 23.3356C11.323 21.6194 9.49016 18.565 9.49016 15.0818C9.49016 13.2922 10.9407 11.8416 12.7292 11.8416C14.5178 11.8416 15.9683 13.2922 15.9683 15.0818C15.9683 16.8715 17.4188 18.322 19.2074 18.322C20.996 18.322 22.4465 16.8715 22.4465 15.0818C22.4465 9.71286 18.096 5.36133 12.7303 5.36133C7.36461 5.36133 3.01416 9.71286 3.01416 15.0818C3.01416 16.2785 3.14809 17.4439 3.39434 18.5671" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M14.075 23.3356C11.323 21.6194 9.49016 18.565 9.49016 15.0818C9.49016 13.2922 10.9407 11.8416 12.7292 11.8416C14.5178 11.8416 15.9683 13.2922 15.9683 15.0818C15.9683 16.8715 17.4188 18.322 19.2074 18.322C20.996 18.322 22.4465 16.8715 22.4465 15.0818C22.4465 9.71286 18.096 5.36133 12.7303 5.36133C7.36461 5.36133 3.01416 9.71286 3.01416 15.0818C3.01416 16.2785 3.14809 17.4439 3.39434 18.5671" stroke="#F5FBEE" stroke-width="1.06072" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M21.7721 6.21881C19.5634 3.70985 16.334 2.12109 12.7288 2.12109C9.12361 2.12109 5.89426 3.70985 3.68555 6.21881" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M21.7721 6.21881C19.5634 3.70985 16.334 2.12109 12.7288 2.12109C9.12361 2.12109 5.89426 3.70985 3.68555 6.21881" stroke="#F5FBEE" stroke-width="2.12145" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <p className="">{artistData[0].genre}</p>
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
