'use client';

import { eras } from '@/data/eras';
import { categories } from '@/data/vibes';
import type { PortalFilters, SeedCategory } from '@/types';

interface FilterBarProps {
  filters: PortalFilters;
  onChange: (filters: PortalFilters) => void;
  chaosMode: boolean;
  onChaosToggle: () => void;
}

const selectClass =
  'bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs px-3 py-2 font-mono ' +
  'focus:outline-none focus:border-zinc-500 hover:border-zinc-600 transition-colors ' +
  'disabled:opacity-40 disabled:cursor-not-allowed';

export function FilterBar({ filters, onChange, chaosMode, onChaosToggle }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center px-4 py-2">
      <select
        value={filters.eraId ?? ''}
        onChange={e =>
          onChange({ ...filters, eraId: e.target.value || undefined })
        }
        disabled={chaosMode}
        className={selectClass}
        aria-label="Filter by era"
      >
        <option value="">Any Era</option>
        {eras.map(era => (
          <option key={era.id} value={era.id}>
            {era.label}
          </option>
        ))}
      </select>

      <select
        value={filters.category ?? ''}
        onChange={e =>
          onChange({
            ...filters,
            category: (e.target.value as SeedCategory) || undefined,
          })
        }
        disabled={chaosMode}
        className={selectClass}
        aria-label="Filter by category"
      >
        <option value="">Any Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button
        onClick={onChaosToggle}
        className={
          'text-xs px-3 py-2 border font-mono tracking-wider transition-all ' +
          (chaosMode
            ? 'border-amber-500/60 text-amber-400 bg-amber-500/10 hover:bg-amber-500/20'
            : 'border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300')
        }
        title="Chaos Mode ignores all filters and picks any site from any era"
      >
        {chaosMode ? '⚡ CHAOS' : 'Chaos Mode'}
      </button>
    </div>
  );
}
