import Navbar from '@/components/Navbar';
import BannerCarousel from '@/components/BannerCarousel';
import Products from '@/components/Products';
import CompanyIntro from '@/components/CompanyIntro';
import Stats from '@/components/Stats';
import Advantages from '@/components/Advantages';
import Footer from '@/components/Footer';
import DownloadButton from '@/components/DownloadButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerCarousel />
      <Products />
      <CompanyIntro />
      <Stats />
      <Advantages />
      <Footer />
      <DownloadButton />
    </div>
  );
}
