export default function formatMoney(value) {
  return new Intl.NumberFormat('pt-BT', { style: 'currency', currency: 'BRL' }).format(value)
}