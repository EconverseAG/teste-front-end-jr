import monitorIcon from "../assets/icons/monitor.svg";
import marketIcon from "../assets/icons/market.svg";
import whiskeyIcon from "../assets/icons/whiskey.svg";
import toolsIcon from "../assets/icons/tools.svg";
import heathIcon from "../assets/icons/heath.svg";
import runningIcon from "../assets/icons/running.svg";
import dressIcon from "../assets/icons/dress.svg";

export const categories = [
  {
    path: monitorIcon,
    name: "Tecnologia",
    isActive: true,
  },
  {
    path: marketIcon,
    name: "Supermercado",
    isActive: false,
  },
  {
    path: whiskeyIcon,
    name: "Bebidas",
    isActive: false,
  },
  {
    path: toolsIcon,
    name: "Ferramentas",
    isActive: false,
  },
  {
    path: heathIcon,
    name: "Saúde",
    isActive: false,
  },
  {
    path: runningIcon,
    name: "Esportes e Fitness",
    isActive: false,
  },
  {
    path: dressIcon,
    name: "Moda",
    isActive: false,
  },
];
