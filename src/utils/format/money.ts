const convertToUSD = (amount: number = 0) => {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

const formatMoney = (amount: number = 0, collapse: boolean = false) => {
  if (Number(amount) === Number('invalid')) {
    return amount
  }
  const [dollars, change] = convertToUSD(amount).split('.')
  switch (change) {
    case '00' || '0' || null || undefined:
      if (collapse) {
        return `${dollars}`
      }
      return `${dollars}.00`
    default:
      return `${dollars}.${change}`
  }
}

const getChange = (amount: number) => {
  if (Number(amount) === Number('invalid')) {
    return amount
  }
  const [, change] = convertToUSD(amount).split('.')
  return change
}

const getDollars = (amount: number) => {
  if (Number(amount) === Number('invalid')) {
    return amount
  }
  const [dollars] = convertToUSD(amount).split('.')
  return dollars.replace('$', '')
}

const formatPercentage = (number: number) => {
  const dividedNumber = number / 100
  const options = {
    style: 'percent',
    // minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }
  const formatter = new Intl.NumberFormat('en-US', options)
  const formattedNumber = formatter.format(dividedNumber)
  return formattedNumber
}

export { formatMoney, getChange, getDollars, formatPercentage }
