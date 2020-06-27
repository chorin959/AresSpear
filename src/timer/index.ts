class Timer{
  timeout(interval: number){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      }, interval);
    });
  }

  /**
   * @description 获取两个时间的距离，忽略精度后的时间
   * @author Chorin <xiaolinxuan@foxmail.com>
   * @date 2020-06-26
   * @export
   * @param {number} startTime 开始时间的毫秒级时间戳，
   * @param {number} endTime 结束时间的毫秒级时间戳
   * @param {number} [precision=100] 精度，默认精确到100毫秒
   * @returns {number}
   */
  getTimeDistance(startTime: number, endTime: number, precision = 100): number{
    return Math.floor((endTime- startTime) / precision) * precision;
  }
}
export default new Timer();