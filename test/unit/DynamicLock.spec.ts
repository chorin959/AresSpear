import DynamicLock from "../../src/dynamic_lock";
import Timer from "../../src/timer";
describe("test DynamicLock", ()=>{
  it("test tryLock() case 1", () => {
    let lock = new DynamicLock();

    expect(lock.tryLock()).toEqual(true);
    lock.unlock();

    if(lock.tryLock()){
      expect(lock.tryLock()).toEqual(false);
      lock.unlock();
      expect(lock.tryLock()).toEqual(true);
    }     

    if(lock.tryLock("lock1")){
      expect(lock.tryLock("lock1")).toEqual(false);
      lock.unlock("lock1");
      expect(lock.tryLock("lock1")).toEqual(true);
    }
    
    expect(lock.tryLock()).toEqual(false);
    expect(lock.tryLock("lock1")).toEqual(false);

  });

  it("test tryLock() case 2", async () => {
    let lock = new DynamicLock();
    let n  = 0;
    if(lock.tryLock()){
      n = 1;
      lock.unlock(100);
    }
    /// before unlock
    if(lock.tryLock()){
      n = 2;
    }
    if(lock.tryLock()){
      n = 3;
    }
    expect(n).toEqual(1);

    /// after unlock
    await Timer.timeout(200);
    if(lock.tryLock()){
      n = 4;
    }
    expect(n).toEqual(4);
    return;
  });

  it("test tryLock() case 3", async () => {
    let lock = new DynamicLock();
    expect(lock.tryLock()).toEqual(true);
    lock.destroyLock();
    expect(lock.tryLock()).toEqual(true);
  });
});