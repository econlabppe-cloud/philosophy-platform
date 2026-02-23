import type { MDXComponents } from 'mdx/types';
import { ReverseEngineer } from '@site/src/components/interactive/ReverseEngineer';
import { GiscusComments } from '@site/src/components/discussion/GiscusComments';
import { RelatedLessons } from '@site/src/components/navigation/RelatedLessons';
import { StepIndicator } from '@site/src/components/ui/StepIndicator';
import { GenealogyTimeline } from '@site/src/components/ui/GenealogyTimeline';

export default {
  ReverseEngineer,
  GiscusComments,
  RelatedLessons,
  StepIndicator,
  GenealogyTimeline,
} as MDXComponents;
