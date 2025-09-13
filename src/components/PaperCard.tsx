import { Paper } from '@/types/paper';

interface PaperCardProps {
    paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {paper.category}
                </span>
                <span className="text-sm text-gray-500">
                    {new Date(paper.publishedDate).toLocaleDateString()}
                </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {paper.title}
            </h2>

            <p className="text-sm text-gray-600 mb-3">
                By {paper.authors.join(', ')}
            </p>

            <div className="space-y-3">
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Simplified Summary</h3>
                    <p className="text-gray-600">{paper.simplifiedAbstract}</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Original Abstract</h3>
                    <p className="text-gray-600">{paper.abstract}</p>
                </div>
            </div>
        </div>
    );
} 