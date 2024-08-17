import { useState } from 'react';
import { motion } from 'framer-motion';

export const NoticiasHome = () => {
  // Estado para cada noticia
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='grid justify-center relative z-40 -mt-5'>
        <h2 className='text-center font-semibold text-5xl mb-10'>Ultimas Noticias</h2>
        <div className="flex w-full gap-20 justify-center p-6 pb-32">
            {["Etiqueta de Hover 1", "Etiqueta de Hover 2"].map((text, index) => (
                <div
                key={index}
                className="relative w-[35vw] h-[50vh] bg-neutral-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-r from-[#002647] to-[#00080E] text-white flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    backgroundPosition: hoveredIndex === index ? ['-100% 0', '100% 0'] : ['0% 0', '100% 0'],
                    transition: { duration: 0.3, ease: 'linear' }
                    }}
                    style={{
                    backgroundSize: '200% 100%',
                    backgroundRepeat: 'no-repeat',
                    }}
                >
                    {text}
                </motion.div>
                </div>
            ))}
            </div>
    </div>
    
  );
};
