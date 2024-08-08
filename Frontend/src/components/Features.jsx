import React from 'react';
import {FeatureItem} from './FeatureItem'; 
import CHAT from '../assets/images/icon-chat.webp';
import MONEY from '../assets/images/icon-money.webp';
import SECURITY from '../assets/images/icon-security.webp';

export function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem imgSrc={CHAT} imgAlt="Chat Icon" title="You are our #1 priority">
        Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
      </FeatureItem>
      <FeatureItem imgSrc={MONEY} imgAlt="Money Icon" title="More savings means higher rates">
        The more you save with us, the higher your interest rate will be!
      </FeatureItem>
      <FeatureItem imgSrc={SECURITY} imgAlt="Security Icon" title="Security you can trust">
        We use top of the line encryption to make sure your data and money is always safe.
      </FeatureItem>
    </section>
  );
}