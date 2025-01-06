/* eslint-disable dot-notation */
import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    service = new TimeService();
    jest.useFakeTimers(); 
  });

  afterEach(() => {
    jest.clearAllTimers(); 
  });

  it('should initialize with startTime = 0', () => {
    expect(service['startTime']).toBe(0);
  });

  it('should return elapsed time in seconds', () => {
    service['startTime'] = Date.now() - 5000;
    
    expect(service.updateElapsedTime).toBe(5);
  });

  it('should start the test and update startTime', () => {
    service.startTest();
    
    expect(service['startTime']).toBeGreaterThan(0);
  });

  it('should periodically call updateElapsedTime', () => {
    jest.spyOn(service, 'updateElapsedTime', 'get'); 
    
    service.startTest();
    jest.advanceTimersByTime(3000);
    
    expect(service.updateElapsedTime).toBeDefined();
    expect(service.updateElapsedTime).toBeGreaterThan(0);
  });

  it('should return the final elapsed time', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'clearInterval'); 
  
    service.startTest(); 
    jest.advanceTimersByTime(14000);
  
    const elapsedTime = service.finishTest();
  
    expect(elapsedTime).toBe(14); 
    expect(clearInterval).toHaveBeenCalled(); 
    
    jest.useRealTimers(); 
  });

  it('should correctly format time for minutes and seconds', () => {
    expect(service.formatTime(10)).toBe('10 sec');
    expect(service.formatTime(70)).toBe('1 min 10 sec');
    expect(service.formatTime(120)).toBe('2 min 0 sec');
  });
});
