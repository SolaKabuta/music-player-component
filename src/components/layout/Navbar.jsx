import artistData from "/data/artistData.json";

export default function Navbar() {
 return (
   <>
     <div className="flex items-center gap-2 text-xs pb-6">
        <div className="bg-lime-400 h-1.5 w-1.5 rounded-full animate-ping"></div>
        <p>Now playing :</p>
        {artistData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <p>{item.artist}</p>
          </div>
        ))}
     </div>
     {/* DIVIDER*/}
     <div className="bg-white/30 h-[0.8px] w-full rounded-full"></div> 
     <div>
       <button>
         <img src="" alt="" />
       </button>
       <button>
         <img src="" alt="" />
       </button>
     </div>
   </>
 );
};
