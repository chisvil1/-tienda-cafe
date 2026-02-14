import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-container container my-5" id="about-us"> {/* Added id */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="section-title">SOBRE NOSOTROS</h2>
          <div className="title-divider"></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <p className="lead">Berbeleta nace del deseo de disfrutar un buen café sin prisas, sin
          complicaciones y sin renunciar a la calidad. Un café pensado para
          disfrutarse sin complicaciones.</p>
          <p>Una propuesta que combina calidad, practicidad y buen sabor para
          quienes valoran cada pausa del día. Diseñado para acompañar un estilo de vida dinámico, Berbeleta ofrece una
          experiencia equilibrada donde el aroma y el sabor se mantienen fieles a la
          esencia del buen café, sin perder la facilidad que exige el ritmo actual.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
