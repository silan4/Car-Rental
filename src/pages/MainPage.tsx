import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import CustomFilter from "../components/CustomFilter";
import { fuels, years } from "../constants";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
    const [cars, setCars] = useState<CarType[]>([]);
    const [params, setParams] = useSearchParams();


    useEffect(() => {
        // url'deki bütün paramları alır ve obje oluşturur
        const paramsObj = Object.fromEntries(params.entries())
        fetchCars(paramsObj).then((res: CarType[]) => setCars(res))
    }, [params]);
    console.log(cars);
    return (
        <div >
            <Hero />
            <div id="catalogue" className="mt-12 padding-x padding-y max-width">
                <div className="home__text-container">
                    <h1 className="text-4xl font-ext-bold">Araba Kataloğu</h1>
                    <p>Beğenebileceğin arabaları keşfet</p>
                </div>
                {/* filtreleme alanı */}
                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <CustomFilter title="Yakıt Tipi" options={fuels} />
                        <CustomFilter title={"Yıl"} options={years} />
                    </div>
                </div>

                {
                    !cars || cars.length < 1 ? (
                        <div>
                            <h1>Üzgünüz, Herhangi Bir Sonuç Bulunamadı:/</h1>
                        </div>

                    ) : (
                        <section>
                            <div className="home__cars-wrapper">
                                {cars.map((car, i) => (
                                    <Card key={i} car={car} />
                                ))}
                            </div>
                        </section>
                    )}
                    <ShowMore/>
               </div>
        </div>
    )
}

export default MainPage;