import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CEMENA-TOGO",
  description: "Médecine naturelle au Togo",
  openGraph: {
    type: 'website',
    url: 'https://www.cemena-togo.com',
    title: 'CEMENA-TOGO | Médecine naturelle au Togo',
    description: 'Découvrez la médecine naturelle et les soins naturels disponibles au Togo pour une santé meilleure.',
    images: [
      {
        url: 'https://i.ibb.co/SrqJdSg/Group-1-1.png',
        width: 1200,
        height: 630,
        alt: 'Médicaments et soins naturels au Togo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEMENA-TOGO | Soins naturels',
    description: 'Un guide complet sur les soins médicaux naturels au Togo.',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const socials = [{ icon: "facebook.png", link: "" },
  { icon: "linkedin.png", link: "" },
  ]
  return (
    <html lang="en">
      <head>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>

        <footer className="relative bg-green-950 text-white overflow-hidden">

          {/* Décoration */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
            <img src="/utils/feuille-footer.png" alt="" className="h-72 md:h-[420px]" />
          </div>
          <div className="absolute top-0 left-0 opacity-10 pointer-events-none rotate-180">
            <img src="/utils/feuille-footer.png" alt="" className="h-48 md:h-64" />
          </div>

          {/* Contenu principal */}
          <div className="relative z-10 flex justify-center px-6 pt-16 pb-10">
            <div className="max w-full grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Colonne 1 — Identité */}
              <div className="flex flex-col gap-5">
                <img src="/logo.png" alt="" className="w-20" />
                <p className="text-green-300 text-sm leading-relaxed max-w-xs">
                  Des solutions naturelles sur mesure pour améliorer votre bien-être, en combinant nature et innovation.
                </p>
                {/* Socials */}
                <div className="flex gap-3 mt-1">
                  {socials.map((element) => (
                    <a key={element.icon} href={element.link} className="h-10 w-10 rounded-xl bg-white/10 hover:bg-red-600 border border-white/10 hover:border-red-500 flex items-center justify-center">
                      <img src={`/icons/${element.icon}`} alt="" className="h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Colonne 2 — Navigation */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-semibold font-bricolage text-base uppercase tracking-widest">Navigation</h3>
                <div className="w-8 h-0.5 bg-red-500 rounded-full"></div>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    { label: "Accueil", href: "#" },
                    { label: "Services", href: "#formations" },
                    { label: "Nos produits", href: "#produits" },
                    { label: "À Propos", href: "#a-propos" },
                    { label: "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-green-300 hover:text-white text-sm flex items-center gap-2 group">
                        <span className="w-3 h-px bg-red-500 group-hover:w-5 inline-block"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne 3 — Contact */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-semibold font-bricolage text-base uppercase tracking-widest">Contact</h3>
                <div className="w-8 h-0.5 bg-red-500 rounded-full"></div>
                <div className="flex flex-col gap-4 mt-1">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <img src="/icons/phone.png" alt="" className="h-4" />
                    </div>
                    <p className="text-green-300 text-sm">+228 93 45 21 72</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <img src="/icons/map.png" alt="" className="h-4" />
                    </div>
                    <p className="text-green-300 text-sm leading-relaxed">Quartier SOS, derrière l'église AD Sinaï, route de Ketao, avant le pont.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <img src="/icons/clock.png" alt="" className="h-4" />
                    </div>
                    <div>
                      <p className="text-green-300 text-sm">Lun – Ven : <span className="text-white font-semibold">08:00 – 19:00</span></p>
                      <p className="text-green-300 text-sm">Sam – Dim : <span className="text-red-400 font-semibold">Fermé</span></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Barre copyright */}
          <div className="relative z-10 border-t border-white/10 flex justify-center px-6 py-4">
            <div className="max w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-green-400">
              <p>© {new Date().getFullYear()} CEMENA-TOGO. Tous droits réservés.</p>
              <p>Agréé · Ministère de la Santé et de l'Hygiène · 2015</p>
            </div>
          </div>

        </footer>
      </body>
    </html>
  );
}