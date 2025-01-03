import Select from "react-select";
import { OptionType } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type CustomFilterType ={
    title:string;
    options:OptionType[];
}

const CustomFilter = ({title , options}:CustomFilterType) => {
   const [selected,setSelected] = useState<OptionType| null>();
   const [ params,setParams] = useSearchParams();  
   
   useEffect(() => {
    //url'e eklenecek parametreyi belirleme
    const key = title === "yakıt tipi" ? "fuel" : "year";
    //eğerki bir değer seçildiyse onu url'e ekle
    if(selected?.value) {
      params.set(key, selected.value.toLowerCase());
      // setParams({key: selected.value});
    } else{
        params.delete(key);
    }
   }, []);


   return (
        <div>
            <Select
             placeholder={title} 
             options={options}
             className="text-black min-w-[120px]" 
             onChange={(e) => setSelected(e)}
        />
        </div>
    )
}

export default CustomFilter;