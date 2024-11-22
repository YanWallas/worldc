import React from 'react';
import Base from '../../components/base/Base';
import qrcode from "../../assets/qrcode.png"
import insta from "../../assets/insta.jpeg"

function Contato() {
  return (
    <Base>
      <main className="h-full w-full flex flex-col justify-center items-center">
        <div className='flex bg-white bg-opacity-0 align-items: stretch gap-20'>

          <div>
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 px-[15rem] py-3 text-center text-white font-bold rounded-md mt-6 mb-4 shadow-lg">
              Escute nossa Playlist do Spotify
            </div>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/4lBV8EByVG4zikeitjXECT?utm_source=generator&theme=0"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div className='mb-8'>
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 py-3 text-center text-white font-bold rounded-md mt-6 mb-4 shadow-lg">
              Inscreva-se no YouTube
            </div>

            <iframe
              width="750" height="400" src="https://www.youtube.com/embed/Zo4cyjgOUkE?si=GcAi4hsn1KjJ0-Oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className='mt-6 mb-4 text-8xl font-extrabold tracking-wider text-[#ffffff] drop-shadow-[0_0_20px_rgba(255,20,147,0.7)]'>ENTRE EM CONTATO</div>

        <div className='flex bg-w hite mt-10 bg-opacity-0 align-items: stretch gap-20'>

          <div className='flex bg-white bg-opacity-0 align-items: stretch gap-20'>
            <div className="inset-0 flexjustify-center items-center">
              <img
                src={qrcode}
                alt="qrcode"
                className="w-[20rem] mb-14 h-auto object-contain opacity-90"
              />
            </div>

            <div>
              <div className='font-extrabold tracking-wider text-center text-[#ffffff] drop-shadow-[0_0_20px_rgba(255,20,147,0.7)]'>
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 py-3 text-center text-white font-bold rounded-md mt-4 mb-1 shadow-lg'>INSTAGRAM</div>
                <div className='flex bg-white bg-opacity-0 align-items: stretch gap-5'>
                  <div>
                    <img
                      src={insta}
                      alt="instagram"
                      className="w-[10rem] mb-10 h-auto text-center object-contain opacity-90"
                    />
                  </div>

                  <div className='text-center text-[10px] mt-14'>
                    <h1 className='mb-2'>worldcgroup</h1>
                    <p className='text-left'>🎬 Produtora de conteúdos digitais e assessorias</p>
                    <p className='text-left'>🌎 Especializadas em atletas, influencers e músicos.</p>
                    <p className='text-left'>🚀Faça parte do nosso time #WORLDC</p>
                    <p className='text-left'>#seetheworld</p>
                  </div>
                </div>
              </div>

              <div>
              <div className='bg-gradient-to-r from-pink-400 to-purple-500 py-3 text-center text-white font-bold rounded-md shadow-lg'>CONTATE-NOS POR EMAIL</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Base>
  );
}

export default Contato;