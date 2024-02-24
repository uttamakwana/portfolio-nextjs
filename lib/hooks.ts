import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

type CustomHookProps = {
 section: SectionName,
 threshold: number,
}

export function useSectionInView({ section, threshold }: CustomHookProps) {
 const { ref, inView } = useInView({ threshold });
 const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

 useEffect(() => {
  if (inView && Date.now() - timeOfLastClick > 1000) {
   setActiveSection(section);
  }
 }, [inView, setActiveSection, timeOfLastClick, section]);
 return { ref };
}
