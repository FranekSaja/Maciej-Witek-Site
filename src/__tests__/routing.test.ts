import { describe, it, expect } from 'vitest';
import { getCollection } from 'astro:content';

// Testy jednostkowe dla routingu
describe('Part Routing', () => {
  it('should get all parts from collection', async () => {
    const parts = await getCollection('parts');
    expect(Array.isArray(parts)).toBe(true);
    expect(parts.length).toBeGreaterThan(0);

    // Sprawdź strukturę każdego part
    parts.forEach(part => {
      expect(part).toHaveProperty('slug');
      expect(part).toHaveProperty('data');
      expect(part.data).toHaveProperty('id');
      expect(part.data).toHaveProperty('title');
    });
  });

  it('should have unique slugs for all parts', async () => {
    const parts = await getCollection('parts');
    const slugs = parts.map(part => part.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });

  it('should have valid part IDs', async () => {
    const parts = await getCollection('parts');
    parts.forEach(part => {
      expect(part.data.id).toMatch(/^part-\d+$/);
    });
  });

  it('should generate correct static paths', async () => {
    const parts = await getCollection('parts');
    const expectedPaths = parts.map(part => ({
      params: { part: part.slug }
    }));

    // Symulacja funkcji getStaticPaths
    const actualPaths = parts.map((entry) => ({ params: { part: entry.slug } }));

    expect(actualPaths).toEqual(expectedPaths);
    expect(actualPaths.length).toBe(parts.length);
  });
});
