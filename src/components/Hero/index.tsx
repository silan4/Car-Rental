import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
      const scrollTo = () => {}

    return(
        <div className="hero">
            <div className="flex-1 pt-36 padding-x max-h-[920px]">
                <h1 className="hero__title">Özgürlüğü hisset, yolculuğa başla!</h1>
                <p className="hero__subtitle text-gray-200">Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
                    kiralama deneyimini Altın seçenekleri ile taçlandırarak her anını özel kılabilirsin.
                </p>
                <CustomButton
                title="Arabaları Keşfet"
                designs="mt-16"
                handleClick={scrollTo}
                />
            </div>

            <div className="w-100 flex justify-center">
                <motion.img
                 initial={{translateX:200, scale:0.7}}
                 whileInView={{translateX:0, scale:1}}
                 transition={{duration:1}}
                 src="/hero.png" 
                 className="img-fluid object-contain"
                />
            </div>
        </div>
    )
}

export default Hero; 