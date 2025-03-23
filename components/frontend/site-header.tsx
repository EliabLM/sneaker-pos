'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Menu,
  Users,
  BarChart2,
  FileText,
  Layout,
  CloudUpload,
  Edit3,
  Database,
  BarChart,
  Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

import Logo from '../global/Logo';
import { Session } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials } from '@/lib/generateInitials';

const features = [
  {
    icon: Database,
    title: 'Gestión de Inventario',
    description:
      'Sistema completo para administrar tu inventario de sneakers con seguimiento en tiempo real y alertas de stock.',
    href: '/features/inventory-management',
  },
  {
    icon: BarChart2,
    title: 'Análisis de Ventas',
    description:
      'Visualiza tendencias de ventas, sneakers más populares y rendimiento de inventario con gráficos interactivos.',
    href: '/features/sales-analytics',
  },
  {
    icon: CloudUpload,
    title: 'Carga de Imágenes',
    description:
      'Carga fácilmente fotos de productos con soporte para imágenes múltiples y visualización en 360 grados.',
    href: '/features/image-upload',
  },
  {
    icon: Users,
    title: 'Acceso Personalizado',
    description:
      'Control de acceso basado en roles para administradores, vendedores y personal de almacén.',
    href: '/features/authentication',
  },
  {
    icon: Layout,
    title: 'Panel de Control',
    description:
      'Panel responsive con información clave sobre inventario, ventas y productos más buscados.',
    href: '/features/dashboard',
  },
  {
    icon: FileText,
    title: 'Fichas de Producto',
    description:
      'Formularios personalizables para registrar detalles completos de cada modelo de sneaker en tu inventario.',
    href: '/features/product-forms',
  },
  {
    icon: BarChart,
    title: 'Informes Detallados',
    description:
      'Genera informes personalizados sobre rotación de inventario, modelos más vendidos y previsiones de demanda.',
    href: '/features/reports',
  },
  {
    icon: Edit3,
    title: 'Edición de Descripciones',
    description:
      'Editor de texto avanzado para crear descripciones atractivas y detalladas de tus sneakers.',
    href: '/features/rich-text-editor',
  },
  {
    icon: Lock,
    title: 'Seguridad Avanzada',
    description:
      'Protección integral para los datos de tu inventario y registro de acciones de usuarios.',
    href: '/features/security',
  },
];

export default function SiteHeader({ session }: { session: Session | null }) {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 '>
      <div className='container max-w-7xl mx-auto flex h-14 items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Logo />
          <NavigationMenu className='hidden md:flex'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Características</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='w-[800px] p-4'>
                    <div className='flex items-center justify-between mb-4 pb-2 border-b'>
                      <h4 className='text-lg font-medium'>Características</h4>
                      <Link
                        href='/features'
                        className='text-sm text-blue-500 hover:underline'
                      >
                        Ver todas
                      </Link>
                    </div>
                    <div className='grid gap-4 md:grid-cols-3 '>
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          href={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                          className='block group'
                        >
                          <div className='flex items-start gap-4'>
                            <div className='p-2 bg-muted rounded-md group-hover:bg-muted/80'>
                              <feature.icon className='h-6 w-6 text-blue-500' />
                            </div>
                            <div>
                              <h5 className='font-medium mb-1 group-hover:text-blue-500'>
                                {feature.title}
                              </h5>
                              <p className='text-sm text-muted-foreground line-clamp-2'>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className='mt-6 pt-4 border-t'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <h4 className='font-medium mb-1'>Empezar</h4>
                          <p className='text-sm text-muted-foreground'>
                            ¿Listo para comenzar? ¡Regístrate y comienza a usar
                            todas las funcionalidades de inmediato!
                          </p>
                        </div>
                        <Button asChild variant='secondary'>
                          <Link
                            target='_blank'
                            href='https://coding-school-typescript.vercel.app/give-away'
                          >
                            Empezar
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href='/#pricing' legacyBehavior passHref>
                  <NavigationMenuLink className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                    Precios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {session ? (
          <Button asChild variant={'ghost'}>
            <Link href='/dashboard'>
              <Avatar>
                <AvatarImage
                  src={session?.user?.image ?? ''}
                  alt={session?.user?.name ?? ''}
                />
                <AvatarFallback>
                  {getInitials(session?.user?.name)}
                </AvatarFallback>
              </Avatar>
              <span className='ml-3'>Dashboard</span>
            </Link>
          </Button>
        ) : (
          <div className='hidden md:flex items-center space-x-4'>
            <Button asChild variant='ghost'>
              <Link href={'/login'}>Iniciar sesión</Link>
            </Button>
            <Button>
              <Link href='/register'>Registrarse</Link>
            </Button>
          </div>
        )}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-5 w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-full p-0'>
            <SheetHeader className='border-b p-4'>
              <SheetTitle className='text-left'>Navegación</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col py-4'>
              <Link
                href='/'
                className='px-4 py-2 text-lg font-medium hover:bg-accent'
                onClick={() => setOpen(false)}
              >
                Inicio
              </Link>
              <button
                className='flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left'
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Características
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    showFeatures && 'rotate-180'
                  )}
                />
              </button>
              {showFeatures && (
                <div className='px-4 py-2 space-y-4'>
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className='flex items-start gap-4 py-2'
                      onClick={() => setOpen(false)}
                    >
                      <div className='p-2 bg-muted rounded-md'>
                        <feature.icon className='h-6 w-6 text-blue-500' />
                      </div>
                      <div>
                        <h5 className='font-medium mb-1'>{feature.title}</h5>
                        <p className='text-sm text-muted-foreground'>
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href='/#pricing'
                className='px-4 py-2 text-lg font-medium hover:bg-accent'
                onClick={() => setOpen(false)}
              >
                Precios
              </Link>
              <Link
                href='/how-it-works'
                className='px-4 py-2 text-lg font-medium hover:bg-accent'
                onClick={() => setOpen(false)}
              >
                ¿Cómo funciona?
              </Link>
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-4 border-t bg-background'>
              <div className='grid gap-2'>
                <Button
                  variant='outline'
                  className='w-full'
                  onClick={() => setOpen(false)}
                >
                  Iniciar sesión
                </Button>
                <Button className='w-full' onClick={() => setOpen(false)}>
                  Registrarse
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
