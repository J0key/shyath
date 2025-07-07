import SIC from "@/assets/images/competition/sic.jpg";
import Unbraw from "@/assets/images/competition/unbraw.jpg";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import React from 'react'

const listCompetition = [
  {
    category: "AIoT Competition",
    year: "2025",
    title: "3rd Best Team Samsung Innvoation Campus Batch 6",
    results: [
      { title: "Solved solution through mobile application called Lokari, Lock and Area Intelligent Response Interface, a smart monitoring system powered by IoT and Artificial Intelligence that automatically detects movement in and out of a room." },
    ],
    // link: "https://behealth.beraucoal.co.id/login",
    // button: "View Website",
    image: SIC,
  },
    {
    category: "UX Design Competition",
    year: "2024",
    title: "1st Winner UX Challenge 4C National Competition",
    results: [
      { title: "Solving UX Challenges related Scale Up, an AI-powered mobile platform offering tailored solutions for business development, training, education, and consultations to empower MSMEs in achieving sustainable growth." },
    ],
    // link: "https://behealth.beraucoal.co.id/login",
    // button: "View Website",
    image: Unbraw,
  },

];

export const CompetitionSection = () =>  {
  return (
        <section className="pb-16 lg:py-24 -translate-y-[60px]" id="projects" >
      <div className="container" >
        <SectionHeader eyebrow="Embarking Competition" title="Competitions" description="See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col md:mt-20 mt-10 gap-20" >
          {listCompetition.map((project , projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky" style={{ top:`calc(100px + ${projectIndex * 40}px)` }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16" >
                  <div className="bg-gradient-to-r from-slate-300 to-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                    {/* <span>{project.company}</span> */}
                    {/* <span>&bull;</span> */}
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      // <li key={project.title}>{result.title}</li>
                      <li key={project.title} className="flex gap-2 text-sm md:text-base text-white/50" >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 " >
                      <span>{project.button}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a> */}
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg" />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>

    </section>
  )
}
