import ImageCarouselCube from "../../components/ImageCarouselCube";
import "./styles.scss";

export default function HistoriaCasal() {
  const images1 = [
    "/image/HistoriaCasal/InicioNamoro01.jpeg",
    "/image/HistoriaCasal/InicioNamoro02.jpeg",
    "/image/HistoriaCasal/InicioNamoro03.jpeg",
  ];

  const images2 = [
    "/image/HistoriaCasal/historiaCasal3.jpeg",
    "/image/HistoriaCasal/ViagensAventuras04.jpeg",
    "/image/HistoriaCasal/historiaCasal1.jpeg",
    "/image/HistoriaCasal/ViagensAventuras03.jpeg",
    "/image/HistoriaCasal/historiaCasal5.jpeg",
    "/image/HistoriaCasal/historiaCasal6.jpeg",
    "/image/HistoriaCasal/historiaCasal7.jpeg",
    "/image/HistoriaCasal/historiaCasal8.jpeg",
    "/image/HistoriaCasal/ViagensAventuras01.jpeg",
    "/image/HistoriaCasal/ViagensAventuras02.jpeg",
    "/image/HistoriaCasal/historiaCasal9.jpeg",
  ];

  const images3 = [
    "/image/HistoriaCasal/historiaCasal10.jpeg",
    "/image/HistoriaCasal/historiaCasal4.jpeg",
    "/image/HistoriaCasal/historiaCasal2.jpeg",
    "/image/HistoriaCasal/MomentosEspeciais01.jpeg",
    "/image/HistoriaCasal/MomentosEspeciais02.jpeg",
    "/image/HistoriaCasal/MomentosEspeciais03.jpeg",
    "/image/HistoriaCasal/MomentosEspeciais04.jpeg",
  ];

  return (
    <div className="historiaCasal">
      <div>
        <section>
          <h1>História do Casal</h1>
        </section>

        <section>
          <div className="row invite-container textoBiblico">
            <h2 className="citacao">
              "E nós conhecemos e cremos no amor que Deus tem por nós. Deus é
              amor. Aquele que permanece no amor permanece em Deus, e Deus
              nele."
            </h2>
            <h6 className="autor">- 1 João 4:16.</h6>
          </div>
        </section>

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
