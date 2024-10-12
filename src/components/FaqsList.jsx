import React, { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqsCard = ({ faqsList, idx }) => {
  const answerElRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-3 mt-5 overflow-hidden transition-all duration-500 ease-in-out" key={idx} onClick={handleOpenAnswer}>
      <h6 className="cursor-pointer pb-2 flex items-center justify-between text-sm md:text-base lg:text-lg font-semibold text-text-green">
        {faqsList.q}
        {isOpen ? <FaChevronUp className="text-gray-500 ml-2"/> : <FaChevronDown className="text-gray-500 ml-2"/>}
      </h6>
      <div ref={answerElRef} className={`duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'} transition-all ease-in-out`}>
        <div>
          <p className="mt-2 font-thin text-xs md:text-sm lg:text-base">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqsSection = () => {
  const faqsList = [
    {
      q: "Comment puis-je m'inscrire sur agroconnect en tant que producteur, transformateur, distributeur ou consommateur ?",
      a: "Pour vous inscrire sur agroconnect, il vous suffit de visiter notre site web et de suivre les instructions d'inscription appropriées pour votre type de profil. Une fois inscrit, vous pourrez commencer à profiter des nombreux avantages qu'offre notre plateforme."
    },
    {
      q: "Quels avantages agroconnect offre-t-il aux consommateurs ?",
      a: "Pour les consommateurs, agroconnect offre la possibilité de découvrir et d'acheter des produits agricoles locaux et de saison directement auprès des producteurs ou via des canaux de distribution alternatifs. Cela favorise une consommation plus responsable et soutient les producteurs locaux."
    },
    {
      q: "Comment les distributeurs peuvent-ils bénéficier d'agroconnect ?",
      a: "Agroconnect permet aux distributeurs de trouver des fournisseurs pour répondre à la demande des consommateurs. En optimisant les flux logistiques et en réduisant les coûts liés à l'approvisionnement, agroconnect contribue à améliorer l'efficacité des opérations des distributeurs."
    },
    {
      q: "Qu'est-ce qu'agroconnect ?",
      a: "Agroconnect est une plateforme en ligne innovante qui vise à connecter tous les acteurs de la chaîne de valeur agricole. Cela inclut les producteurs, les transformateurs, les distributeurs et même les consommateurs."
    },
    {
      q: "Quel est l'objectif principal d'agroconnect ?",
      a: "L'objectif principal d'agroconnect est de faciliter les échanges commerciaux entre les différents acteurs de l'industrie agricole. Cela se fait en permettant aux producteurs de proposer leurs produits, aux transformateurs de trouver des matières premières de qualité, aux distributeurs de répondre à la demande du marché et aux consommateurs de découvrir et d'acheter des produits locaux et de saison."
    },
    {
      q: "En quoi agroconnect est-il utile pour les transformateurs ?",
      a: "Pour les transformateurs, agroconnect offre la possibilité de rechercher des matières premières de haute qualité auprès de producteurs fiables. Cela facilite l'approvisionnement en matières premières et aide à planifier la production de manière efficace."
    }
  ];

  return (
    <section className="mb-10 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center mb-15">
        <h1 className=" mb-5 mt-10 text-gray-800   text-2xl font-bold text-text-green">FAQ</h1>
        <p className="text-gray-600 max-w-lg   mx-auto text-1xl">
          Votre guide complet pour comprendre comment notre plateforme en ligne révolutionne la chaîne de valeur agricole
        </p>
        <br />
      </div>
      <div className="mt-5 text-sm font-ligh max-w-3xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faqsList={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;
