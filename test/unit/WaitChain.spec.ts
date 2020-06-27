import WaitChain from "../../src/wait_chain";
import Timer from "../../src/timer";
describe("test WaitChain", ()=>{
  it("test start", () => {   
    let startTime =  new Date().getTime();
    let times: Array<number> = [];
    return new WaitChain()
      .then(()=>{
        times.push(0);
      })
      .wait(100)
      .then(()=>{
        times.push(Timer.getTimeDistance(startTime, new Date().getTime()));
      })
      .wait(200)
      .then(()=>{
        times.push(Timer.getTimeDistance(startTime, new Date().getTime()));
      })
      .wait(100)
      .wait(100)
      .wait(200)
      .then(()=>{
        times.push(Timer.getTimeDistance(startTime, new Date().getTime()));
      })
      .then(()=>{
        expect(times).toEqual([0, 100, 300, 700]);
      })
  }); 
});