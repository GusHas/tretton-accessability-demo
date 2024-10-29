import {
  Car,
  House,
  MagnifyingGlass,
  Rocket,
  ShoppingCart,
  Tag,
} from "@phosphor-icons/react";
import { User } from "@phosphor-icons/react/dist/ssr";
import { ReactComponent as RymdresorLogo } from "../../../assets/images/Logga-Rymdresor.svg";
import "./TopBar.css";

export const TopBar = () => {
  return (
    <div className="top" role="navigation">
      <div className="topBar">
        <RymdresorLogo className="logo" alt="rymdresor logotype" role="img" />
        <div className="toolBar">
          <MagnifyingGlass className="tool" />
          <ShoppingCart className="tool" />
          <button className="altButton loginButton tool">
            <User className="icon" weight="bold" />
            Logga In
          </button>
        </div>
      </div>
      <div className="navBar">
        <div className="navButton">
          <House className="icon" weight="fill" />
          Boende
        </div>
        <div className="navButton">
          <Tag className="icon" weight="fill" />
          Paket
        </div>
        <div className="navButton">
          <Rocket className="icon" weight="fill" />
          Resa
        </div>
        <div className="navButton">
          <Car className="icon" weight="fill" />
          Hyra
        </div>
      </div>
    </div>
  );
};
