/**
 * REST 辅助函数集合
 * @type {Object}
 */
export default {
  /**
   * 转字符串
   * @returns {string}
   */
  whereToStr (obj) {
    let ret = {}
    let types = []

    Object.keys(obj).forEach(v => {
      types = Object.keys(obj[v])

      if (types.length) {
        ret[v] = {}

        types.forEach(type => {
          if (obj[v][type] === undefined || obj[v][type] === '') {
            delete ret[v]
          } else if (type === '$like') {
            ret[v][type] = `%${obj[v][type]}%`
          } else {
            ret[v] = obj[v]
          }
        })
      } else {
        if (obj[v] !== undefined && obj[v] !== '') {
          ret[v] = obj[v]
        }
      }
    })

    return JSON.stringify(ret)
  }
}
