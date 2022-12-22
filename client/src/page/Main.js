import AdviserSection from '../component/AdviserSection';
import Banner from '../component/Banner';
import ConsultingSection from '../component/ConsultingSection';
import Footer from '../component/Footer';
import MailFormSection from '../component/MailFormSection';
import MapSection from '../component/MapSection';
import PortfolioSection from '../component/PortfolioSection';

const Main = () => {
  return (
    <div>
      <Banner />
      <ConsultingSection />
      <PortfolioSection />
      <MapSection />
      <AdviserSection />
      <MailFormSection />
      <Footer />
    </div>
  );
};

export default Main;
