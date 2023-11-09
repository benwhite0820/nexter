import Image from 'next/image';
import './page.scss';
import Sidebar from '@/components/sidebar/sidebar.component';
import Features from '@/components/features/features.component';
import Footer from '@/components/footer/footer.component';
import Gallery from '@/components/gallery/gallery.component';
import Header from '@/components/header/header.component';
import Realtors from '@/components/realtors/realtors.component';
import StoryContent from '@/components/story-content/story-content.component';
import StoryPictures from '@/components/story-pictures/story-pictures.component';
import Homes from '@/components/homes/homes.component';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </>
  );
}
