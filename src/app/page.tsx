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
    <Container>
      <Hero open={open} setOpen={setOpen} />
      <SectionTitle
        // preTitle="Nextly Benefits"
        title="Struggling to Limit Your Social Media Time? We've Got a Solution!"
      >
        It’s okay. We’ve been there and done that. And of course, it didn’t
        work. But that’s why we built this cool new tool that we believe WILL
        work. Use the power of your friends and family to beat the addictive
        social media algorithms and take back control of your time once and for
        all!
      </SectionTitle>

      <Benefits />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        // preTitle="Watch a video"
        title="Subscribe to our waiting list"
      >
        Please enable JavaScript in your browser to complete this form.
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" /> */}
      <Cta open={open} setOpen={setOpen} />

      <SectionTitle title="Frequently Asked Questions">
        {`Find quick answers to common questions about Powermate. For more help, contact our support team.

`}
      </SectionTitle>

      <Faq />
    </Container>
  );
}
