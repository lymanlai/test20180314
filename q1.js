module.exports = sumByQuarter

function sumByQuarter(saleItems) {
  let q1 = { quarter: 1, totalPrices: 0, transactionNums: 0 }
  let q2 = { quarter: 2, totalPrices: 0, transactionNums: 0 }
  let q3 = { quarter: 3, totalPrices: 0, transactionNums: 0 }
  let q4 = { quarter: 4, totalPrices: 0, transactionNums: 0 }
  saleItems.forEach(item => {
    // TODO: test some field maybe have error
    if (item.month < 4) {
      q1.totalPrices += item.salePrice
      q1.transactionNums++
        return
    }
    if (item.month < 7) {
      q2.totalPrices += item.salePrice
      q2.transactionNums++
        return
    }
    if (item.month < 10) {
      q3.totalPrices += item.salePrice
      q3.transactionNums++
        return
    }
    q4.totalPrices += item.salePrice
    q4.transactionNums++
  })
  return [q1, q2, q3, q4]
}
