'use client';

import SectionHeader from "@/components/SectionHeader";
import CardHeader from "@/components/CardHeader";
import Card from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import FigmaIcon from '@/assets/icons/figma-svgrepo-com.svg'
import LaravelIcon from '@/assets/icons/laravel-svgrepo-com.svg'
import GithubIcon from '@/assets/icons/github.svg'
import NextIcon from '@/assets/icons/next.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'
import ToolboxItems from "@/components/ToolboxItems";

import gdsc from "@/assets/images/certif/gdscSolution.jpg";
import bestTeam from "@/assets/images/certif/gdscBest.png";
import dialogika from "@/assets/images/certif/dialogika.jpg";
import forci from "@/assets/images/certif/4c.jpg";
import ai4impact from "@/assets/images/certif/ai4impact.jpg";
import gemastik from "@/assets/images/certif/gemastik.jpg";
import graphicDesain from "@/assets/images/certif/graphicDesign.jpg";
import javaFund from "@/assets/images/certif/javaFund.jpg";
import kopma from "@/assets/images/certif/kopma.jpg";
import python from "@/assets/images/certif/python.jpg";

import { motion } from 'framer-motion';
import { useRef } from "react";
import { Fragment } from "react";


const toolboxItems = [
  {
    title: 'Figma',
    iconType: FigmaIcon,
  },
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailwindIcon,
  },
  {
    title: 'Next Js',
    iconType: NextIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Laravel',
    iconType: LaravelIcon,
  }
]

const hobbies = [
  {
    title: 'Badminton',
    emoji: '🏸',
    left: '5%',
    top: '20%'
  },
  {
    title: 'Travel',
    emoji: '✈️',
    left: '45%',
    top: '2%'
  },
  {
    title: 'Gaming',
    emoji: '🎯',
    left: '10%',
    top: '55%'
  },
  {
    title: 'Book',
    emoji: '📗',
    left: '55%',
    top: '40%'
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: '50%',
    top: '75%'
  }
]

const certificates = [
  {
    title: "Finalist UX Design",
    category: "Being finalist on GEMASTIK XVII organized by PUSPRESNAS",
    image: gemastik,
  },
  {
    title: "1s Winner UX Challenges",
    category: "Being 1st Winner on 4C National Competition that held by Faculty of Computer Science, Universitas Brawijaya",
    image: forci,
  },
  {
    title: "Best Design Teams",
    category: "Being best design team over 40 teams on Google Developer Student Club organization 2023/2024",
    image: bestTeam,
  },
  {
    title: "Layout Design",
    category: "Creating 7+ magazine layout pages, social media feeds, and t-shirt designs on KOPMA UGM",
    image: kopma,
  },
  {
    title: "Solution Challange",
    category: "Finishing FOOSE: Innovative food tracking app designed to help reduce food waste from household consumption",
    image: gdsc,
  },
  {
    title: "Java Fundamental",
    category: "Finishing Java Fundamental organized by Oracle Academy 2023",
    image: javaFund,
  },
  {
    title: "Graphic Design",
    category: "Finishing Graphic Design organized by MySkill",
    image: graphicDesain,
  },
  {
    title: "Python",
    category: "Finishing Algorithm & Data Structure with Pyhton organized by Skilvul",
    image: python,
  },
  {
    title: "Designer Specialist Intern",
    category: "Finishing Internship over 3 months on PT Dialogika",
    image: dialogika,
  },
  {
    title: "AI4IMPACT",
    category: "Being Top 500 Applicants from 15.000+ aplicants in Career Scholarship 3.0 2023",
    image: ai4impact,
  },

];


export const AboutSection = () => {
  const contraintRef = useRef(null);
  return <div className="py-20 lg:py-28" id="about" >
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Slice of My Life" description="Learn more about who I am and what I do" />
      <div className="mt-20 flex flex-col gap-8" >

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-4 " >
          <Card className="h-[320px] md:col-span-3 lg:col-span-2" >
            <CardHeader className="" title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." />
            <ToolboxItems items={toolboxItems} className="" classWrapper="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items={toolboxItems} className="mt-6" classWrapper=" -translate-x-1/2 animate-move-right [animation-duration:30s]" />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-2">
            <CardHeader title="My Keen and Hobbies" description="Explore my interests and hobbies beyond the digital realms" className="px-6 py-6" />
            <div className="relative flex-1 " ref={contraintRef} >
              {hobbies.map((hobby) => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-slate-300 to-sky-400 rounded-full py-1.5 absolute" style={{ left: hobby.left, top: hobby.top }} drag dragConstraints={contraintRef} >
                  <span className="font-medium text-gray-950" >{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-8 grid-cols-1 ">
          <div className=" flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4" >
            <div className="flex gap-8 pr-8 flex-none animate-move-left  [animation-duration:40s] hover:[animation-play-state:paused] ">
              {...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {certificates.map(certificate => (              
                    <Card key={certificate.title} className="h-[300px] md:col-span-2 lg:col-span-2  hover:-rotate-3 transition duration-100" >
                      <CardHeader className="text-2xl" title={certificate.title} description={certificate.category} />
                      <div className="mx-auto w-72 -mb-11">
                        <Image src={certificate.image}  alt="Book cover" />
                      </div>
                    </Card>
                  ))}
                </Fragment>
              ))}
            </div>
          
          </div>

        </div>

      </div>
    </div>
  </div>;
};
