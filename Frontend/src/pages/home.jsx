import React from 'react';
import {Header} from '../layout/Header';
import {Hero} from '../components/Hero';
import {Features} from '../components/Features';
import {Footer} from '../layout/Footer';
import '../assets/css/main.css';

export function Home () {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
};