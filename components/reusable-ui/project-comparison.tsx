import React from 'react';
import {
  KeyRound,
  Mail,
  Database,
  Palette,
  FileText,
  Search,
  Upload,
  CheckCircle,
  Rocket,
  X,
  ArrowRight,
  Image,
  BarChart2,
  ShoppingBag,
} from 'lucide-react';

interface TimelineStep {
  title: string;
  highlight: string;
  duration: number;
  icon: React.ReactNode;
  painPoint: string;
  benefit: string;
}

const ProjectComparison = ({ theme = 'light' }) => {
  const steps: TimelineStep[] = [
    {
      title: 'Configurando',
      highlight: 'Inventario base',
      duration: 10,
      icon: <Database className='w-4 h-4' />,
      painPoint:
        'Luchando con la estructura inicial del inventario, categorización de sneakers y registro de productos',
      benefit:
        'Sistema pre-configurado de gestión de inventario con categorías optimizadas para calzado deportivo',
    },
    {
      title: 'Implementando',
      highlight: 'Seguridad y roles de usuario',
      duration: 15,
      icon: <KeyRound className='w-4 h-4' />,
      painPoint:
        'Configurar accesos para administradores, vendedores y personal de almacén con permisos específicos',
      benefit:
        'Sistema de autenticación listo para producción con múltiples roles y gestión segura de sesiones',
    },
    {
      title: 'Configurando',
      highlight: 'Fichas de producto',
      duration: 10,
      icon: <FileText className='w-4 h-4' />,
      painPoint:
        'Crear formularios detallados para registrar características específicas de cada modelo de sneaker',
      benefit:
        'Formularios reutilizables con campos específicos para sneakers, incluyendo tallas, colores y materiales',
    },
    {
      title: 'Configurando',
      highlight: 'Notificaciones',
      duration: 6,
      icon: <Mail className='w-4 h-4' />,
      painPoint:
        'Configurar alertas de stock bajo y notificaciones automáticas',
      benefit:
        'Sistema de alertas y notificaciones listo para usar con plantillas personalizables',
    },
    {
      title: 'Diseñando',
      highlight: 'Interfaz de usuario',
      duration: 18,
      icon: <Palette className='w-4 h-4' />,
      painPoint:
        'Crear una interfaz intuitiva para visualizar el inventario de sneakers',
      benefit:
        'Interfaz moderna y atractiva con visualización optimizada de productos y fotos de alta calidad',
    },
    {
      title: 'Implementando',
      highlight: 'Catálogo digital',
      duration: 8,
      icon: <Image className='w-4 h-4' />,
      painPoint:
        'Crear un catálogo digital atractivo para mostrar el inventario a clientes',
      benefit:
        'Catálogo digital completo con filtros por marca, modelo, talla y precio',
    },
    {
      title: 'Configurando',
      highlight: 'Documentación de productos',
      duration: 10,
      icon: <FileText className='w-4 h-4' />,
      painPoint:
        'Mantener documentación detallada de cada modelo es complicado',
      benefit:
        'Sistema completo de documentación de productos con fichas técnicas',
    },
    {
      title: 'Optimizando',
      highlight: 'Visibilidad online',
      duration: 4,
      icon: <Search className='w-4 h-4' />,
      painPoint: 'Hacer que el inventario sea visible en búsquedas online',
      benefit:
        'Estructura optimizada para SEO con generación automática de etiquetas para cada producto',
    },
    {
      title: 'Construyendo',
      highlight: 'Panel de control y estadísticas',
      duration: 12,
      icon: <BarChart2 className='w-4 h-4' />,
      painPoint:
        'Crear paneles para visualizar rendimiento de ventas, rotación de inventario y productos más populares',
      benefit:
        'Dashboard pre-configurado con tablas de datos y gráficos de análisis con exportación a Excel',
    },
    {
      title: 'Implementando',
      highlight: 'Gestión de fotos de productos',
      duration: 6,
      icon: <Upload className='w-4 h-4' />,
      painPoint:
        'Configurar sistemas para subir, organizar y mostrar múltiples fotos por modelo',
      benefit:
        'Sistema optimizado para carga de imágenes múltiples con visualización en 360° y zoom de detalles',
    },
  ];

  const totalHours = steps.reduce((acc, step) => acc + step.duration, 0);

  return (
    <section className='w-full bg-blue-50/20'>
      {/* Updated Header Section */}
      <div className='w-full max-w-6xl mx-auto py-20 px-6 text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8'>
          ¿Por qué complicar tu gestión
          <br />
          de
          <span className='inline-block bg-gradient-to-r from-blue-100 via-indigo-100 to-indigo-200 px-4 rounded-lg'>
            inventario?
          </span>
        </h2>

        <p className='text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
          Descubre cómo Sneaker POS revoluciona la administración de tu
          inventario con funciones listas para usar que normalmente tardarías
          semanas en implementar.
          <br />
          Ahorra hasta {totalHours} horas de tiempo en implementación
        </p>
      </div>

      {/* Comparison Grid */}
      <div className='max-w-7xl mx-auto px-6 pb-20'>
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Without Sneaker POS */}
          <div className='relative'>
            <div className='sticky top-8 bg-white rounded-3xl border border-rose-100 overflow-hidden'>
              <div className='p-6 border-b border-rose-100 bg-gradient-to-b from-rose-50/50'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center'>
                    <X className='w-5 h-5 text-rose-500' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900'>
                    Sin Sneaker POS
                  </h3>
                </div>
                <div className='flex items-baseline gap-2'>
                  <span className='text-3xl font-bold text-rose-500'>
                    {totalHours} Horas
                  </span>
                  <span className='text-slate-600'>de trabajo manual</span>
                </div>
              </div>
              <div className='p-6'>
                <ul className='space-y-6'>
                  {steps.map((step, index) => (
                    <li key={index} className='flex gap-4'>
                      <div className='w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0'>
                        {step.icon}
                      </div>
                      <div>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='font-medium text-slate-900'>
                            {step.title}{' '}
                            <span className='font-bold'>{step.highlight}</span>
                          </h4>
                          <span className='text-rose-500 text-sm'>
                            ~ {step.duration}hrs
                          </span>
                        </div>
                        <p className='text-slate-600 text-sm'>
                          {step.painPoint}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* With Sneaker POS */}
          <div className='relative'>
            <div className='sticky top-8 bg-white rounded-3xl border border-blue-100 overflow-hidden'>
              <div className='p-6 border-b border-blue-100 bg-gradient-to-b from-blue-50/50'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center'>
                    <ShoppingBag className='w-5 h-5 text-blue-500' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900'>
                    Con Sneaker POS
                  </h3>
                </div>
                <div className='flex items-baseline gap-2'>
                  <span className='text-3xl font-bold text-blue-500'>
                    Configuración Inmediata
                  </span>
                  <span className='text-slate-600'>
                    funciones listas para usar
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <ul className='space-y-6'>
                  {steps.map((step, index) => (
                    <li key={index} className='flex gap-4'>
                      <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0'>
                        <CheckCircle className='w-5 h-5 text-blue-500' />
                      </div>
                      <div>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='font-medium text-slate-900'>
                            {step.title}{' '}
                            <span className='font-bold'>{step.highlight}</span>
                          </h4>
                          <ArrowRight className='w-4 h-4 text-blue-500' />
                          <span className='text-blue-500 text-sm'>
                            Listo para usar
                          </span>
                        </div>
                        <p className='text-slate-600 text-sm'>{step.benefit}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComparison;
