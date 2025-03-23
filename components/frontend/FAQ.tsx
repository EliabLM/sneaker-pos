'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  HelpCircle,
  Minus,
  Plus,
  Package,
  Shield,
  UserCheck,
  Database,
} from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question:
      '¿Qué funcionalidades incluye el sistema de gestión de inventario?',
    answer:
      'Nuestro sistema incluye todas las funcionalidades esenciales para gestionar tu inventario eficientemente: categorización inteligente de productos, alertas automáticas de stock bajo configurables, búsqueda avanzada por características específicas, exportación de datos a CSV, Excel o PDF, historial de cambios con seguimiento detallado y acciones rápidas para movimientos de inventario. La plataforma está especialmente optimizada para negocios que necesitan control preciso de su mercancía.',
    icon: Database,
  },
  {
    question: '¿Cómo funciona el sistema de seguridad y roles de usuario?',
    answer:
      'Implementamos un robusto sistema de autenticación con roles específicos para administradores, vendedores y personal de almacén. Cada rol tiene permisos personalizados que determinan su acceso a diferentes módulos del sistema. Utilizamos JWT y cookies seguras para la gestión de sesiones, encriptación avanzada para el manejo de contraseñas, y mantenemos registros de auditoría para todas las acciones sensibles, garantizando la protección total contra accesos no autorizados.',
    icon: Shield,
  },
  {
    question:
      '¿Puedo personalizar las fichas de producto según mis necesidades?',
    answer:
      'Absolutamente. Nuestro sistema incluye formularios dinámicos con campos condicionales que puedes adaptar según tus necesidades específicas. Dispondrás de un editor de texto enriquecido para descripciones detalladas, sistema de fichas técnicas con especificaciones completas, y etiquetado avanzado de productos. También ofrecemos plantillas predefinidas que puedes modificar, y todas las fichas mantienen un historial de versiones para seguimiento de cambios.',
    icon: Package,
  },
  {
    question:
      '¿El sistema permite gestión de múltiples almacenes o ubicaciones?',
    answer:
      'Sí, nuestra plataforma está diseñada para gestionar múltiples almacenes o ubicaciones simultáneamente. Puedes configurar diferentes puntos de almacenamiento, asignar inventario específico a cada ubicación, realizar transferencias entre almacenes con seguimiento en tiempo real, y generar informes de inventario segmentados por ubicación. Esto te permite mantener un control centralizado mientras gestionas operaciones distribuidas.',
    icon: Database,
  },
  {
    question: '¿Cómo puedo obtener acceso al código fuente?',
    answer:
      'Después de la compra, recibirás acceso inmediato al código fuente completo a través de GitHub. Serás invitado a nuestro repositorio privado donde podrás clonar o descargar el código. También te enviaremos documentación detallada e instrucciones de configuración a tu correo electrónico registrado para que puedas implementar el sistema rápidamente.',
    icon: UserCheck,
  },
  {
    question: '¿El sistema se actualiza regularmente?',
    answer:
      'Sí, mantenemos y actualizamos activamente el código base con commits regulares, correcciones de errores y mejoras de funcionalidades. Nuestro equipo revisa constantemente las dependencias, implementa parches de seguridad y añade nuevas características basadas en el feedback de los usuarios y las prácticas modernas de desarrollo. Puedes consultar nuestro registro de cambios para ver el historial detallado de actualizaciones.',
    icon: HelpCircle,
  },
  {
    question: '¿Qué tipo de soporte técnico ofrecen?',
    answer:
      'Proporcionamos soporte técnico completo a través de nuestra comunidad de Discord, donde nuestros desarrolladores responden consultas generalmente en 24-48 horas. Además, ofrecemos documentación exhaustiva, videos tutoriales, y guías paso a paso para la implementación. Para clientes empresariales, también disponemos de planes de soporte premium con asistencia prioritaria y sesiones de consultoría personalizada.',
    icon: HelpCircle,
  },
  {
    question: '¿Es posible integrar este sistema con mi software existente?',
    answer:
      'Nuestra aplicación está diseñada con una arquitectura modular que facilita la integración con sistemas existentes. Ofrecemos APIs RESTful bien documentadas, soporte para webhooks, y conectores para plataformas populares de e-commerce y ERP. También podemos proporcionar servicios de integración personalizados para casos de uso específicos, asegurando una transición fluida y preservando tus datos y flujos de trabajo actuales.',
    icon: Database,
  },
  {
    question: '¿Qué incluye exactamente mi compra?',
    answer:
      'Tu compra incluye: acceso completo al código fuente, actualizaciones y mejoras regulares, componentes UI premium optimizados para gestión de inventarios, sistema de autenticación, plantillas de correo electrónico, documentación completa, APIs, esquema de base de datos, panel de administración, y soporte al cliente a través de nuestra comunidad de Discord. También obtienes acceso de por vida a todas las actualizaciones futuras dentro de la versión principal actual.',
    icon: Package,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='py-16 bg-blue-50'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <div className='text-center mb-12'>
          <p className='text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide'>
            Preguntas Frecuentes
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Todo sobre tu <span className='italic'>Inventario</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Resolvemos tus dudas sobre nuestro sistema de gestión de inventarios
          </p>
        </div>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-white rounded-xl border overflow-hidden shadow-sm'
            >
              <button
                className='w-full text-left p-4 focus:outline-none'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    {faq.icon && (
                      <faq.icon className='w-5 h-5 text-blue-500 mr-3 flex-shrink-0' />
                    )}
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <Minus className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  ) : (
                    <Plus className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='p-4 pt-0 text-gray-600 ml-8'>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className='mt-12 flex items-center justify-between'>
          <div className='flex items-center'>
            <HelpCircle className='w-5 h-5 text-gray-500 mr-2' />
            <span className='text-gray-600'>¿Necesitas más información?</span>
          </div>
          <Link
            href='/#contact'
            className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center'
          >
            Contáctanos
            <ArrowRight className='w-4 h-4 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
}
