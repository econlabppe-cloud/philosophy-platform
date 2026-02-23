import React from 'react';

interface GenealogyEvent {
  era: string;
  philosopher: string;
  idea: string;
  link?: string;
}

interface GenealogyTimelineProps {
  events: GenealogyEvent[];
}

export const GenealogyTimeline: React.FC<GenealogyTimelineProps> = ({
  events,
}) => {
  return (
    <div className="my-8 relative">
      <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500"></div>
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="relative pr-12">
            <div className="absolute right-2 w-5 h-5 bg-white dark:bg-gray-800 border-2 border-violet-500 rounded-full"></div>
            
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs font-semibold rounded">
                  {event.era}
                </span>
                {event.link ? (
                  <a 
                    href={event.link}
                    className="font-bold text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    {event.philosopher}
                  </a>
                ) : (
                  <span className="font-bold text-gray-900 dark:text-white">
                    {event.philosopher}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {event.idea}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenealogyTimeline;
