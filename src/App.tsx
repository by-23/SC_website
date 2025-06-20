import './framer/styles.css'

import TestimonialCardFramerComponent from './framer/cards/testimonial-card'
import NavLinkButtonFramerComponent from './framer/nav-link-button'
import FeatureCardFramerComponent from './framer/feature-card'
import NavbarFramerComponent from './framer/navbar'
import ClientsLogoFramerComponent from './framer/helper/clients-logo'
import UpperFramerComponent from './framer/upper'
import FooterFramerComponent from './framer/footer'
import ProductOverviewFramerComponent from './framer/product-overview'
import ÖzelliklerFramerComponent from './framer/özellikler'
import AvantajlarFramerComponent from './framer/avantajlar'
import FinansalAnalitikFramerComponent from './framer/finansal-analitik'
import JobsFramerComponent from './framer/jobs'
import BlogFramerComponent from './framer/blog'
import GlobalPresenceFramerComponent from './framer/global-presence'
import ReviewFramerComponent from './framer/review'
import FaqFramerComponent from './framer/faq'
import İletişimFramerComponent from './framer/İletişim'
import FormSubmitButtonFramerComponent from './framer/button/form-submit-button'
import WaitlistButtonFramerComponent from './framer/waitlist-button'
import ScrollLightLineFramerComponent from './framer/abstract/scroll-light-line'
import PricingPlansFramerComponent from './framer/cards/pricing-plans'
import TeamCardFramerComponent from './framer/cards/team-card'
import TagFramerComponent from './framer/helper/tag'
import PatchCardsFramerComponent from './framer/cards/patch-cards'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-black'>
      <div className='fixed top-10 w-full z-50 flex justify-center animate-zoom-in-top'>
        <NavbarFramerComponent.Responsive
          blog={"Non Active"}
          home={"Active"}
          kVKK={"Non Active"}
          text={"Üye ol"}
          hakkında={"Non Active"}
        />
      </div>
      <UpperFramerComponent.Responsive/>
      <ProductOverviewFramerComponent.Responsive/>
      <ÖzelliklerFramerComponent.Responsive/>
      <AvantajlarFramerComponent.Responsive/>
      <FinansalAnalitikFramerComponent.Responsive/>
      <JobsFramerComponent.Responsive/>
      <BlogFramerComponent.Responsive/>
      <GlobalPresenceFramerComponent.Responsive className='global-presence-spacing'/>
      <ReviewFramerComponent.Responsive className='review-spacing'/>
      <FaqFramerComponent.Responsive className='faq-spacing'/>
      <İletişimFramerComponent.Responsive/>
      <FooterFramerComponent.Responsive/>
    </div>
  );
};