'use client';

import { useState, useEffect } from 'react';
import PaperCard from '@/components/PaperCard';
import { Paper } from '@/types/paper';

export default function Home() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPapers = async () => {
    setLoading(true);
    // Simulated API call - replace with real API later
    const newPapers = Array.from({ length: 5 }, (_, i) => ({
      id: papers.length + i + 1,
      title: `Scientific Paper ${papers.length + i + 1}`,
      authors: ['John Doe', 'Jane Smith'],
      abstract: 'This is a simplified version of a complex scientific paper, making it accessible to the general public.',
      publishedDate: new Date().toISOString(),
      category: 'Physics',
      simplifiedAbstract: 'We discovered something amazing that could change how we understand the universe!',
    }));

    setPapers(prev => [...prev, ...newPapers]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPapers();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && !loading) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Scientific Papers Simplified
        </h1>
        <div
          className="space-y-6 overflow-y-auto max-h-[calc(100vh-12rem)]"
          onScroll={handleScroll}
        >
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
          {loading && (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
