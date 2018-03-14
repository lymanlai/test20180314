const LFUCache = function (capacity) {
  this.capacity = capacity ||  2
  this.cache = {}
  this.cacheUseCount = {}
}

LFUCache.prototype.put = function (key, value) {
  // exist, update it
  if (this.cache[key]) {
    this.cacheUseCount[key] += 1
    this.cache[key] = value
    return
  }
  // new key
  let len = Object.keys(this.cache)
    .length
  if (len === this.capacity) {
    this.removeLeastItem()
  }
  if (!this.cacheUseCount[key]) {
    this.cacheUseCount[key] = 0
  } else {
    this.cacheUseCount[key] += 1
  }
  this.cache[key] = value
}

LFUCache.prototype.get = function (key) {
  if (!this.cache[key]) {
    return -1
  }
  this.cacheUseCount[key] += 1
  return this.cache[key]
}

LFUCache.prototype.removeLeastItem = function () {
  let keys = Object.keys(this.cacheUseCount)
  let minKey = keys[0]
  keys.forEach(key => {
    if (this.cacheUseCount[minKey] > this.cacheUseCount[key]) {
      minKey = key
    }
  })
  delete this.cache[minKey]
  delete this.cacheUseCount[minKey]
}


module.exports = LFUCache
