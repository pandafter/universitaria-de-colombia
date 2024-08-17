import { useState } from 'react'
import imgEjm from '../../../assets/imgEjemplo1.jpg'
import { motion } from 'framer-motion'

export const PrincipalHome = () => {

    const [isHovered3, setIsHovered3] = useState<boolean>(false)
    const [isHovered4, setIsHovered4] = useState<boolean>(false)
    const [isHovered5, setIsHovered5] = useState<boolean>(false)

    const titles = ["Solicitudes", "Foro Público", "Saber PRO"];

    return (
        <div className="w-full h-[100vw] relative">
            <div className="flex gap-10 justify-center top-56 relative">
                <div className="h-[55vh] w-[38vw] bg-blue-500 flex justify-center">
                    <img src={imgEjm} alt='imgEjm1' width={1000}/>
                    <div className="absolute top-[60vh]">
                        <motion.button
                            className="relative overflow-hidden bg-gradient-to-t from-[#FFBC00] to-[#FF8800] py-3 px-16 font-semibold text-white text-lg"
                        >
                            Matriculate
                        </motion.button>
                    </div>
                </div>
                <div className="h-[55vh] w-[38vw] bg-blue-500 flex justify-center">
                    <img src={imgEjm} alt='imgEjm1' width={1000}/>
                    <div className="absolute top-[60vh]">
                        <motion.button
                            className="relative overflow-hidden bg-gradient-to-t from-[#FFBC00] to-[#FF8800] py-3 px-16 font-semibold text-white text-lg"
                        >
                            Financición y pse
                        </motion.button>
                    </div>
                </div>
            </div>
            <motion.div 
                transition={{ duration: 0.5, ease: "easeInOut" }} 
                className='w-full relative top-[65vh] px-11 gap-16 flex-col flex'
            >
                {[isHovered3, isHovered4, isHovered5].map((isHovered, index) => (
                    <motion.div
                        key={index}
                        className={`w-full h-[13vh] flex items-center relative overflow-hidden px-10 text-white text-3xl font-semibold ${!isHovered ? 'bg-gray-300' : ''}`}
                        style={{
                            backgroundImage: isHovered
                                ? "linear-gradient(to left, #FFBC00, #FF8800)"
                                : "linear-gradient(to left, #FF8800, #FF8800)"
                        }}
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '94.4vw' }}
                        onHoverStart={() => {
                            switch (index) {
                                case 0: setIsHovered3(true); break;
                                case 1: setIsHovered4(true); break;
                                case 2: setIsHovered5(true); break;
                            }
                        }}
                        onHoverEnd={() => {
                            switch (index) {
                                case 0: setIsHovered3(false); break;
                                case 1: setIsHovered4(false); break;
                                case 2: setIsHovered5(false); break;
                            }
                        }}
                        animate={{
                            backgroundImage: isHovered
                                ? "linear-gradient(to left, #FFBC00, #FF8800)"
                                : "linear-gradient(to left, #002647, #FF8800)"
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {titles[index]}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: isHovered ? '100%' : '-100%' }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-full bg-white opacity-20"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
