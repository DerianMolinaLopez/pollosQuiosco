// Función para formatear cantidades numéricas
export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MXN',
  }).format(value);
};