import React from 'react';
import {Hero} from '../components/Hero';
import {Features} from '../components/Features';
import '../assets/css/main.css';

export function Home () {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
};