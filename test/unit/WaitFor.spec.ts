import WaitFor from "../../src/wait_for";
import Timer from "../../src/timer";

describe("test WaitFor", ()=>{
  let time = 0;
  it("test start", async () => {
    let startTime = new Date().getTime();
    await new WaitFor(()=>{
      let endTime = new Date().getTime();
      return endTime - startTime > 1000;
    })
    .then(()=>{
      time = Timer.getTimeDistance(startTime, new Date().getTime());
      expect(time).toEqual(1000);
      return Timer.timeout(200);
    })
    .then(()=>{
      time = Timer.getTimeDistance(startTime, new Date().getTime());
      expect(time).toEqual(1200);
    });
  });
});