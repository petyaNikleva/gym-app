import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

import HomePageText from "@/assets/HomePageText.png";
// import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageGraphic from "@/assets/nice-removebg-preview.png";

import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFurtune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";
import { usePageContext } from "@/context/usePageContext";

const Home = () => {
  // GymWave
   const { setSelectedPage} = usePageContext();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
    {/* Image and Main Header */}
    <motion.div 
      className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
      {/* Main Header */}
      <div className="z-10 mt-32 md:basis-3/5">
        {/* Headings */}
        <motion.div
          className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <div className="before:absolute before:-top-20 before:left-20 before:z-[-1] md:before:content-evolvetext">
              <img alt="home-page-text" src={HomePageText} />
            </div>
          </div>
          <p className="mt-8 text-sm">
            Embark on a journey to a healthier you with our cutting-edge fitness app! Whether you're a seasoned athlete or just starting, we offers personalized workouts, nutrition insights, and a supportive community to keep you engaged and excited. Elevate your fitness experience today and unleash the best version of yourself!
          </p>
        </motion.div>
        {/* Actions -> Buttons*/}

        <motion.div
          className="mt-8 flex items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ActionButton>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </motion.div>
      </div>

      {/* Image */}
      <div className="flex basic-3/5 justify-center md:z-10
      md:ml-40 md:-16 md:justify-items-end">
        <img alt="home-page-graphic" src={HomePageGraphic} />
      </div>
    </motion.div>
    {/* Sponsors */}
    {isAboveMediumScreens && (
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="redbul-sponsor" src={SponsorRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="redbul-furtune" src={SponsorFurtune} />
          </div>
        </div>
      </div>
    )}
  </section>;
};

export default Home;
