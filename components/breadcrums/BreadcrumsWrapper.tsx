// BreadcrumsWrapper.tsx
'use client'
import { usePathname } from 'next/navigation';
import Breadcrums from './Breadcrums';

export default function BreadcrumsWrapper() {
  const pathName = usePathname();
  return <Breadcrums pathName={pathName} />;
}
