// components/HotjarClient.tsx
"use client"; // Mark this file as a client component

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const siteId = 4997446;
const hotjarVersion = 6;

const HotjarClient = () => {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
    console.log('Hotjar initialized');
  }, []);

  return null;
};

export default HotjarClient;
