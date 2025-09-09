"use client"
import SectionHeader from '@/components/SectionHeader'
import CardHeader from "@/components/CardHeader";
import Card from "@/components/Card";
import Datains from "@/assets/images/exp/datains.png";
import HiColl from "@/assets/images/exp/hicollLogo.png";
import Smansa from "@/assets/images/exp/smansa.png";
import UGM from "@/assets/images/exp/ugm.png";
import Chickin from "@/assets/images/exp/chickinLogo.png";
import Gaogao from "@/assets/images/exp/gaogao.png";

import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';


export const experiences = [
  {
    name: "GAOGAO Pte. Ltd",
    tahun: "2025",
    src: Gaogao,
    exp: ['Software Engineer']
  },
  {
    name: "PT Sinergi Ketahanan Pangan",
    tahun: "2025",
    src: Chickin,
    exp: ['Product Designer']
  },
  {
    name: "PT Global Data Inspirasi",
    tahun: "2024",
    src: Datains,
    exp: ['UI/UX Designer', 'System Analyst']
  },
  {
    name: "PT Generasi Muda Berkarya",
    tahun: "2024",
    src: HiColl,
    exp: ['UX Researcher']
  },

]

export const educations = [
  {
    name: "Universitas Gadjah Mada",
    tahun: "2022 - present",
    src: UGM,
    major: "Software Engineering"
  },
  {
    name: "SMA N 1 Balikpapan",
    tahun: "2022",
    src: Smansa,
    major: "Natural Science"
  }

]
export default function ExperienceSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='container'>
      <SectionHeader eyebrow="How My Life Goes" title="Exp./Edu" description="Discover how my experience and education come together." />
      <div className=' lg:grid lg:grid-cols-2 flex flex-col md:mt-20 mt-10 gap-20 mb-24'>
       <div data-aos="fade-up-right">
          <Card className="h-full p-0 flex flex-col md:col-span-2 lg:col-span-2">
            <CardHeader title="Experience" description="Discover My Experience through The World" className="px-6 py-6" />
            {experiences.map((experience) => (
              <div key={experience.name} className="flex flex-wrap gap-6 items-center mb-10 px-6 py-0">
                <div className="lg:w-30 lg:h-30 w-12 h-12">
                  <Image className="items-center" src={experience.src} alt="" width={100} height={100} />
                </div>
                <div>
                  <p className="font-medium text-sm text-[#939393]">
                    {experience.tahun}
                  </p>
                  <h2 className="font-bold lg:text-lg text-md">{experience.name}</h2>
                  <div className="flex flex-wrap lg:gap-4 gap-2 mt-2">
                    {experience.exp.map((skill, index) => (
                      <div key={index} className="p-[1px] bg-gradient-to-r from-slate-300 to-sky-400 rounded-lg w-fit">
                        <p
                          className="bg-gray-800 px-3 py-2 rounded-md lg:text-base text-[11px] font-semibold"
                        >
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        <div data-aos="fade-up-left" data-aos-delay="500">
          <Card className="h-[400px] p-0 flex flex-col md:col-span-2 lg:col-span-2">
            <CardHeader title="Education" description="Discover My Education History" className="px-6 py-6" />
            {educations.map((education) => (
              <div key={education.name} className="flex flex-wrap gap-6 items-center mb-10 px-6 py-0">
                <div className="lg:w-30 lg:h-30 w-12 h-12">
                  <Image className="items-center" src={education.src} alt="" width={100} height={100} />
                </div>
                <div>
                  <p className="font-medium text-sm text-[#939393]">
                    {education.tahun}
                  </p>
                  <h2 className="font-bold lg:text-lg text-md">{education.name}</h2>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>

  )
}
