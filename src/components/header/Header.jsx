import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../button/Button';
import Patrocinio from '../../pages/patrocinadores/Patrocinadores';

function Header() {
  return (
    <header className="flex h-28 bg-white bg-opacity-0 items-center">
      <img
        src={Logo}
        alt="Logo"
        className="h-24 ml-4 hover:rotate-3 duration-500"
      />
      <div className="flex-1 h-full flex justify-end">
        <ul className="flex gap-9 items-center mr-10">
          <li className="-rotate-0 hover:-rotate-3 duration-200">
            <a href="/" className="hover:text-white/50 duration-500 font-bold">
              Início
            </a>
          </li>
          <li className="-rotate-0 hover:-rotate-3 duration-200">
            <a href="/patrocinadores" className="hover:text-white/50 duration-500 font-bold">
              Patrocinadores
            </a>
          </li>
          <li className="-rotate-0 hover:-rotate-3 duration-200">
            <a href="/atletas" className="hover:text-white/50 duration-500 font-bold">
              Atletas
            </a>
          </li>
          <li className="-rotate-0 hover:-rotate-3 duration-200">
            <a href="/festival" className="hover:text-white/50 duration-500 font-bold">
              WC Festival
            </a>
          </li>
        </ul>
        <div className="h-full flex items-center mr-4">
          <Button
            label="Contato"
            clickHandler={() => {
              window.location.href = "/contato";
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
