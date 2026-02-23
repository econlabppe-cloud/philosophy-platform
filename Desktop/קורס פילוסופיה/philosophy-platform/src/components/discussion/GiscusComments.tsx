import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

interface GiscusCommentsProps {
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
  mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific';
  term?: string;
}

const defaultProps: GiscusCommentsProps = {
  repo: 'YOUR_USERNAME/philosophy-platform',
  repoId: 'YOUR_REPO_ID',
  category: 'Announcements',
  categoryId: 'YOUR_CATEGORY_ID',
  mapping: 'pathname',
};

export const GiscusComments: React.FC<GiscusCommentsProps> = (props) => {
  const { colorMode } = useColorMode();
  const config = { ...defaultProps, ...props };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span>💬</span>
        שיחה והרהור
      </h3>
      <Giscus
        repo={config.repo as `${string}/${string}`}
        repoId={config.repoId!}
        category={config.category!}
        categoryId={config.categoryId!}
        mapping={config.mapping!}
        term={config.term}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="he"
        loading="lazy"
      />
    </div>
  );
};

export default GiscusComments;
