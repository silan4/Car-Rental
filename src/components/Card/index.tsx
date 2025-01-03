import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import { motion } from "framer-motion";
import DetailModel from "./DetailModel";
import { useState } from "react";
import { genereteImage } from "../../utils";

type CardProps = {
    car: CarType;
}
const Card = ({ car }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="car-card group">
            {/* araba ismi */}
            <h2 className="car-card__content-title">
                {car.make} {car.model}
            </h2>
            {/* fiyat alanı */}
            <p className="flex mt-6 text-[32px]">
                <span className="text-[19px] font-semibold">₺</span>
                {Math.round(Math.random() * 500 + 500)}
                <span className="text-[14px] self-end font-medium">/gün</span>
            </p>
            {/* resim Alanı */}
            <div className="relative w-full h-40 my-3">
                <img
                    src={genereteImage(car)}                    alt="car-pic"
                    className="w-full h-full object-contain"
                />
            </div>
            {/* alt kısım */}
            <div className="relative flex w-full mt-2">
                <div className="group-hover:invisible flex justify-between w-full mt-2 text-gray">
                    <CarInfo
                        title={car.transmission === "a" ? "otomatik" : "Manuel"}
                        icon="/steering-wheel.svg"
                    />

                    <CarInfo
                        title={car.drive ? car.drive.toUpperCase() : "Belirsiz"}
                        icon="/tire.svg"
                    />

                    <CarInfo title={car.city_mpg + "" + "MPG"} icon="/gas.svg" />
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                    handleClick={() => setIsOpen(true)}
                        title="Daha Fazla"
                        designs="w-full py-[16px]"
                        rIcon="/right-arrow.svg"
                    />
                </div>
            </div>
            <DetailModel
             isOpen={isOpen}
             closeModel={() => setIsOpen(false)} 
             car={car}
            />
        </motion.div>
    )
}

export default Card;