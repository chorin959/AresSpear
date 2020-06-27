import Timer from "../../src/timer";

describe("test WaitChain", ()=>{
  it("test timeout()", async () => {
    let startTime = new Date().getTime();
    await Timer.timeout(400);
    let time = Timer.getTimeDistance(startTime, new Date().getTime());
    expect(time).toEqual(400);

  });

  it("test getTimeDistance()", ()=>{
    let time1 = Timer.getTimeDistance(2000, 4000);
    let time2 = Timer.getTimeDistance(2333, 4222);
    let time3 = Timer.getTimeDistance(2345, 4567, 10);
    expect(time1).toEqual(2000);
    expect(time2).toEqual(1800);
    expect(time3).toEqual(2220);
  });
});