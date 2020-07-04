
const DEFAULT_LOCK_NAME  = "__lock__";
/**
 * @description 实现锁的功能
 *              关锁后需要手动开锁
 * @example let lock = new DynamicLock();
 *          if(lock.tryLock()){
 *            //TODO
 *            lock.unlock();
 *          }
 * @author Chorin <xiaolinxuan@foxmail.com>
 * @date 2020-07-04
 * @export
 * @class DynamicLock
 */
export default class DynamicLock{

  lockTabel = new Map();

  constructor(){
    this.lockTabel.set(DEFAULT_LOCK_NAME, true);
  }

  /**
   * @description 尝试获取一个锁，
   *              如果锁是关闭的则返回false，如果锁开着返回true，如果锁不存在则创建后再返回true
   * @author Chorin <xiaolinxuan@foxmail.com>
   * @date 2020-07-04
   * @param {string} [id=DEFAULT_LOCK_NAME] 锁ID
   * @returns {boolean}
   * @memberof DynamicLock
   */
  tryLock(id = DEFAULT_LOCK_NAME): boolean{
    if(this.isLocked(id)){
      return false;
    }else{
      this.lock(id);
      return true;
    }
  }

  /**
   * @description 开锁
   * @author Chorin <xiaolinxuan@foxmail.com>
   * @date 2020-07-04
   * @param {(string | number)} [idOrDelay=DEFAULT_LOCK_NAME] idOrDelay 传数值时为默认锁的延时时间，传支付时为锁ID
   * @param {number} [delay=0] 延时开锁，单位毫秒
   * @memberof DynamicLock
   */
  unlock(idOrDelay: string | number = DEFAULT_LOCK_NAME, delay: number = 0){
    let id: string = DEFAULT_LOCK_NAME;
    if(typeof idOrDelay === "string"){
      id = idOrDelay;
    }else if(typeof idOrDelay === "number"){
      delay = idOrDelay;
    }
    if(delay){
      setTimeout(()=>{
        this.lockTabel.set(id, true);
      }, delay);

    }else{
      this.lockTabel.set(id, true);
    }
  }

  /**
   * @description 销毁锁, 调用此方法可从内存中销毁锁，
   *              如果锁能复用的请调用unlock方法进行解锁
   * @author Chorin <xiaolinxuan@foxmail.com>
   * @date 2020-07-04
   * @param {*} [id=DEFAULT_LOCK_NAME]
   * @returns {boolean}
   * @memberof DynamicLock
   */
  destroyLock(id = DEFAULT_LOCK_NAME): boolean{
    return this.lockTabel.delete(id);
  }

  private lock(id: string): void{
    this.lockTabel.set(id, false);
  }

  private isLocked(id: string): boolean{
    if(!this.lockTabel.has(id)){
      this.lockTabel.set(id, true);
    }
    return !this.lockTabel.get(id);
  }
}