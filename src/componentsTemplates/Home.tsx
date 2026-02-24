import GoogleBookingButton from "./GoogleBookingButton";
function Home() {

  return (
      <>
<div>
  {/* ourwines Grid*/}
  <section className="page-section" id="ourwines" style={{ backgroundColor: "#ece9e2" }}>
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Our wines</h2>
        <h3 className="section-subheading  text-uppercase">Wines from Cafayate that tell the story of their land
        </h3>
        <img className="img-fluid mb-4" src="assets/img/about/vinos.webp" alt="..." />
        <img className="img-fluid" src="assets/img/about/frasevinos-eng.png" alt="..." />


    <div className="container mt-4">
      <div className="row text-center">

        <div className="col-md-6">
        <img className="img-fluid mb-4" src="assets/img/about/copavino-eng.png" alt="..." />
        </div>

        <div className="col-md-6">
        <img className="img-fluid mb-4" src="assets/img/about/vinosvarietal-eng.png" alt="..." />
        </div>

      </div>
    </div>


      </div>
    </div>


  </section>

  {/* quienessomos*/}
  <section className="page-section" id="quienessomos"  style={{ backgroundColor: "#ece9e2" }}>
    <div className="container " >
      <div className="text-center">
        <h2 className="section-heading text-uppercase mb-5">Who we are</h2>
              <img className="img-fluid mb-4" src="assets/img/about/roc.jpg" alt="..." />
        <h3 className="section-subheading "><br />Como en un museo, en la senda Calchaquí, la naturaleza nos provee de su arte infinito a través de las uvas.<br />
          <br />Ubicada donde el sol y el viento siempre acompañan al compás creando melodías inspiradoras, está Finca LA CHIMPEÑA. Enclavada en medio de arenales y montañas, premia un año de esfuerzo con uva madura, con la que nuestro enólogo concreta la alquimia de crear el VINO STUTZ, que desde 2007 invita a disfrutar del placer del vino en una combinación mágica de sabores cafayateños.<br />
          <br />La estrella indiscutida de STUTZ es el Torrontés. Y no es casualidad, ya que Cafayate es reconocida a nivel mundial por este varietal. Ricardo Stutz, fundador de este sueño, decía: “(...) (el Torrontés) es un vino que se disfruta.<br />
          <br />No importa cuánto tiempo haya pasado desde que se lo probó por primera vez, cuando se lo vuelve a degustar, se lo reconoce. Es ahí donde yace su grandeza y la diferencia con el resto de los varietales.”<br />
          <br />Como la geografía misma, nuestro corazón está al Norte y sentimos la pasión corriendo por la sangre. Por eso, dentro de nuestros varietales están los colores intensos, las uvas tintas que al saborearlas dejan sus tonos profundos marcados en los labios. A ellas, las descubrimos en forma de Tannat, Malbec y Cabernet Sauvignon.<br />
          <br />Por último, pero no menos importante, en honor a las nuevas generaciones, al cambio, a las ideas frescas y renovadas; creamos un blend como combinación de los tres varietales tintos. El popurrí justo que nos brindan las uvas en todo su esplendor.<br />
        </h3>
        <h2 className="section-heading text-uppercase">We are</h2>
          <img className="img-fluid mb-4" src="assets/img/about/familia.jpeg" alt="..." />
        <h3 className="section-subheading"><br />Finca La Chimpeña está ubicada a unos kilómetros de la ciudad de Cafayate (Salta). Allí donde el sol siempre está expectante, atento, intacto; pero nunca solo: la brisa lo acompaña firme, constante. La combinación exacta y excepcional que hace del producto de nuestra tierra y esfuerzo una fruta de calidad única, sin la necesidad de interferir en el proceso natural con la aplicación de agroquímicos.<br />
          <br />El trabajo en armonía con la naturaleza y el cuidado del medio ambiente nos permitieron iniciar la certificación orgánica de nuestro terroir en junio de 2015.<br />
          <br />Porque creemos en lo que hacemos, los vinos STUTZ son elaborados exclusivamente con uvas de producción propia, asegurando que el vino que llega a la copa, esa misma compartida en familia o con amigos, sea de calidad y excelencia.<br />
          <br />Nosotros, los que elaboramos vinos STUTZ, lo compartimos en nuestra propia mesa, lo disfrutamos en cada puesta del sol con nuestras familias. Y como familia es que, con total convicción se los recomendamos a la tuya. Salud.<br />
        </h3>
      </div>
    </div>
  </section>




{/* <section className="page-section " id="appointments"  style={{ backgroundColor: "#ece9e2" }} >
  <div className="container text-center">
    <h2 className="section-heading text-uppercase">
      Book a Meeting
    </h2>

    <div className="mt-4">
      <GoogleBookingButton />
    </div>
  </div>
  <div className="container text-center" >
    <div className="mt-3">
      <a
        href="mailto:javierpia0105@gmail.com?subject=Meeting Request&body=Hi, I would like to book a meeting."
        className="btn btn-primary"
      >
        Send us an Email
      </a>
    </div>
      <a
        href="https://wa.me/5493815707891?text=Hi%20I%20would%20like%20to%20book%20a%20meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp"></i>
      </a>    


    <div className="mt-4" style={{ width: '100%' }}>



<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.97026215387433!2d-65.9736281301801!3d-26.07405932474481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f31ba750d6c5d%3A0x309ad6d4866939ae!2sVinos%20Stutz!5e0!3m2!1sen!2sar!4v1771886804735!5m2!1sen!2sar"
  width="50%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>    

  </div>
</section> */}

      {/* Contact*/}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading "style={{ color: "#ece9e2" }} >Thank you for contacting Stutz Wines, we will respond to your inquiry shortly.</h3>
          </div>
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            {/* <div className="row align-items-stretch mb-5"> */}
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">

                  <h3 className="section-subheading" style={{ color: "#ece9e2" }} >
                    Whatsapp..:&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://wa.me/5493815707891?text=Hi%20I%20would%20like%20to%20book%20a%20meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                     5493868467111
                    </a>


                  </h3>
                  <h3 className="section-subheading" style={{ color: "#ece9e2" }} >
                    Phone.....:&nbsp;&nbsp;&nbsp;
                    <a href="tel:+5493868467111">
                      +5493868467111
                    </a>
                  </h3>
                  <h3 className="section-subheading" style={{ color: "#ece9e2" }} >
                    Email..:&nbsp;&nbsp;&nbsp;
                    <a
                      href="mailto:info@stutzvinos.com.ar?subject=Meeting Request&body=Hi, I would like to book a meeting."
                    >
                      info@stutzvinos.com.ar
                    </a>
   
                  </h3>

                  <h3 className="section-subheading" style={{ color: "#ece9e2" }}>
                    Address:&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=-26.07405932474481,-65.9736281301801"
                      target="_blank"
                      rel="noopener noreferrer"
                      // style={{ color: "#ece9e2", marginLeft: "8px", textDecoration: "none" }}
                    >
                      Belgrano 151, Cafayate
                    </a>
                  </h3>

                  <div >
                    <div className="mt-4">
                      <GoogleBookingButton />
                    </div>
                  </div>


              </div>
              <div className="col-md-6">

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.97026215387433!2d-65.9736281301801!3d-26.07405932474481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f31ba750d6c5d%3A0x309ad6d4866939ae!2sVinos%20Stutz!5e0!3m2!1sen!2sar!4v1771886804735!5m2!1sen!2sar"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

              </div>
            </div>
            {/* Submit success message*/}
          </form>
        </div>
      </section>


</div>

      </>
  )
}

export default Home
