import ImageCarouselCube from "../../components/ImageCarouselCube";
import "./styles.scss";

export default function HistoriaCasal() {
  const images1 = [
    "/image/HistoriaCasal/StudioGhibli1.jpg",
    "/image/HistoriaCasal/StudioGhibli2.jpg",
    "/image/HistoriaCasal/historiaCasal1.jpeg",
    "/image/HistoriaCasal/historiaCasal2.jpeg",
  ];

  const images2 = [
    "/image/HistoriaCasal/historiaCasal3.jpeg",
    "/image/HistoriaCasal/historiaCasal4.jpeg",
    "/image/HistoriaCasal/historiaCasal5.jpeg",
    "/image/HistoriaCasal/historiaCasal6.jpeg",
  ];

  const images3 = [
    "/image/HistoriaCasal/historiaCasal7.jpeg",
    "/image/HistoriaCasal/historiaCasal8.jpeg",
    "/image/HistoriaCasal/historiaCasal9.jpeg",
    "/image/HistoriaCasal/historiaCasal10.jpeg",
  ];

  return (
    <div className="historiaCasal">
      <div className="col-sm-12">
        <h1>História do Casal</h1>

        <section className="historia-bloco">
          <h2>Início do namoro</h2>
          <ImageCarouselCube images={images1} />
        </section>

        <section className="historia-bloco">
          <h2>Viagens e aventuras</h2>
          <ImageCarouselCube images={images2} />
        </section>

        <section className="historia-bloco">
          <h2>Momentos especiais</h2>
          <ImageCarouselCube images={images3} />
        </section>
      </div>
    </div>
  );
}
