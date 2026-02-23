import React from 'react';

interface StepIndicatorProps {
  step: 1 | 2 | 3;
  title: string;
  description: string;
}

const stepColors = {
  1: {
    bg: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    bgLight: 'bg-blue-50 dark:bg-blue-900/20',
  },
  2: {
    bg: 'bg-violet-500',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-800',
    bgLight: 'bg-violet-50 dark:bg-violet-900/20',
  },
  3: {
    bg: 'bg-purple-500',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    bgLight: 'bg-purple-50 dark:bg-purple-900/20',
  },
};

const stepLabels = {
  1: 'הקרקע',
  2: 'הכלי',
  3: 'העומק',
};

const bloomLevels = {
  1: 'Bloom: הבנה',
  2: 'Bloom: יישום/ניתוח',
  3: 'Bloom: הערכה/יצירה',
};

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  step,
  title,
  description,
}) => {
  const colors = stepColors[step];

  return (
    <div className={`my-6 p-4 rounded-lg border-2 ${colors.border} ${colors.bgLight}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
          {step}
        </div>
        <div>
          <h4 className={`font-bold text-lg ${colors.text}`}>
            שלב {step}: {title}
          </h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {bloomLevels[step]}
          </span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

export default StepIndicator;
