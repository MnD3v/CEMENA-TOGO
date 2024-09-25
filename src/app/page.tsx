"use client"
import Services from "./components/services";
import APropos from "./components/apropos";
import Satisfaction from "./components/produits";
import Amelioration from "./components/pourquoi-nous";
import Presentation from "./components/presentation";
import Contact from "./components/contact";
import Equipe from "./components/equipe";
import FixedAppBar from "./components/fixed_app_bar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Animations from "./components/utils/item";
import Produits from "./components/produits";
import PourquoiNous from "./components/pourquoi-nous";

export default function Home() {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {

    setIsInView(false)

    return () => {

    }
  }, [])
  return (
    <div>
      {
        isInView && <div className='fixed flex flex-col items-center justify-center bg-green-700 h-full w-full'>
          <div className='loader'></div>
        </div>}
      <motion.div
        variants={Animations.opacity({ duration: 0.9 })}
        initial="hidden"
        whileInView="show"
        className="">

        <FixedAppBar></FixedAppBar>
        <Presentation></Presentation>
        <APropos></APropos>
        <Services></Services>

        <Produits></Produits>
        <PourquoiNous></PourquoiNous>
        <Contact></Contact>
        {/* <Equipe></Equipe> */}
      </motion.div>
    </div>

  );
}
