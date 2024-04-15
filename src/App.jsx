import ArticleSection from "./sections/ArticleSection";
import ClientFeedback from "./sections/ClientFeedback";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import More from "./sections/More";
import OurServices from "./sections/OurServices";

function App() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <More />
      </section>
      <section>
        <ClientFeedback />
      </section>
      <section>
        <ArticleSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
