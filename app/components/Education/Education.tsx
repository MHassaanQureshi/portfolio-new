"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useMediaQuery } from '@mui/material';

export default function Education() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div className="w-full flex justify-center px-10 ml-20  md:px-16 lg:px-32 py-10 bg-transparent">
      <Timeline position={isMobile ? 'right' : 'alternate'} className="!p-0">
        {/* BSCS */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="w-full flex justify-center ">
            <div className="rounded-2xl  p-6 md:p-8 w-[20rem] md:max-w-xl border border-gray-200 shadow-sm bg-white/10 backdrop-blur-md">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                BSCS – Federal Urdu University, Karachi
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-2">Feb 2022 – Feb 2026</p>
            </div>
          </TimelineContent>
        </TimelineItem>

       
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className=" w-full flex justify-center md:mt-10 lg:mt-20">
            <div className="rounded-2xl p-6 md:p-8 w-[20rem] md:max-w-xl border border-gray-200 shadow-sm bg-white/10 backdrop-blur-md">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Web 3.0 & Generative AI – GIAIC Program
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-2">Dec 2023 – Aug 2025</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}