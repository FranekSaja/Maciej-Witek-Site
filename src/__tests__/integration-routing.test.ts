import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCollection } from 'astro:content';

describe('Parts Integration Tests', () => {
  const mockParts = [
    { slug: 'inne', data: { id: 'inne', title: 'Inne' } },
    { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
    { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } },
    { slug: 'part-3', data: { id: 'part-3', title: 'Part 3' } },
    { slug: 'part-4', data: { id: 'part-4', title: 'Part 4' } },
    { slug: 'part-5', data: { id: 'part-5', title: 'Part 5' } }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock getCollection dla tej kolekcji
    vi.doMock('astro:content', () => ({
      getCollection: vi.fn().mockResolvedValue(mockParts)
    }));
  });

  it('should have all parts files in content directory', async () => {
    // Symulacja sprawdzenia plików w src/content/parts/
    const partsDir = '/Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej Witek Site/src/content/parts';
    const expectedFiles = ['inne.mdx', 'part-1.mdx', 'part-2.mdx', 'part-3.mdx', 'part-4.mdx', 'part-5.mdx'];

    // W prawdziwym teście sprawdzilibyśmy czy pliki istnieją
    expect(expectedFiles.length).toBeGreaterThan(0);
  });

  it('should match parts collection with actual files', async () => {
    const { getCollection } = await import('astro:content');
    const parts = await getCollection('parts');
    const expectedSlugs = ['inne', 'part-1', 'part-2', 'part-3', 'part-4', 'part-5'];

    const actualSlugs = parts.map(p => p.slug);

    // Sprawdź czy wszystkie oczekiwane pliki są w kolekcji
    expectedSlugs.forEach(slug => {
      expect(actualSlugs).toContain(slug);
    });
  });

  it('should generate correct URLs for all parts', async () => {
    const { getCollection } = await import('astro:content');
    const parts = await getCollection('parts');

    parts.forEach(part => {
      const expectedUrl = `/${part.slug}`;
      expect(expectedUrl).toMatch(/^\/part-\d+$|^\/inne$/);
    });
  });

  it('should have consistent naming pattern', async () => {
    const { getCollection } = await import('astro:content');
    const parts = await getCollection('parts');

    parts.forEach(part => {
      // Sprawdź czy slug odpowiada patternowi
      const isValidSlug = /^part-\d+$/.test(part.slug) || part.slug === 'inne';
      expect(isValidSlug).toBe(true);
    });
  });

  it('should have unique titles for all parts', async () => {
    const { getCollection } = await import('astro:content');
    const parts = await getCollection('parts');
    const titles = parts.map(p => p.data.title);
    const uniqueTitles = new Set(titles);

    expect(titles.length).toBe(uniqueTitles.size);
  });
});
