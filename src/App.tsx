import { useRef } from 'react';
import { useSite } from '@/context/SiteContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackgroundFX } from '@/components/layout/BackgroundFX';
import { DeptView } from '@/views/DeptView';
import { HolisticView } from '@/views/HolisticView';
import { EbmView } from '@/views/EbmView';
import { FacdevView } from '@/views/FacdevView';
import { BuildingView } from '@/views/BuildingView';

export function App() {
  const { view, theme, lang } = useSite();
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef, [view, theme, lang]);

  return (
    <div ref={rootRef} className="app-root" data-theme={theme}>
      <BackgroundFX />
      <Header />
      {view === 'dept' && <DeptView />}
      {view === 'holistic' && <HolisticView />}
      {view === 'ebm' && <EbmView />}
      {view === 'facdev' && <FacdevView />}
      {view === 'building' && <BuildingView />}
      <Footer />
    </div>
  );
}
