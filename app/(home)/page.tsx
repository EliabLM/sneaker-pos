import React from 'react';
import Image from 'next/image';
import Iframe from 'react-iframe';
import { Database, BarChart2, ShoppingBag } from 'lucide-react';

import TechStackGrid from '@/components/frontend/Techstack';
import { GridBackground } from '@/components/reusable-ui/grid-background';
import ProjectComparison from '@/components/reusable-ui/project-comparison';
import ReUsableHero from '@/components/reusable-ui/reusable-hero';
import Showcase from '@/components/frontend/showcase';
import PricingCard from '@/components/frontend/single-tier-pricing';
import FAQ from '@/components/frontend/FAQ';
import CustomizationCard from '@/components/frontend/customisation-card';
import { BorderBeam } from '@/components/magicui/border-beam';
import FeatureTabs from '@/components/frontend/SmoothTabs';

export default async function page() {
  const currentUsers = 300;
  return (
    <section>
      <ReUsableHero
        theme='light'
        announcement={{
          text: 'Presentamos Sneaker POS - Gestión de inventario profesional',
        }}
        title={
          <>
            Sistema Integral de Gestión
            <br />
            para Tiendas de Sneakers
          </>
        }
        mobileTitle='Sistema Integral para Tiendas de Sneakers'
        subtitle='Obtén un completo sistema de punto de venta e inventario diseñado específicamente para tiendas de sneakers y calzado deportivo. Con control de stock en tiempo real, seguimiento de tendencias, gestión de proveedores y análisis de ventas - todo lo que necesitas para administrar tu negocio de sneakers de manera eficiente.'
        buttons={[
          {
            label: 'Comenzar Ahora',
            href: '/register',
            primary: true,
          },
          {
            label: 'Ver Demostración',
            href: '/#demo',
          },
        ]}
        icons={[
          { icon: Database, position: 'left' },
          { icon: BarChart2, position: 'right' },
          { icon: ShoppingBag, position: 'center' },
        ]}
        backgroundStyle='neutral'
        className='min-h-[70vh]'
        userCount={currentUsers > 10 ? currentUsers : null}
      />
      <GridBackground>
        <div className='px-8 py-16 '>
          <TechStackGrid />
        </div>
      </GridBackground>
      <div className='py-16 max-w-6xl mx-auto px-8'>
        <div className='relative rounded-lg overflow-hidden'>
          <BorderBeam />
          <Image
            src='/images/dash-2.webp'
            alt='This is the dashbaord Image'
            width={1775}
            height={1109}
            className='w-full h-full rounded-lg object-cover  border shadow-2xl'
          />
        </div>
      </div>
      <ProjectComparison />
      <GridBackground className=''>
        <FeatureTabs />
      </GridBackground>

      <div id='demo' className='py-16 max-w-6xl mx-auto relative'>
        <Iframe
          url='https://www.youtube.com/embed/TcyKfjikcIA?si=naix1jg9I2r0CnSu'
          width='100%'
          className='h-[32rem] rounded-lg'
          display='block'
          position='relative'
        />
        <div className='pb-16'>
          <Showcase />
        </div>
        <div className='py-8'>
          <PricingCard />
        </div>
        <div className='py'>
          <CustomizationCard theme='light' />
        </div>
      </div>
      <FAQ />
    </section>
  );
}
