import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import {ProductShowcase} from "@/sections/ProductShowcase";
import {Pricing} from "@/sections/Pricing";
import {Testimonials} from "@/sections/Testimonials";
import {CallToAction} from "@/sections/CallToAction";
import {Footer} from "@/sections/Footer";
import {Fragment} from "react";
import Newsletter from "@/sections/NewsLetter";


export default function Home() {
  return (
      <Fragment>
          <Header />
          <Hero />
          <LogoTicker />
          <ProductShowcase />
          {/* <Pricing /> */}
          <Newsletter/>
          <Testimonials />
          <CallToAction />
          <Footer />
      </Fragment>
  );
}
