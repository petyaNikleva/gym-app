import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, officiis!"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Clases",
    description: "Amet consectetur adipisicing elit. Fugiat, officiis!"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Llor sit amet consectetur adipisicing elit. Fugiat, officiis!"
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 scroll-py-20"
  >
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
      {/* HEADRER */}
      <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>MORE THAN JUST A GYM</HText>
        <p className="my-5 text-sm">
          We understand that everyone's fitness journey is unique. Our program offers personalized workout plans and tailored nutritional guidance, ensuring that your specific needs and preferences are taken into account.
        </p>
      </motion.div>
      {/* BENEFITS */}
      <motion.div
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img
          className="mx-auto "
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
        />

        {/* DESCRIPTION */}

        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves" >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}>
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING {" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
          >
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis blanditiis veniam nostrum aspernatur, facere labore dolore, ipsa possimus assumenda eligendi repudiandae suscipit provident minus? Quisquam nulla nostrum quia perspiciatis vel!
            </p>
            <p className="mb-5">
              Ipsum dolor sit amet consectetur adipisicing elit. Quod quae suscipit iste porro eligendi architecto adipisci fuga maiores necessitatibus reiciendis!
            </p>
          </motion.div>

          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-0 before:-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>;
};

export default Benefits;
