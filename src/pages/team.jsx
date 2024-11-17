import React from "react";

export default function Team () {

    const team = [
        {
            avatar: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713098220/Team/Capture_d_e%CC%81cran_2024-03-21_a%CC%80_01.07.39_siobns.png",
            name: "Joseph Basix ",
            title: "Founder || Ir Agronome",
            desc: "En tant que fondateur, Joseph incarne la vision et l'impulsion initiale de notre projet. Sa passion et son dévouement ont donné naissance à notre initiative",
            linkedin: "https://www.linkedin.com/in/josephbasix/",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713098042/Team/assos1_ka0kdg.webp",
            name: "Myriam Kapuku",
            title: "Chargé des Relations Extérieures (RE)",
            desc: "Myriam Kapuku est notre responsable des partenariats et de la représentation externe.",
            linkedin: "",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1714760577/1692197823184_t9liwg.jpg",
            name: "Dieuleveut Ngele",
            title: "Co-founder || Fullstack web développer",
            desc: "Notre co-fondateur, également développeur fullstack, apporte une expertise technique inestimable.",
            linkedin: "https://www.linkedin.com/in/dieuleveut-ngele-767889282/",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713099490/Team/Capture_d_e%CC%81cran_2024-04-14_a%CC%80_13.57.07_pio6ln.png",
            name: "Aime Mukendi",
            title: "Marketing Digital",
            desc: "Sous la houlette de Aime, notre marketing digital est une force imparable.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1715438088/icons/WhatsApp_Image_2024-05-07_at_17.37.40_pz8h6y.jpg",
            name: "David sadahna",
            title: "Chargé de logistique",
            desc: "David assure la gestion et l'organisation opérationnelle avec une expertise.",
            linkedin: "javascript:void(0)",
            github: "javascript:void(0)"
        },
    ];

  return (
    <div>
        <section className="py-14">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[80%] mx-auto rounded-md py-10 sm:py-14 md:py-36 bg-text-green">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white leading-tight">
        Rencontrez Notre Équipe
        </h1>
        <p className="text-center mt-5 text-white">
                        Découvrez les visages derrière notre entreprise, ceux qui travaillent <br /> chaque jour pour transformer nos idées en réalité.
                    </p>
      </div>
            <div className="max-w-screen-xl mt-5 mx-auto px-4 mb-12 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray text-3xl font-semibold sm:text-4xl">
                      
                    </h3>
               
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 lg:grid-cols-2 md:grid-cols-1">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="flex flex-col items-center sm:flex-row gap-8">
                                    <div className="w-full max-w-[200px] h-60">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0 text-center sm:text-left">
                                        <h4 className="text-lg text-gray font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                                        <div className="mt-3 flex justify-center sm:justify-start gap-4 text-gray-400">
                                            <a href={item.github}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48">
                                                    <path d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" />
                                                </svg>
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48">
                                                    <path d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}
