import React from 'react';
import Base from '../../components/base/Base';

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

        <div className='mt-6 mb-4'>Entre em contato</div>

        <div className='flex bg-white bg-opacity-0 align-items: stretch gap-20'>

          <div>
            logo
          </div>

          <div>
              <div>instagram</div>
              <div>Email</div>
          </div>
  
        </div>
      </main>
    </Base>
  );
}

export default Contato;