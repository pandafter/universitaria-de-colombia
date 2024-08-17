import NumberTicker from "@/components/magicui/number-ticker";

export const HeroHome = () => {
  return (
    <div className="h-full justify-center relative top-[14vh]">
      <div className="relative left-[2.5vw] bg-gray-300 w-[95vw] h-[65vh] bg-cover bg-center">
        <img 
          src="https://pandafterimages.s3.us-east-2.amazonaws.com/Panoramica_skyline_ciudad_1.webp" 
          alt="Skyline" 
          className="w-full h-full object-cover" 
          loading="eager" 
        />
        <div className="flex gap-[0.6em] justify-center">
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
        </div>
      </div>
      <div className="flex w-full justify-center content-center mt-10">
        <NumberTicker value={5} direction="up" className="text-black relative text-center text-7xl font-semibold"/> 
        <span className="text-7xl text-black font-semibold">K
          <span className="text-xl text-black">Estudiantes</span>
        </span>
        <NumberTicker value={1.5} direction="up" className="text-black relative text-center text-7xl font-semibold ml-10"/> 
        <span className="text-7xl text-black font-semibold">K
          <span className="text-xl text-black">Egresados</span>
        </span>
        <NumberTicker value={14} direction="up" className="text-black relative text-center text-7xl font-semibold ml-10"/> 
        <span className="text-7xl text-black font-semibold">
          <span className="text-xl text-black">Años</span>
        </span>
      </div>
    </div>
  );
};
