import React from 'react';
import Base from '../../components/base/Base';
import planetImage from "../../assets/PlanetImage.png"

function NotFound() {
  return <Base> 
      <main className="h-full w-full flex flex-col justify-center items-center">
        {/* Planeta explodindo */}
        <div className="inset-0 flex justify-center items-center">
          <img
            src={planetImage}
            alt="Exploding Planet"
            className="w-[15rem] h-auto object-contain opacity-90"
          />
        </div>

        {/* Título do erro */}
        <h1 className="text-[10rem] font-extrabold tracking-wider text-[#FF00FF] drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
          Error 404
        </h1>

        {/* Mensagem abaixo do erro */}
        <div className="bg-gradient-to-r from-pink-400 to-purple-500 px-[6rem] py-2 text-lg text-white font-bold rounded-md mt-4 shadow-lg">
          Page Not Found
        </div>

        {/* Botão para voltar */}
        <button className="mt-6">
          <a
            href="/"
            className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gradient-to-r from-btnPrimary1 to-btnPrimary2 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
            <span className="relative block px-8 py-3 bg-bg-gradient-to-r from-btnPrimary1 to-btnPrimary2 border border-current rounded-md">
              Go Home
            </span>
          </a>
        </button>
      </main>
  </Base>;
}

export default NotFound;
