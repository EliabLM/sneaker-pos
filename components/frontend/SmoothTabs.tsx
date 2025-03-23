'use client';
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  KeyRound,
  BarChart2,
  FileText,
  Database,
  Upload,
  Image,
} from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureTabs = () => {
  const features = [
    {
      id: 'inventory',
      icon: Database,
      tab: 'Inventario',
      title: 'Gestión de Inventario',
      description:
        'Sistema pre-configurado de gestión de inventario con categorías optimizadas para calzado deportivo y alertas automáticas.',
      subFeatures: [
        'Categorización inteligente para modelos de sneakers',
        'Alertas automáticas de stock bajo configurables',
        'Paginación, ordenación y filtrado incorporados',
        'Exportación de datos a CSV, Excel o PDF',
        'Búsqueda avanzada por marca, modelo, talla y precio',
        'Acciones rápidas para movimientos de inventario',
        'Historial de cambios con seguimiento detallado',
        'Integración perfecta con Prisma y APIs de backend',
      ],
    },
    {
      id: 'security',
      icon: KeyRound,
      tab: 'Seguridad',
      title: 'Seguridad y Roles de Usuario',
      description:
        'Sistema de autenticación seguro con roles específicos para administradores, vendedores y personal de almacén.',
      subFeatures: [
        'Control de acceso basado en roles con permisos específicos',
        'Gestión de sesiones con JWT y cookies seguras',
        'Soporte para múltiples roles: admin, vendedor, almacén',
        'Flujos personalizables de registro e inicio de sesión',
        'Manejo seguro de contraseñas con encriptación',
        'Login social para acceso rápido y sencillo',
        'Registros de auditoría para acciones sensibles',
        'Protección contra accesos no autorizados',
      ],
    },
    {
      id: 'products',
      icon: FileText,
      tab: 'Productos',
      title: 'Fichas de Producto y Documentación',
      description:
        'Formularios detallados para registrar todas las características de tus sneakers con documentación técnica completa.',
      subFeatures: [
        'Campos específicos para sneakers: tallas, colores, materiales',
        'Editor de texto enriquecido para descripciones detalladas',
        'Sistema de fichas técnicas con especificaciones completas',
        'Formularios dinámicos con campos condicionales',
        'Historial de versiones para cada ficha de producto',
        'Etiquetado y categorización avanzada de modelos',
        'Vinculación automática con inventario y disponibilidad',
        'Plantillas predefinidas para diferentes tipos de calzado',
      ],
    },
    {
      id: 'dashboard',
      icon: BarChart2,
      tab: 'Dashboard',
      title: 'Panel de Control y Estadísticas',
      description:
        'Dashboard completo para visualizar rendimiento de ventas, rotación de inventario y productos más populares.',
      subFeatures: [
        'Widgets personalizables para métricas clave de inventario',
        'Gráficos de tendencias de ventas y popularidad de modelos',
        'Análisis de rotación de inventario por categoría y marca',
        'Seguimiento de productos con mayor y menor demanda',
        'Visualización de patrones de venta por temporada',
        'Informes automáticos con exportación a Excel',
        'Vistas de dashboard específicas según rol del usuario',
        'Actualizaciones en tiempo real de datos de inventario',
      ],
    },
    {
      id: 'media',
      icon: Upload,
      tab: 'Multimedia',
      title: 'Gestión de Imágenes y Multimedia',
      description:
        'Sistema optimizado para subir, organizar y mostrar múltiples fotos por modelo con visualización avanzada.',
      subFeatures: [
        'Carga de múltiples imágenes con arrastrar y soltar',
        'Visualización en 360° y zoom de detalles',
        'Galería personalizada para cada modelo de sneaker',
        'Organización automática de fotos por ángulo y detalle',
        'Optimización automática de imágenes para carga rápida',
        'Editor básico de imágenes integrado',
        'Soporte para videos de producto y contenido multimedia',
        'Etiquetado de imágenes para búsqueda avanzada',
      ],
    },
    {
      id: 'catalog',
      icon: Image,
      tab: 'Catálogo',
      title: 'Catálogo Digital y Visibilidad Online',
      description:
        'Catálogo digital completo optimizado para SEO con generación automática de etiquetas para cada producto.',
      subFeatures: [
        'Diseño atractivo con visualizaciones de alta resolución',
        'Filtrado avanzado por características específicas de sneakers',
        'Generación automática de meta etiquetas SEO',
        'Exportación del catálogo a PDF para compartir con clientes',
        'Estructura optimizada para el posicionamiento en buscadores',
        'Actualización automática desde el sistema de inventario',
        'Integración con redes sociales para compartir productos',
        'Analíticas de visualización y engagement por producto',
      ],
    },
  ];

  return (
    <section className='w-full py-20 bg-slate-50/50'>
      {/* Header Section */}
      <div className='max-w-6xl mx-auto px-6 mb-16 text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6'>
          Todas las Funciones Esenciales
          <br /> para tu{' '}
          <span className='inline-block bg-gradient-to-r from-orange-200 via-purple-200 to-purple-300 px-4 rounded-lg'>
            Tienda de Sneakers
          </span>
        </h2>
        <p className='text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto'>
          Desde gestión de inventario hasta catálogo digital,
          <br /> este sistema cubre todo lo que necesitas.
        </p>
      </div>

      {/* Tabs Component */}
      <div className='w-full max-w-6xl mx-auto px-6'>
        <Tabs defaultValue='inventory' className='w-full'>
          {/* Tab Buttons */}
          <TabsList className='flex items-center w-full gap-2 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-sm mb-8 flex-wrap justify-center'>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className='flex items-center justify-center gap-2 px-4 py-2.5 rounded-full data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 transition-all duration-300 text-slate-600'
                >
                  <Icon className='w-5 h-5' />
                  <span className='hidden md:inline font-medium'>
                    {feature.tab}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Content Panels */}
          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className='focus-visible:outline-none focus-visible:ring-0'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100'
              >
                <div className='flex items-start gap-6'>
                  {/* Feature Icon */}
                  <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-sm'>
                    <feature.icon className='w-8 h-8 text-purple-600' />
                  </div>

                  {/* Content */}
                  <div className='flex-1 space-y-6'>
                    <div>
                      <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-slate-600 text-lg'>
                        {feature.description}
                      </p>
                    </div>
                    <ul className='space-y-4'>
                      {feature.subFeatures.map((item, index) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div className='w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1'>
                            <svg
                              className='w-3 h-3 text-purple-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <span className='text-slate-700 text-lg'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureTabs;
