import { DogsProvider } from "../context/DogsProvider";
import FetchYourDog from "../pages/dogs/FetchYourDog";
import { useGetBreeds } from "../services/DogService"


function Authenticated() {
  const breeds = useGetBreeds().data;
  console.log(breeds)

  return (
    <>
      <DogsProvider>
        <FetchYourDog />
      </DogsProvider>
    </>
  )
}

export default Authenticated