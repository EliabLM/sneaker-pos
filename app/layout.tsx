import type { Metadata } from 'next';
import { Rethink_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Providers from '@/components/Providers';
// import FooterBanner from "@/components/Footer";
const inter = Rethink_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Sneaker POS - Gestión de inventario profesional',
  description:
    'Un completo sistema de punto de venta e inventario diseñado específicamente para tiendas de sneakers y calzado deportivo. Con control de stock en tiempo real, seguimiento de tendencias, gestión de proveedores y análisis de ventas.',
  keywords: [
    'sneaker',
    'POS',
    'point of sale',
    'inventory management',
    'sneaker store',
    'shoe store',
    'sneaker POS',
    'sneaker inventory',
    'sneaker management',
    'sneaker sales',
    'calzado deportivo',
    'tienda de sneakers',
    'gestión de inventario',
    'punto de venta',
    'sistema de punto de venta',
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
