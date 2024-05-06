import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactsPage() {
  return (
    <>
    <Header />
    <div className="mx-auto max-w-2xl lg:px-8">
      <div className="mb-4">
          <p>Kapcsolat:</p>
          <p className="font-bold">Kerner Balázs - tulajdonos</p>
          <p>Tibrob-Sec Kft.</p>
          <p>Tel.: <a href="tel:+36303006131">+36-30/300-6131</a></p>
          <p>e-mail: <a href="mailto:tibrobsec@tibrobsec.hu">tibrobsec@tibrobsec.hu</a></p>
      </div>
      <div className="mb-4">
          <p>Kapcsolat:</p>
          <p className="font-bold">Molnár Tibor - ügyvezető</p>
          <p>Tibrob-Sec Kft.</p>
          <p>Tel.: <a href="tel:+36703978990">+36-70/397-8990</a></p>
          <p>e-mail: <a href="mailto:tibrobsec@tibrobsec.hu">tibrobsec@tibrobsec.hu</a></p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ContactsPage;