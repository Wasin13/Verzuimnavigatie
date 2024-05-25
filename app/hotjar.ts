import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const useHotjar = (siteId: number, version: number) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Initializing Hotjar'); // Add this line
      Hotjar.init(siteId, version);
      console.log('Hotjar initialized'); // Add this line
    }
  }, [siteId, version]);
};

export default useHotjar;
