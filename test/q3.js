var LFUCache = require('../q3')
var assert = require('assert')

describe("test q3", function suite() {
  it('should ok', function (done) {
    let cache = new LFUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert.equal(cache.get(1), 1) // returns 1
    cache.put(3, 3) // evicts key 2
    assert.equal(cache.get(2), -1) // returns -1 (not found)
    assert.equal(cache.get(3), 3) // returns 3.
    cache.put(4, 4) // evicts key 1.
    assert.equal(cache.get(1), -1) // returns -1 (not found)
    assert.equal(cache.get(3), 3) // returns 3
    assert.equal(cache.get(4), 4) // returns 4
    done()
  })
  // TODO: should use sync test, so we can have many test case
})
