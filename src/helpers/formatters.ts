export function formatBigNumberShorter(num: number) {
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;
  
  const absNumber = Math.abs(num);
  
  const sign = num < 0 ? '-' : '';
  
  if (absNumber >= billion) {
      return sign + (absNumber / billion).toFixed(1).replace('.0', '') + 'bi';
  } else if (absNumber >= million) {
      return sign + (absNumber / million).toFixed(1).replace('.0', '') + 'mi';
  } else if (absNumber >= thousand) {
      return sign + (absNumber / thousand).toFixed(1).replace('.0', '') + 'k';
  }
  
  return sign + absNumber.toString();
}

export function formatNumberReadable(num: number) {
    // Separa a parte inteira da decimal
    const parts = Math.abs(num).toString().split('.');
    
    // Formata a parte inteira com pontos
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Reconstrói o número com sinal negativo (se houver) e decimais (se houver)
    return (num < 0 ? '-' : '') + 
           integerPart + 
           (parts[1] ? ',' + parts[1] : '');
}