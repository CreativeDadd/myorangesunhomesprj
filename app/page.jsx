import Hero from "@components/Hero"
//  import GallerySlider from "@components/GallerySlider";
 import AboutUsSection from '@components/AboutUsSection';
 import PropertiesListingSection from '@components/PropertiesListingSection';
 import FaqSection from '@components/FaqSection';
 import FeaturedProperties from '@components/FeaturedProperties';
 import TestimonialSection from '@components/TestimonialSection';
import ContactSection from "@components/ContactSection"
import StaffSection from '@components/StaffSection';
import BlogSection from '@components/BlogSection';

const page = () => {
  return (
    <>
       <Hero />
       <AboutUsSection />
       <PropertiesListingSection />
       <BlogSection />
       <FeaturedProperties />
       <StaffSection />
       <FaqSection />
       <TestimonialSection />
       <ContactSection /> 
        </>
  )
}

export default page