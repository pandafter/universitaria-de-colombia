import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [submenuVisible, setSubmenuVisible] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleSubmenuHover = (link: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setSubmenuVisible(link);
  };

  const handleSubmenuLeave = () => {
    const id = window.setTimeout(() => {
      setSubmenuVisible(null);
    }, 90);

    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <motion.div 
      className="fixed w-full z-50 bg-gradient-to-t from-[#002647] to-[#00080E] flex items-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
      animate={{ height: isHovered ? '16vh' : '12vh' }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      <nav className="w-full flex items-center justify-center relative">
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ x: 0 }}
          animate={{ 
            x: isHovered ? '-45vw' : '-4vw',
            transition: { type: "spring", stiffness: 350, damping: 25 }
          }}
        >
        </motion.div>
          <motion.div 
            className="flex gap-5 items-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="relative left-[-10em]">
              <img src='https://pandafterimages.s3.us-east-2.amazonaws.com/logoUniversitaria.webp' alt="Logo" width={130} height={30}/>
            </Link>
            <Link to="/universidad" className="text-white font-bold py-6 px-4 flex items-center">Universidad</Link>
            <Link to="/convenios" className="text-white font-bold py-6 px-4 flex items-center">Convenios</Link>
            {['bienestar', 'programas', 'talento'].map(link => (
              <div 
                key={link}
                className="relative" 
                onMouseEnter={() => handleSubmenuHover(link)} 
                onMouseLeave={handleSubmenuLeave}
              >
                <Link to={`/${link}`} className="text-white font-bold py-6 px-4 flex items-center">
                  {link.charAt(0).toUpperCase() + link.slice(1)} 
                  <KeyboardArrowDownIcon style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
                </Link>
                {submenuVisible === link && (
                  <motion.div 
                    className="absolute top-[5.95rem] left-0 bg-white border border-gray-300 shadow-md p-2 z-10 flex flex-col"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link === 'bienestar' && (
                      <>
                        <Link to="/bienestar/enterate" className="block p-2 hover:bg-gray-200">Entérate</Link>
                        <Link to="/bienestar/pqrs" className="block p-2 hover:bg-gray-200">PQRS</Link>
                        <Link to="/bienestar/observatorio" className="block p-2 hover:bg-gray-200">Observatorio</Link>
                        <Link to="/bienestar/consultorios" className="block p-2 hover:bg-gray-200">Consultorios</Link>
                        <Link to="/bienestar/publicaciones" className="block p-2 hover:bg-gray-200">Publicaciones</Link>
                        <Link to="/bienestar/media" className="block p-2 hover:bg-gray-200">Media IUDC</Link>
                      </>
                    )}
                    {link === 'programas' && (
                      <>
                        <Link to="/programas/profesionales" className="block p-2 hover:bg-gray-200">Profesionales</Link>
                        <Link to="/programas/tecnicos" className="block p-2 hover:bg-gray-200">Técnicos</Link>
                        <Link to="/programas/posgrados" className="block p-2 hover:bg-gray-200">Posgrados</Link>
                        <Link to="/programas/bachillerato" className="block p-2 hover:bg-gray-200">Bachillerato Acelerado</Link>
                        <Link to="/programas/educacion-continua" className="block p-2 hover:bg-gray-200">Educación Continua</Link>
                      </>
                    )}
                    {link === 'talento' && (
                      <Link to="/talento-humano/entrevistas" className="block p-2 hover:bg-gray-200">Entrevistas</Link>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
            <motion.div 
              className={`relative ${isHovered ? 'rounded-lg' : 'rounded-none'} bg-gradient-to-t from-[#FFBC00] to-[#FF8800]`}
              animate={isHovered ? {borderRadius: '15px'} : {borderRadius: 0}}
              transition={{duration: 0.3}}
              onMouseEnter={() => handleSubmenuHover('estudiantes')} 
              onMouseLeave={handleSubmenuLeave}
            >
              <Link to="/estudiantes" className="text-white font-bold py-[2.05em] px-4 flex items-center">
                Estudiantes 
                <KeyboardArrowDownIcon style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
              </Link>
              {submenuVisible === 'estudiantes' && (
                <motion.div 
                  className="absolute top-[6.55rem] left-0 bg-white border border-gray-300 shadow-md p-2 z-10 flex flex-col"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php" className="block p-2 hover:bg-gray-200">Aula Virtual</Link>
                  <Link to="https://www.iudcportal.com" className="block p-2 hover:bg-gray-200">Portal Notas</Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
      </nav>
    </motion.div>
  );
};
