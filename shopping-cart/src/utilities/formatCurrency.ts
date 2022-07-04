const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
});
export function formatCurrency(number: number) {
    return formatter.format(number)
}

// formatter.format(2500);
/* $2,500.00 */
