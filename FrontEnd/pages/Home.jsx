import Feature from "../src/components/feature.jsx";
import Banner from "../src/components/banner.jsx";
import Featurejson from "../src/data/features.json";

const Home = () => {
    const features = Featurejson.features;
    return (
        <div>
            <>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => (
          <Feature
          key={"feature"+index}
          paragraph={feature.paragraph}
          image={feature.image}
          title={feature.title}
          alt={feature.alt}
          />
        ))}
        </section>
    </>
        </div>
    );
};

export default Home;