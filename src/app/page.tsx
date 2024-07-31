"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <Container className="px-0">
      <Hero open={open} setOpen={setOpen} />
      <SectionTitle
        // preTitle="Nextly Benefits"
        title="Struggling to Limit Your Social Media Time? We've Got a Solution!"
      >
        We’ve been there and done that. Use the power of your friends to beat
        the addictive social media algorithms and take back control of your time
        once and for all!
      </SectionTitle>

      <Benefits />
    </Container>
  );
}
