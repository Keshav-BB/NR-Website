import React from 'react';
import { Hero } from '@/components/sections/hero';
import { ProblemRecognition } from '@/components/sections/problem-recognition';
import { MethodProtocol } from '@/components/sections/method-protocol';
import { DifferentiationTable } from '@/components/sections/differentiation-table';
import { ImpactMetrics } from '@/components/sections/impact-metrics';
import { TransformationStories } from '@/components/sections/transformation-stories';
import { SciencePreview } from '@/components/sections/science-preview';
import { WhoWeServePreview } from '@/components/sections/who-we-serve-preview';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemRecognition />
      <MethodProtocol />
      <DifferentiationTable />
      <ImpactMetrics />
      <TransformationStories limit={3} showAllLink={true} />
      <SciencePreview />
      <WhoWeServePreview />
      <FreeTrainingBanner />
    </>
  );
}
