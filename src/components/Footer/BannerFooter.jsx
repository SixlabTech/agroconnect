import React from "react";

export default function BannerFooter() {
  return (
    <div className="relative flex flex-col justify-center items-center px-16 py-20 min-h-[505px] max-md:px-5 overflow-hidden">
      <img
        src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325533/Testimonialbanner_pi3fss.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center w-full max-w-[1065px] max-md:max-w-full">
        <div className="shrink-0 h-1 bg-orange-300 rounded-md w-[46px]" />
        <div className="mt-7 text-2xl font-bold leading-7 text-center text-green max-md:max-w-full">
          Découvrez les témoignages
        </div>
        <br />
        <p>Il nous accompagne dans notre mission commune de réinventer l'agriculture de demain</p>

        <div className="self-stretch mt-14  mb-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">

            <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center text-neutral-800 max-md:mt-10">
                <div />
                <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717870826/partenaires/te%CC%81le%CC%81chargement_lsn5cg.png" alt="" className=" w-[10rem]" />
                <div className="mt-5 text-lg font-semibold leading-5">
                  Digital Africa
                </div>
                <div className="self-stretch mt-5 text-sm font-light leading-5">
                  "Investir dans AgroConnect était stratégique : leur innovation agricole et impact social alignent parfaitement avec notre mission."
                  — Fatoumata Keita, Digital Adfrica
                </div>
              </div>
            </section>

            <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-center text-neutral-800 max-md:mt-10">
                <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717871361/partenaires/te%CC%81le%CC%81chargement__2_-removebg-preview_px9ukm.png" alt="" className=" w-28" />
                <div className="mt-5 text-lg font-semibold leading-5">
                  Ingenious City
                </div>
                <div className="self-stretch mt-2 text-sm font-light leading-5">

                  "Incuber AgroConnect a été un honneur. Leur plateforme révolutionne l'agriculture en connectant efficacement tous les acteurs de la chaîne de valeur pour un impact maximal."
                  — Marie Dubois, Ceo ingenious City

                </div>
              </div>
            </section>

            <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center text-neutral-800 max-md:mt-10">
                <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717871360/partenaires/te%CC%81le%CC%81chargement__1_-removebg-preview_y0p6iq.png" alt="" className=" w-[14rem] mt-2" />
                <div className="mt-5 text-lg font-semibold leading-5">
                  Kadea academy
                </div>
                <div className="self-stretch mt-5 text-sm font-light leading-5">
                  "Les compétences acquises ont directement enrichi la plateforme AgroConnect, démontrant ainsi l'efficacité de leur approche" — Thomas strovems , DG Kadea Academy
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
