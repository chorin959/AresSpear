/**
 * @description 
 * @example new WaitChain()
 *          .then(()=>{})
 *          .wait(20)
 *          .then(()=>{})
 *          .wait(30)
 *          .then(()=>{})
 * @author Chorin <xiaolinxuan@foxmail.com>
 * @date 2020-06-25
 * @export
 * @class WaitChain
 */
export default class  WaitChain{

  resolve_ = Promise.resolve();

  wait(interval: number): WaitChain{
    this.resolve_ = this.resolve_.then(()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        }, interval);
      });
    });
    return this;
  }

  then(cb: Function): WaitChain{
    this.resolve_ = this.resolve_.then(()=>{
      return new Promise((resolve)=>{
        cb();
        resolve();
      });
    });
    return this;
  }

}
