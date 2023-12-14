import CardData from "../../Components/DataCard/CardData";
import MainTitle from "../../Components/mainTitle/MainTitle";
import "./blogs.css";
export default function Blogs() {
  return (
    <>
      <MainTitle />
      <div className="box container d-flex justify-content-center align-items-center">
        <div className="box-image">
          <img
            src="../../../public/assets/images/Blogs Featured Image.png"
            alt=""
          />
        </div>
        <div className="box-text">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="btn ">Read More</button>
        </div>
      </div>
        <div className="container py-5">
        <CardData/>
        </div>
    </>
  );
}
