import React, { useState } from 'react';

interface Choice {
  id: string;
  label: string;
  explanation: string;
  philosophicalRoot: string;
  tradition: string;
}

interface ReverseEngineerProps {
  prompt: string;
  artifact?: {
    type: 'headline' | 'quote' | 'policy' | 'slogan';
    content: string;
    source?: string;
  };
  choices: Choice[];
  showAllMode?: boolean;
  className?: string;
}

export const ReverseEngineer: React.FC<ReverseEngineerProps> = ({
  prompt,
  artifact,
  choices,
  showAllMode = false,
  className = '',
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const selectedChoice = choices.find((c) => c.id === selectedId);

  const artifactLabels = {
    headline: 'כותרת',
    quote: 'ציטוט',
    policy: 'הצהרת מדיניות',
    slogan: 'סיסמה',
  };

  return (
    <div className={`my-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden ${className}`}>
      <div className="bg-gradient-to-l from-violet-500 to-purple-600 px-6 py-4">
        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="text-2xl">🔧</span>
          כלי ניתוח: הנדסה לאחור
        </h4>
      </div>

      <div className="p-6">
        {artifact && (
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-r-4 border-violet-500">
            <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 block">
              {artifactLabels[artifact.type]}
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white italic">
              "{artifact.content}"
            </p>
            {artifact.source && (
              <span className="text-sm text-gray-500 mt-2 block">
                — {artifact.source}
              </span>
            )}
          </div>
        )}

        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          {prompt}
        </p>

        <div className="space-y-3 mb-6">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => setSelectedId(choice.id)}
              className={`w-full text-right p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedId === choice.id
                  ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/30'
                  : 'border-gray-200 dark:border-gray-600 hover:border-violet-300 dark:hover:border-violet-500'
              }`}
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {choice.label}
              </span>
            </button>
          ))}
        </div>

        {selectedChoice && (
          <div className="mt-6 p-5 bg-gradient-to-bl from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg border border-violet-200 dark:border-violet-700">
            <h5 className="font-semibold text-violet-800 dark:text-violet-300 mb-3 flex items-center gap-2">
              <span>💡</span> הפירוש הפילוסופי
            </h5>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedChoice.explanation}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-violet-100 dark:bg-violet-800 text-violet-700 dark:text-violet-200 rounded-full text-sm font-medium">
                מסורת: {selectedChoice.tradition}
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-sm font-medium">
                שורש: {selectedChoice.philosophicalRoot}
              </span>
            </div>
          </div>
        )}

        {showAllMode && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-sm text-violet-600 dark:text-violet-400 hover:underline"
          >
            {showAll ? 'הסתר כל הפירושים' : 'הצג כל הפירושים (מצב עורך)'}
          </button>
        )}

        {showAll && showAllMode && (
          <div className="mt-4 space-y-4">
            {choices.map((choice) => (
              <div key={choice.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  {choice.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {choice.explanation}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReverseEngineer;
