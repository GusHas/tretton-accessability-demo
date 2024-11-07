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
import { useNavigate } from "react-router-dom";
import { failState } from "../../../utils/failState";

export const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top" role="navigation">
      <div className="topBar">
        <RymdresorLogo
          className="logo"
          alt="rymdresor logotype"
          role="button"
          onClick={() => navigate("/good")}
          tabIndex={0}
          aria-label="Hem"
        >
        </RymdresorLogo>
        <div className="toolBar">
          <div
            className="toolButton"
            tabIndex={0}
            role="button"
            onClick={() => failState("Du behöver inte söka, du är på rätt sida")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              failState("Du behöver inte söka, du är på rätt sida")
            }
          >
            <MagnifyingGlass className="tool" alt="Sök hemsidan" />
          </div>
          <div
            className="toolButton"
            tabIndex={0}
            role="button"
            onClick={() => failState("Avstå från shoppingen just nu")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              failState("Avstå från shoppingen just nu")
            }
          >
            <ShoppingCart className="tool" alt="Kundvagn" />
          </div>
          <button
            tabIndex={0}
            className="altButton loginButton tool"
            onClick={() => failState("Du behöver inte logga in")}
          >
            <User className="icon" weight="bold" />
            Logga In
          </button>
        </div>
      </div>
      <div className="navBar">
        <div
          className="navButton"
          tabIndex={0}
          role="button"
          onClick={() =>
            failState("Det går inte att bo på Saturnus riktigt än")
          }
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") &&
            failState("Det går inte att bo på Saturnus riktigt än")
          }
        >
          <House className="icon" weight="fill" />
          Boende
        </div>
        <div
          className="navButton"
          tabIndex={0}
          role="link"
          onClick={() => failState("Det hade varit för dyrt ändå")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") &&
            failState("Det hade varit för dyrt ändå")
          }
        >
          <Tag className="icon" weight="fill" />
          Paket
        </div>
        <div
          className="navButton"
          tabIndex={0}
          role="link"
          onClick={() => failState("Drömma kan man allt göra, om planeterna")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") &&
            failState("Drömma kan man allt göra, om planeterna")
          }
        >
          <Rocket className="icon" weight="fill" />
          Resa
        </div>
        <div
          className="navButton"
          tabIndex={0}
          role="link"
          onClick={() =>
            failState("Hade bilen ens klarat gravitationen på Venus?")
          }
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") &&
            failState("Hade bilen ens klarat gravitationen på Venus?")
          }
        >
          <Car className="icon" weight="fill" />
          Hyra
        </div>
      </div>
    </div>
  );
};
