import FetchYourDog from "../pages/dogs/FetchYourDog";
import { useGetBreeds } from "../services/DogService"


function Authenticated() {
  const breeds = useGetBreeds().data;
  console.log(breeds)

  return (
    <>
      <FetchYourDog />
    </>
  )
}

export default Authenticated