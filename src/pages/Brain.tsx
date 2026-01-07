import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Search, Plus, Trash2, Brain as BrainIcon } from 'lucide-react';
import { formatRelative } from '../lib/utils';
import type { BrainNote } from '../types';

// Mock data
const mockNotes: BrainNote[] = [
  {
    id: '1',
    content: 'We use Tailwind CSS for all styling with a custom color palette',
    category: 'STYLE',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '2',
    content: 'Primary brand color is #4a6fa5 (Dwarven Blue)',
    category: 'BRAND',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: '3',
    content: 'All API responses should follow { success: boolean, data: any, error?: string } format',
    category: 'API',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date(Date.now() - 259200000).toISOString(),
  },
];

export const Brain: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notes] = useState<BrainNote[]>(mockNotes);

  const filteredNotes = notes.filter(
    (note) =>
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header
        title="Brain"
        subtitle="Your persistent memory for smarter builds"
      />

      <div className="p-8">
        {/* Search and Add */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-mythril-500" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-moria-700 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-mythril-100 placeholder-mythril-500 focus:outline-none focus:border-dwarven"
            />
          </div>
          <Button variant="primary">
            <Plus className="h-5 w-5" />
            Add Note
          </Button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <Card key={note.id} hover>
              <div className="flex items-start justify-between mb-3">
                {note.category && (
                  <Badge variant="info">{note.category}</Badge>
                )}
                <button className="text-mythril-600 hover:text-red-400 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <p className="text-mythril-200 text-sm leading-relaxed">
                {note.content}
              </p>
              <p className="text-mythril-600 text-xs mt-4">
                {formatRelative(note.createdAt)}
              </p>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-16">
            <BrainIcon className="h-16 w-16 text-mythril-700 mx-auto mb-4" />
            <p className="text-mythril-500">
              {searchQuery
                ? 'No notes match your search'
                : 'Your brain is empty. Add your first note!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
