import { useState, useEffect, Suspense, lazy } from "react";

const NumberTicker = lazy(() => import('@/components/magicui/number-ticker'));

export const HeroHome = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageVisible, setImageVisible] = useState<boolean>(false);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        setImageVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  const handleImageLoad = () => {
    console.log("Imagen cargada");
    setImageLoaded(true);
  };

  return (
    <div className="h-full justify-center relative top-[14vh]">
      <div className="relative left-[2.5vw] bg-gray-300 w-[95vw] h-[65vh] bg-cover bg-center">
        {!imageVisible && <div className="w-full h-full bg-gray-200 animate-pulse"></div>}

        <img
          src="https://pandafterimages.s3.us-east-2.amazonaws.com/Panoramica_skyline_ciudad_1.webp"
          alt="Descripción de la imagen"
          className={`w-full h-full object-cover transition-opacity duration-500 ${imageVisible ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />

        <div className="flex gap-[0.6em] justify-center">
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
          <div className="w-[2.5em] h-[0.6em] bg-white border-[2px] border-background rounded-[15px] relative top-[0.5em] left-[0.5em]" />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};
