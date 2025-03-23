import React from 'react';

const SneakerPOSLogo = ({
  theme = 'light',
  className = '',
  width = 400,
  height = 120,
}) => {
  const isDark = theme === 'dark';

  // Color primario: 221.2 83.2% 53.3% (convertido a formato hex/rgb)
  // Este valor HSL corresponde aproximadamente a #2563eb (azul)
  const primaryColor = '#2563eb';

  // Colors based on theme
  const colors = {
    background: isDark ? '#111827' : 'transparent',
    textPrimary: isDark ? '#ffffff' : '#1e293b',
    textSecondary: primaryColor,
    tagline: isDark ? '#94a3b8' : '#64748b',
  };

  return (
    <div className={className}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 400 120'
        className={`w-full h-auto`}
        style={{ maxWidth: width, maxHeight: height }}
      >
        {/* Text */}
        <text
          x='50'
          y='70'
          fontFamily='Arial, sans-serif'
          fontWeight='bold'
          fontSize='54'
          fill={colors.textPrimary}
        >
          Sneaker
          <tspan fill={colors.textSecondary}>POS</tspan>
        </text>

        {/* Tagline */}
        <text
          x='53'
          y='90'
          fontFamily='Arial, sans-serif'
          fontSize='16'
          fill={colors.tagline}
        >
          Gestión Avanzada de Inventario
        </text>
      </svg>
    </div>
  );
};

export default SneakerPOSLogo;
