import { describe, it, expect } from 'vitest';

// Prosty test sanity sprawdzający czy środowisko testowe działa
describe('Test Environment Sanity', () => {
  it('should work with basic assertions', () => {
    expect(1 + 1).toBe(2);
    expect('hello').toBe('hello');
  });

  it('should support async tests', async () => {
    const result = await Promise.resolve('async test');
    expect(result).toBe('async test');
  });

  it('should support array operations', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    expect(arr).toContain(2);
  });
});
