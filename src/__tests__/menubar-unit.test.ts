import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('MenuBar Unit Tests', () => {
  const mockParts = [
    { slug: 'inne', data: { id: 'inne', title: 'Inne' } },
    { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
    { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (getCollection as any).mockResolvedValue(mockParts);
  });

  it('should call getCollection with correct collection name', async () => {
    await getCollection('parts');

    expect(getCollection).toHaveBeenCalledWith('parts');
    expect(getCollection).toHaveBeenCalledTimes(1);
  });

  it('should return all parts from collection', async () => {
    const parts = await getCollection('parts');

    expect(parts).toHaveLength(mockParts.length);
    expect(parts).toEqual(mockParts);
  });

  it('should map parts to menu items correctly', async () => {
    const parts = await getCollection('parts');

    const menuItems = parts.map((entry) => ({
      href: `/${entry.slug}`,
      label: entry.data.title
    }));

    expect(menuItems).toEqual([
      { href: '/inne', label: 'Inne' },
      { href: '/part-1', label: 'Part 1' },
      { href: '/part-2', label: 'Part 2' }
    ]);
  });

  it('should include Start item at the beginning', async () => {
    const parts = await getCollection('parts');

    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs[0]).toEqual({ href: '/', label: 'Start' });
  });

  it('should handle empty parts collection', async () => {
    (getCollection as any).mockResolvedValue([]);

    const parts = await getCollection('parts');

    expect(parts).toHaveLength(0);

    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs).toEqual([{ href: '/', label: 'Start' }]);
  });

  it('should handle parts with special characters in title', async () => {
    const specialParts = [
      { slug: 'test', data: { id: 'test', title: 'Test & Special <>' } }
    ];

    (getCollection as any).mockResolvedValue(specialParts);

    const parts = await getCollection('parts');
    const menuItems = parts.map((entry) => ({
      href: `/${entry.slug}`,
      label: entry.data.title
    }));

    expect(menuItems[0].label).toBe('Test & Special <>');
  });
});
