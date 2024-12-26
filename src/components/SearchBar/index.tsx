import ReactSelect from "react-select";
import { useState } from "react";
import { makes } from "../../constants";
import { useMemo } from "react";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
    styling: string;
}

const SearchButton = ({ styling }: ButtonProps) => {
    return (
        <button className={`ml-3 z-10 ${styling}`}>
            <img src="/magnifying-glass.svg" alt="" />
        </button>
    )
}


const SearchBar = () => {
    const [make, setMake] = useState<String>("");
    const [model, setModel] = useState<String>("");

    //eventlarda parametrelerin tipini kendimiz tanımlayamayız
    // reactta yerleşik olarak bulunan tipleri kullanırız
    const [params,setParams] = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //url'e make ve model parametresini ekle
        setParams({
            make:make.toLowerCase(),
            model: model.toLowerCase()
        });
    };
     

    const options: OptionType[] = useMemo(
        () =>
            makes.map((item) => ({
                label: item,
                value: item,
            })),
        [make]
    );

    return (
        <form className="searchbar gap-3" onSubmit={handleSubmit}>
            <div className="searchbar__item text-black">
                <ReactSelect
                    className="w-full"
                    options={options}
                    onChange={(e) => e && setMake(e.value)}
                />
                <SearchButton styling="sm:hidden" />
            </div>

            <div>
                <img
                    className="absolute ml-4"
                    width={25}
                    src="/model-icon.png"

                />

                <input
                    onChange={e => setModel(e.target.value)}
                    className="searchbar__input rounded text-black"
                    type="text"
                    placeholder="ör:Civic"
                />
                <SearchButton styling="sm:hidden" />
            </div>
            <SearchButton styling="max-sm:hidden" />
        </form>
    )
}

export default SearchBar;