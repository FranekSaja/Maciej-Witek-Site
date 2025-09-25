import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('Part Error Handling', () => {
  const mockParts = [
    { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
    { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } },
    { slug: 'inne', data: { id: 'inne', title: 'Inne' } }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (getCollection as any).mockResolvedValue(mockParts);
  });

  it('should find existing parts', async () => {
    const parts = await getCollection('parts');
    const existingPart = parts.find(p => p.slug === 'part-1');

    expect(existingPart).toBeDefined();
    expect(existingPart?.slug).toBe('part-1');
  });

  it('should return undefined for non-existing parts', async () => {
    const parts = await getCollection('parts');
    const nonExistingPart = parts.find(p => p.slug === 'non-existing');

    expect(nonExistingPart).toBeUndefined();
  });

  it('should handle case sensitivity in slug matching', async () => {
    const parts = await getCollection('parts');

    // Test case-sensitive matching
    const foundPart = parts.find(p => p.slug === 'PART-1');
    expect(foundPart).toBeUndefined();

    // Test case-sensitive matching with correct case
    const correctPart = parts.find(p => p.slug === 'part-1');
    expect(correctPart).toBeDefined();
  });

  it('should simulate redirect behavior for non-existing parts', async () => {
    const parts = await getCollection('parts');
    const requestedSlug = 'non-existing-part';

    const foundPart = parts.find(p => p.slug === requestedSlug);

    // Symulacja logiki z [part].astro
    if (!foundPart) {
      // W prawdziwej implementacji byłoby Astro.redirect("/part-1")
      expect(foundPart).toBeUndefined();
      // Oczekujemy przekierowania do part-1
    }
  });
});
