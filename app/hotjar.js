import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const useHotjar = (siteId, version) => {
  useEffect(() => {
    Hotjar.init(siteId, version);
  }, [siteId, version]);
};

export default useHotjar;
