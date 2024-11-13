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
          onClick={() => navigate("/")}
          tabIndex={0}
        ></RymdresorLogo>
        <div className="toolBar">
          <a
            tabindex={0}
            onClick={() =>
              failState("Du behöver inte söka, du är på rätt sida")
            }
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === "_") &&
              failState("Du behöver inte söka, du är på rätt sida")
            }
          >
            <div className="toolButton" tabIndex={0}>
              <MagnifyingGlass className="tool"/>
            </div>
          </a>
          <a
            tabindex={0}
            onClick={() => failState("Avstå från shoppingen just nu")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === "_") &&
              failState("Avstå från shoppingen just nu")
            }
          >
            <div className="toolButton" tabIndex={0}>
              <ShoppingCart className="tool" />
            </div>
          </a>
          <a tabindex={0} onClick={() => failState("Du behöver inte logga in")}>
            <button className="altButton loginButton tool">
              <User className="icon" weight="bold" />
              Logga In
            </button>
          </a>
        </div>
      </div>
      <div className="navBar">
        <a
          tabindex={0}
          onClick={() =>
            failState("Det går inte att bo på Saturnus riktigt än")
          }
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === "_") &&
            failState("Det går inte att bo på Saturnus riktigt än")
          }
        >
          <div className="navButton" tabIndex={0}>
            <House className="icon" weight="fill" />
            Boende
          </div>
        </a>
        <a
          tabindex={0}
          onClick={() => failState("Det hade varit för dyrt ändå")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === "_") &&
            failState("Det hade varit för dyrt ändå")
          }
        >
          <div className="navButton" tabIndex={0}>
            <Tag className="icon" weight="fill" />
            Paket
          </div>
        </a>
        <a
          tabindex={0}
          onClick={() => failState("Drömma kan man allt göra, om planeterna")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === "_") &&
            failState("Drömma kan man allt göra, om planeterna")
          }
        >
          <div className="navButton" tabIndex={0}>
            <Rocket className="icon" weight="fill" />
            Resa
          </div>
        </a>
        <a
          tabindex={0}
          onClick={() =>
            failState("Hade bilen ens klarat gravitationen på Venus?")
          }
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === "_") &&
            failState("Hade bilen ens klarat gravitationen på Venus?")
          }
        >
          <div className="navButton" tabIndex={0}>
            <Car className="icon" weight="fill" />
            Hyra
          </div>
        </a>
      </div>
    </div>
  );
};
