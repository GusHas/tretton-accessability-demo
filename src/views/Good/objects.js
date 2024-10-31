import Saturn from "../../assets/images/saturn.png";
import Neptune from "../../assets/images/neptune.png";
import Venus from "../../assets/images/venus.jpeg";
import safariPhoto from "../../assets/images/safari.png";
import allYearDealPhoto from "../../assets/images/all-year-deal.png";
import rocketPhoto from "../../assets/images/rocket-weekend.png";

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

export const specialOffers = [
  {
    label: "Starta vintersäsongen med raket Weekends",
    text: "Prova nya raket och utrustning från välkända leverantörer gratis! Delta i tävlingar och mycket mer.",
    link: "Se datum",
    linkFail: "Det datumet är nog lite väl avlägset",
    image: rocketPhoto,
    imageAlt: "rocket launch",
  },
  {
    label: "Skidåkarpaket på våra lodger och hotell",
    text: "Upplev rymdmagin i venus med våra exklusiva safaripaket som inkluderar bådesafari för timvis av lättillgänglig vandring. Boka idag och säkra din plats för en oförglömlig upplevelse!",
    price: "Från 200 995 SEK/person",
    button: "Se alla skidåkarpaket",
    buttonFail: "En annan dag kanske",
    image: safariPhoto,
    imageAlt: "sandy dunes",
  },
  {
    label: "Raketstart All Year",
    text: "Aktivera dig året runt i rymden. Med abonnemanget All Year, som är exklusivt för medlemmar i raket Member, kan du uppleva över 11 planeter, 50 annläggningar, safari vandringar, 100 cykelleder och en massa andra roliga aktiviteter.",
    price: "Från 835 000 SEK/månad",
    link: "Läs mer om raket All Year",
    linkFail: "Tänk va; Att åka rymdraket året om",
    image: allYearDealPhoto,
    imageAlt: "tourists covered in protective clothing from desert environment",
  },
];
