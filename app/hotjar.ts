// components/HotjarClient.tsx
"use client";

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const siteId = 4997446;
const hotjarVersion = 6;

const HotjarClient = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Initializing Hotjar'); // Debug log
      Hotjar.init(siteId, hotjarVersion);
      console.log('Hotjar initialized'); // Debug log
    }
  }, []);

  return null;
};

export default HotjarClient;
