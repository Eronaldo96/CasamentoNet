import ImageCarouselCube from "../../components/ImageCarouselCube";

import StudioGhibli1 from "../../assets/images/StudioGhibli1.jpg";
import StudioGhibli2 from "../../assets/images/StudioGhibli2.jpg";

import "./styles.scss";

export default function HistoriaCasal() {
  const images = [StudioGhibli1, StudioGhibli2];

  return (
    <div className="historiaCasal">
      <div className="col-sm-12">
        <h1>História do Casal</h1>
        <ImageCarouselCube images={images} />
      </div>
    </div>
  );
}
