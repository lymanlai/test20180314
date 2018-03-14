const sumByQuarter = require('../q1')
const assert = require('assert')

describe("test q1", function suite() {
  it("should ok", function (done) {
    let input1 = [
      {
        month: 2, //[1-12],
        date: 4, //[1-31],
        transationId: "id1",
        salePrice: 100
      },
    ]
    // just some fake code here
    let realRz = [
      { quarter: 1, totalPrices: 100, transactionNums: 1 },
      { quarter: 2, totalPrices: 0, transactionNums: 0 },
      { quarter: 3, totalPrices: 0, transactionNums: 0 },
      { quarter: 4, totalPrices: 0, transactionNums: 0 },
    ]
    assert.deepEqual(
      sumByQuarter(input1),
      realRz
    )
    done()
  })
  // TODO: some other test case
  // it("should have some error", function (done) {
  //   // we could add some wrong input here, like missing month
  //   let input1 = [
  //     {
  //       month: n, //[1-12],
  //       date: n, //[1-31],
  //       transationId: "xxx",
  //       salePrice: number
  //     },
  //   ]
  //   // just some fake code here
  //   let realRz = [q1Rz, q2Rz, q3Rz, q4Rz]
  //   assert.deepEqual(
  //     sumByQuarter(input1),
  //     realRz
  //   )
  // })
})
