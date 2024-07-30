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
        Simple – really! When you hit the time limit that you set for yourself,
        the selected apps will get blocked. Need more time? Gotta send a time
        request to your friends (aka your Powermate!) for approval
      </SectionTitle>

      <Benefits />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* 
      <SectionTitle
        // preTitle="Watch a video"
        title="Subscribe to our waiting list"
      >
        Please enable JavaScript in your browser to complete this form.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}
      {/* <Cta open={open} setOpen={setOpen} /> */}

      {/* <SectionTitle title="Frequently Asked Questions">
        {`Find quick answers to common questions about Powermate. For more help, contact our support team.

`}
      </SectionTitle>

      <Faq /> */}
    </Container>
  );
}
