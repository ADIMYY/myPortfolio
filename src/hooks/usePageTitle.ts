import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | ADIMY`;
  }, [title]);
};

export default usePageTitle; 