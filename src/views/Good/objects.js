import Saturn from "../../assets/images/saturn.png";
import Neptune from "../../assets/images/neptune.png";
import Venus from "../../assets/images/venus.jpeg";

export const packagesOffers = [
  {
    planetName: "Saturnus",
    packageName: "Jul på Saturnus",
    image: Saturn,
    inclBreakfast: true,
    dayNumber: 11,
    dates: "23 dec. - 2 jan.",
    price: "150 495",
  },
  {
    planetName: "Neptunus",
    packageName: "Sportlov på Neptunus",
    image: Neptune,
    inclBreakfast: false,
    dayNumber: 7,
    dates: "23 feb. - 2 mars",
    price: "100 505",
  },
  {
    planetName: "Venus",
    packageName: "Fira nyår på Venus",
    image: Venus,
    inclBreakfast: false,
    dayNumber: 5,
    dates: "29 dec. - 2 jan.",
    price: "99 999",
  },
];

export const holidayOffers = ["Jul och nyår", "Sportlov 2025", "Påsklov 2025"];
