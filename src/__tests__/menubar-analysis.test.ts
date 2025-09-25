import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('MenuBar Component Analysis', () => {
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

  it('should generate menu structure with correct tabs', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    // Sprawdź czy pierwszy element to Start
    expect(tabs[0]).toEqual({ href: '/', label: 'Start' });

    // Sprawdź czy pozostałe elementy odpowiadają częściom
    for (let i = 1; i < tabs.length; i++) {
      const partIndex = i - 1;
      expect(tabs[i].href).toBe(`/${mockParts[partIndex].slug}`);
      expect(tabs[i].label).toBe(mockParts[partIndex].data.title);
    }
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

    expect(tabs.length).toBe(mockParts.length + 1); // +1 dla elementu 'Start'
  });

  it('should generate correct hrefs for all parts', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    // Sprawdź wszystkie hrefy
    const expectedHrefs = ['/', '/inne', '/part-1', '/part-2', '/part-3', '/part-4', '/part-5'];
    tabs.forEach((tab, index) => {
      expect(tab.href).toBe(expectedHrefs[index]);
    });
  });

  it('should generate correct labels for all parts', async () => {
    const parts = await getCollection('parts');
    const tabs = [
      { href: '/', label: 'Start' },
      ...parts.map((entry) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    // Sprawdź wszystkie etykiety
    const expectedLabels = ['Start', 'Inne', 'Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5'];
    tabs.forEach((tab, index) => {
      expect(tab.label).toBe(expectedLabels[index]);
    });
  });
});
