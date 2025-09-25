import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('Menu Integration Tests', () => {
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
    (getCollection as any).mockResolvedValue(mockParts);
  });

  it('should include all parts in menu', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    // Sprawdź czy wszystkie części są w menu
    mockParts.forEach(part => {
      const menuItem = tabs.find(tab => tab.href === `/${part.slug}`);
      expect(menuItem).toBeDefined();
      expect(menuItem?.label).toBe(part.data.title);
    });
  });

  it('should have correct menu order', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    // Sprawdź kolejność
    expect(tabs[0].label).toBe('Start');
    expect(tabs[1].label).toBe('Inne');
    expect(tabs[2].label).toBe('Part 1');
    expect(tabs[3].label).toBe('Part 2');
    expect(tabs[4].label).toBe('Part 3');
    expect(tabs[5].label).toBe('Part 4');
    expect(tabs[6].label).toBe('Part 5');
  });

  it('should have correct number of menu items', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs.length).toBe(7); // 1 Start + 6 parts
  });

  it('should generate valid URLs for all menu items', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    tabs.forEach(tab => {
      // Główna strona lub strony z literami, cyframi i myślnikami
      expect(tab.href).toMatch(/^\/[a-z0-9-]*$/);
      expect(tab.href.length).toBeGreaterThan(0);
    });
  });

  it('should have unique hrefs for all menu items', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    const hrefs = tabs.map(tab => tab.href);
    const uniqueHrefs = new Set(hrefs);

    expect(hrefs.length).toBe(uniqueHrefs.size);
  });

  it('should have unique labels for all menu items', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    const labels = tabs.map(tab => tab.label);
    const uniqueLabels = new Set(labels);

    expect(labels.length).toBe(uniqueLabels.size);
  });
});
