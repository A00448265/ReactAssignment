
import Weather from "./Weather"
import imageURL from "../assets/City.jpg"

console.log(imageURL);
const City = () => (
    <div>
        <p class="para">I am from Chandigarh, India</p>
        <img alt="City picture not loaded correctly" src={imageURL}/>
        <Weather/>
    </div>
)

export default City;
