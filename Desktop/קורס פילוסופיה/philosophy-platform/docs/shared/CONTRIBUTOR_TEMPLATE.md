# תבנית לכתיבת שיעור תמטי

## רשימת בדיקה (חובה)

### שלב 1: הקרקע (Bloom: הבנה)
- [ ] הצגת הקונפליקט הפילוסופי המרכזי
- [ ] הסבר ברור ונגיש
- [ ] גנאלוגיה היסטורית של הרעיון (מקורות + התפתחות)
- [ ] קישורים לשיעורים כרונולוגיים רלוונטיים

### שלב 2: הכלי (Bloom: יישום/ניתוח)
- [ ] חפץ מודרני לניתוח (כותרת/ציטוט/מדיניות/סיסמה)
- [ ] רכיב ReverseEngineer מוטמע עם:
  - [ ] לפחות 3-4 אפשרויות בחירה
  - [ ] פירוש פילוסופי לכל אפשרות
  - [ ] זיהוי המסורת והשורש הפילוסופי
- [ ] סיכום הלמידה מהניתוח

### שלב 3: העומק (Bloom: הערכה/יצירה)
- [ ] שאלות הרהור אישי (לא רק עובדתיות)
- [ ] שאלת דיון פתוחה לקהילה
- [ ] רכיב GiscusComments מוטמע

### קישורים צולבים
- [ ] relatedChronological ב-frontmatter
- [ ] relatedThematic ב-frontmatter
- [ ] קישורים בתוך הטקסט לשיעורים רלוונטיים

### מטא-דאטה
- [ ] רמת Bloom ב-frontmatter
- [ ] רמת קושי
- [ ] מסלול (identity/politics/technology/ethics)

---

## תבנית Frontmatter

```yaml
---
title: "כותרת השיעור"
description: "תיאור קצר"
slug: /thematic/[track]/[filename]
type: thematic
track: identity | politics | technology | ethics
difficulty: beginner | intermediate | advanced
bloomsLevel: 
  - understanding
  - applying
  - evaluating

relatedChronological:
  - path: /docs/chronological/[era]/[philosopher]/[component]
    title: "כותרת הקישור"
    relevance: "מה הקשר לשיעור זה"

relatedThematic:
  - path: /docs/thematic/[track]/[lesson]
    title: "כותרת הקישור"
    connection: "מה הקשר לשיעור זה"
---
```

---

## תבנית גוף השיעור

```mdx
import { ReverseEngineer } from '@site/src/components/interactive/ReverseEngineer';
import { GiscusComments } from '@site/src/components/discussion/GiscusComments';
import { RelatedLessons } from '@site/src/components/navigation/RelatedLessons';
import { GenealogyTimeline } from '@site/src/components/ui/GenealogyTimeline';
import { StepIndicator } from '@site/src/components/ui/StepIndicator';

# כותרת השיעור

<StepIndicator step={1} title="הקרקע" description="תיאור קצר" />

## שלב ראשון: הקרקע

### שאלת היסוד
[הצג את הקונפליקט הפילוסופי]

### הגנאלוגיה של הרעיון
<GenealogyTimeline
  events={[
    {
      era: 'תקופה',
      philosopher: 'שם ההוגה',
      idea: 'תיאור הרעיון',
      link: '/docs/chronological/...'
    },
    // הוסף אירועים נוספים
  ]}
/>

### [נושא משנה 1]
[הסבר מעמיק]

### [נושא משנה 2]
[הסבר מעמיק]

---

<StepIndicator step={2} title="הכלי" description="הנדסה לאחור" />

## שלב שני: הכלי

<ReverseEngineer
  prompt="הנחיה למשתמש"
  artifact={{
    type: 'headline' | 'quote' | 'policy' | 'slogan',
    content: 'תוכן הטענה',
    source: 'מקור'
  }}
  choices={[
    {
      id: 'unique-id',
      label: 'תווית האפשרות',
      explanation: 'הפירוש הפילוסופי',
      philosophicalRoot: 'השורש הפילוסופי',
      tradition: 'המסורת'
    },
    // הוסף אפשרויות נוספות
  ]}
  showAllMode={true}
/>

---

<StepIndicator step={3} title="העומק" description="הרהור ודיון" />

## שלב שלישי: העומק

### הרהור אישי

> **שאלות להרהור:**
> 1. [שאלה אישית]
> 2. [שאלה רפלקטיבית]
> 3. [שאלה מעמיקה]

<GiscusComments />

---

<RelatedLessons 
  chronological={frontMatter.relatedChronological}
  thematic={frontMatter.relatedThematic}
/>
```
