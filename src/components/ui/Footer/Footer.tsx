import React, {Suspense} from "react";

const EmailOutlined = React.lazy(() => import('@mui/icons-material/EmailOutlined'));
const PhoneOutlined = React.lazy(() => import('@mui/icons-material/PhoneOutlined'));
const WhatsApp = React.lazy(() => import('@mui/icons-material/WhatsApp'));
const QuestionAnswerOutlined = React.lazy(() => import('@mui/icons-material/QuestionAnswerOutlined'));
const PaymentOutlined = React.lazy(() => import('@mui/icons-material/PaymentOutlined'));
const YouTube = React.lazy(() => import('@mui/icons-material/YouTube'));
const Instagram = React.lazy(() => import('@mui/icons-material/Instagram'));
const LinkedIn = React.lazy(() => import('@mui/icons-material/LinkedIn'));

export const Footer = () => {

  const iconSize = "medium"

  return (
    <Suspense>
      <footer className="w-full h-[70vh] bg-gradient-to-t from-[#002647] to-[#00080E]">
        <div className="h-[58vh] flex justify-center gap-[10vw]">
          <div className="w-[.2vw] h-[70vh] bg-white">      
          </div>
          <div className="text-white mt-10" id="info">
              <h4 className="font-semibold">Información de Contacto</h4>
              <p className="font-light"><EmailOutlined fontSize={iconSize} aria-label="EmailOutlined"/> Escribenos</p>
              <h4 className="font-semibold">Estudiantes Nuevos:</h4>
              <p className="font-light"><PhoneOutlined fontSize={iconSize} aria-label="PhoneOutlined"/> PBX (601)441-38-32</p>
              <p className="font-light"><WhatsApp fontSize={iconSize} aria-label="Whatsapp"/> Whatsapp</p>
              <h4 className="font-semibold">Procesos Administrativos:</h4>
              <p className="font-light"><PhoneOutlined fontSize={iconSize} aria-label="PhoneOutlined"/> (601) 288 - 0871, (601) 232 - 2902</p>
              <p className="font-light"><QuestionAnswerOutlined fontSize={iconSize} aria-label="QuestionAnswerOutlined"/> Preguntas Frecuentes</p>
              <br/>
              <h5 className="font-semibold text-sm">Tutelas:</h5>
              <p className="font-light text-sm">notificacionesjudicialesudc@gmail.com</p>
              <br/>
              <p className="font-light"><PaymentOutlined fontSize={iconSize} aria-label="PaymentOutlined"/> Cuentas de Pagos para matriculas</p>
          </div>
          <div className="mt-10">
              <h4 className="text-white font-semibold">Documentos IUDC</h4>
              <ul className="font-light text-neutral-400" id="documentos">
                <li>Documentos Oficiales</li>
                <li>Reglamentos</li>
                <li>Circulares</li>
                <li>Comunicados</li>
                <li>Derechos Pecuniarios</li>
                <li>Rendición de Cuentas</li>
                <li>Revistas Institucionales</li>
                <li>Manual de Etiqueta y Protocolo</li>
                <li>Derechos y Deberes</li>
                <li>Estados Financieros</li>
                <li>SG-SST</li>
              </ul>
          </div>
          <div>
            <div className="w-[.2vw] h-[70vh] bg-white"></div>
          </div>
        </div>
        <div>
        <div className="flex text-white gap-8 justify-center h-[1vh] relative -top-7 ">
                  <WhatsApp fontSize={iconSize} aria-label="Whatsapp" className="hover:text-green-500"/>
                  <YouTube fontSize={iconSize} aria-label="YouTube" className="hover:text-red-600"/>
                  <Instagram fontSize={iconSize} aria-label="Instagram" className="hover:text-pink-600"/>
                  <LinkedIn fontSize={iconSize} aria-label="LinkedIn" className="hover:text-blue-700"/>
                </div>
          <div className="flex justify-center items-end mb-8">
                <img src="https://pandafterimages.s3.us-east-2.amazonaws.com/logoUniversitaria.webp" alt='logo' className="m-5 relative top-2"/>
            </div>
        </div>

      </footer>
    </Suspense>
  )
}
