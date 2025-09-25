import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('Menu Regression Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle new part file addition', async () => {
    const originalParts = [
      { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
      { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
    ];

    const newParts = [
      ...originalParts,
      { slug: 'part-3', data: { id: 'part-3', title: 'Part 3' } }
    ];

    (getCollection as any).mockResolvedValue(newParts);

    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs.length).toBe(4); // Start + 3 parts
    expect(tabs[3].label).toBe('Part 3');
    expect(tabs[3].href).toBe('/part-3');
  });

  it('should handle part file removal', async () => {
    const originalParts = [
      { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
      { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } },
      { slug: 'part-3', data: { id: 'part-3', title: 'Part 3' } }
    ];

    const reducedParts = originalParts.slice(0, 2); // Usuń part-3

    (getCollection as any).mockResolvedValue(reducedParts);

    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs.length).toBe(3); // Start + 2 parts
    expect(tabs.find(tab => tab.href === '/part-3')).toBeUndefined();
  });

  it('should handle title modification in frontmatter', async () => {
    const partsWithModifiedTitle = [
      { slug: 'part-1', data: { id: 'part-1', title: 'Modified Title' } },
      { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
    ];

    (getCollection as any).mockResolvedValue(partsWithModifiedTitle);

    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    const modifiedItem = tabs.find(tab => tab.href === '/part-1');
    expect(modifiedItem?.label).toBe('Modified Title');
  });

  it('should handle slug modification', async () => {
    const partsWithModifiedSlug = [
      { slug: 'new-slug', data: { id: 'new-slug', title: 'Part 1' } },
      { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
    ];

    (getCollection as any).mockResolvedValue(partsWithModifiedSlug);

    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    const modifiedItem = tabs.find(tab => tab.href === '/new-slug');
    expect(modifiedItem).toBeDefined();
    expect(modifiedItem?.label).toBe('Part 1');
  });

  it('should handle empty title in frontmatter', async () => {
    const partsWithEmptyTitle = [
      { slug: 'part-1', data: { id: 'part-1', title: '' } },
      { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
    ];

    (getCollection as any).mockResolvedValue(partsWithEmptyTitle);

    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    const emptyTitleItem = tabs.find(tab => tab.href === '/part-1');
    expect(emptyTitleItem?.label).toBe('');
  });

  it('should handle missing title in frontmatter', async () => {
    const partsWithMissingTitle = [
      { slug: 'part-1', data: { id: 'part-1' } }, // Brak title
      { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
    ];

    (getCollection as any).mockResolvedValue(partsWithMissingTitle);

    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    const missingTitleItem = tabs.find(tab => tab.href === '/part-1');
    expect(missingTitleItem?.label).toBeUndefined();
  });
});
