export function formatToBrCurrency(valueInCents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(valueInCents / 100)
    .normalize('NFKC'); // Converts non-breaking space → regular space, avoiding comparison problems in unit tests.
}
