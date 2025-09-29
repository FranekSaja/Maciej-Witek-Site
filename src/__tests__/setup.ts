import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn((collection: string) => {
    if (collection === 'parts') {
      return [
        {
          slug: 'part-1',
          data: { id: 'part-1', title: 'Test Part 1' },
        },
        {
          slug: 'part-2',
          data: { id: 'part-2', title: 'Test Part 2' },
        },
      ];
    }
    return [];
  }),
}));
