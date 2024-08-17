import { useState } from 'react';
import { carrerasProfesionales } from '../../../constants/CarrerasPorfesionales';
import { tecnicos } from '../../../constants/Tecnicos';
import { posgrados } from '../../../constants/Posgrados';
import { centroEstudios } from '../../../constants/CentroEstudios';

type CategoryData = string[];

export const ProgramasHome = () => {

  const [selectedButton, setSelectedButton] = useState<number>(0);


  const buttonTitles: string[] = [
    "Carreras Profesionales",
    "Programas Técnicas",   
    "Carreras de Posgrado",
    "Centro de Estudios"
  ];


  const categoryData: CategoryData[] = [
    carrerasProfesionales,
    tecnicos,
    posgrados,
    centroEstudios
  ];

  return (
    <div className="grid justify-center w-[100vw] h-full mb-44 -mt-10 ml-28">
        <h2 className="font-semibold text-5xl mb-16 ml-44">Programas Académicos</h2>
        <div className="flex gap-14 text w-full">
            <div className="grid w-full gap-10 font-semibold">
                {buttonTitles.map((title, index) => (
                  <button
                    key={index}
                    className={`w-[20vw] py-4 px-4 ${
                      selectedButton === index ? 'bg-red-600 text-white' : 'bg-white text-black'
                    }`}
                    onClick={() => setSelectedButton(index)}
                  >
                    {title}
                  </button>
                ))}
            </div>
            <div className="w-[60vw] h-full bg-white relative -left-52 -ml-28">
              <ul>
                {categoryData[selectedButton]?.map((item, idx) => (
                  <li key={idx} className="py-2 px-4 border-b">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </div>
  )
}
