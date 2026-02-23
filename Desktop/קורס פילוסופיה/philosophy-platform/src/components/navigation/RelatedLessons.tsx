import React from 'react';

interface RelatedLink {
  path: string;
  title: string;
  relevance?: string;
  connection?: string;
}

interface RelatedLessonsProps {
  chronological?: RelatedLink[];
  thematic?: RelatedLink[];
}

export const RelatedLessons: React.FC<RelatedLessonsProps> = ({
  chronological = [],
  thematic = [],
}) => {
  if (chronological.length === 0 && thematic.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        קישורים קשורים
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {chronological.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">
              📚 מסלול כרונולוגי
            </h4>
            {chronological.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className="block p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <span className="font-medium text-blue-900 dark:text-blue-100">
                  {link.title}
                </span>
                {link.relevance && (
                  <span className="block text-sm text-blue-600 dark:text-blue-300 mt-1">
                    {link.relevance}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
        
        {thematic.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wide text-purple-600 dark:text-purple-400 font-semibold">
              🔮 מסלול תמטי
            </h4>
            {thematic.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className="block p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <span className="font-medium text-purple-900 dark:text-purple-100">
                  {link.title}
                </span>
                {link.connection && (
                  <span className="block text-sm text-purple-600 dark:text-purple-300 mt-1">
                    {link.connection}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedLessons;
