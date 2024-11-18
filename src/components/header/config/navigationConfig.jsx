// navigationConfig.jsx


import { Mail, User, Heart, ShoppingCart } from "lucide-react";

export const navigationConfig = {
    mainMenu: [
      { title: "Accueil", to: "/" },
      {
        title: "Boutique en ligne",
        to: "/marketplace",
        dropdown: [
          { title: "Boutique en ligne", to: "/marketplace" },
          { title: "Pack alimentaire", to: "/offerForm" },
        ],
      },
      {
        title: "Marchés",
        dropdown: [
          { title: "Tableau de bords", to: "/calendar" },
          { title: "Prix du Maïs", to: "" },
          { title: "Prix du Manioc", to: "" },
          { title: "Prix du Sorgho", to: "" },
          { title: "Prix du Niebe", to: "" },
        ],
      },
      {
        title: "Portail",
        to: "#",
        dropdown: [
          { title: "Trouver un Angins agricole", to: "" },
          { title: "Formation et éducation", to: "" },
          { title: "Recruter un Ir Agronome", to: "" },
        ],
      },
      {
        title: "À propos de Nous",
        to: "/AboutUs",
        dropdown: [
          { title: "Notre Équipe", to: "/team" },
          { title: "Nos Partenaires", to: "" },
          { title: "Nos Valeurs", to: "ProductDetailPage" },
          { title: "Notre Vision", to: "" },
        ],
      },
    ],
    contactMenu: [
      { title: "Nous contacter", to: "/ContactPage" },
    ],
    actionItems: [
      { title: "Nous contacter", to: "/ContactPage", Icon: Mail },
      { title: "Connexion", to: "/connexion", Icon: User },
      { title: "", to: "/favoris", Icon: Heart },
      { title: "", to: "/panier", Icon: ShoppingCart }
    ]
  };
  