import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactsPage() {
  return (
    <>
    <Header />
    <div className="mx-auto max-w-2xl lg:px-8">
    <p>
      Kapcsolat:
      KERNER BALÁZS - tulajdonos
      Tibrob-Sec Kft.
      Tel.: +36-30/300-6131
      e-mail: tibrobsec@tibrobsec.hu
    </p>
    </div>
    <div className="mx-auto max-w-2xl lg:px-8">
    <p>
      Kapcsolat:
      Molnár Tibor - ügyvezető
      Tibrob-Sec Kft.
      Tel.: +36-70/397-8990
      e-mail: tibrobsec@tibrobsec.hu 
    </p>
    </div>
    <Footer />
    </>
  );
}

export default ContactsPage;