import { CarType, filterType } from "../types";
import { colors } from "../constants";

const options = {
    
    headers: {
      'x-rapidapi-key': '0883060f59msh382f13a0473212fp110b69jsnba20b120ea77',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    },
};

 export async function fetchCars(filters:filterType) {
    const {
        make= "bmw",
        model= "",
        limit="5",
        year="",
        fuel ="",
    } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    options
);
 
  return await res.json();
}

// fotoğraf url'i oluşturan bir metod
export const genereteImage= (car:CarType, angle?:string) =>{
  const url = new URL(" https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make" , car.make);
  url.searchParams.append("modelFamily",car.model);
  url.searchParams.append("zoomType" , "fullscreen");

  if(angle) {
    url.searchParams.append("angle" , angle);
  }

  // rastgele renk kodu seç 
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId" , colors[i])

  return String(url);
}