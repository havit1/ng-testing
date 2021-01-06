import { compute } from './compute';

describe('compute', () => {
  it('should return zero if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it("should increment the input if it's positive", () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
