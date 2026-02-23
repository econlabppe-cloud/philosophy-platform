import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

interface FeatureItem {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
  linkText: string;
  color: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'מסלול כרונולוגי',
    emoji: '📚',
    description: (
      <>
        פילוסופים כמערכות שלמות. מסע מאפיסטמולוגיה דרך מטפיזיקה ואתיקה עד פוליטיקה.
        הבן את השושלת האינטלקטואלית של כל הוגה.
      </>
    ),
    link: '/docs/chronological/ancient/aristotle',
    linkText: 'התחל במסלול הכרונולוגי',
    color: 'blue',
  },
  {
    title: 'מסלול תמטי',
    emoji: '🔮',
    description: (
      <>
        מעבדת דילמות להנדסה לאחור של המציאות. קח טענה מודרנית וגלה את ההנחות
        הפילוסופיות הסמויות שבבסיסה.
      </>
    ),
    link: '/docs/thematic/identity/feminism-gender-locke-aristotle',
    linkText: 'התחל במסלול התמטי',
    color: 'purple',
  },
  {
    title: 'קהילה ודיון',
    emoji: '💬',
    description: (
      <>
        כל שיעור מסתיים בדיון פתוח. שתף את המחשבות שלך, התמודד עם עמדות שונות,
        והעמיק את ההבנה דרך דיאלוג.
      </>
    ),
    link: 'https://github.com/your-username/philosophy-platform/discussions',
    linkText: 'הצטרף לדיון',
    color: 'green',
  },
];

function Feature({title, emoji, description, link, linkText, color}: FeatureItem) {
  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700',
    green: 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
  };

  return (
    <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className={`inline-block text-center py-2 px-4 rounded-lg text-white font-medium bg-gradient-to-r ${colorClasses[color]} transition-all`}
      >
        {linkText} →
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero hero--primary bg-gradient-to-r from-violet-600 to-purple-700 py-16">
      <div className="container text-center">
        <Heading as="h1" className="hero__title text-5xl font-bold text-white mb-4">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text-xl text-violet-100 mb-8">{siteConfig.tagline}</p>
        <div className="flex justify-center gap-4">
          <Link
            className="button button--secondary button--lg"
            to="/docs/thematic/identity/feminism-gender-locke-aristotle">
            התחל ללמוד
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="בית"
      description="פלטפורמת למידה אינטראקטיבית לפילוסופיה - מסלול כרונולוגי ומסלול תמטי">
      <HomepageHeader />
      <main className="py-16">
        <div className="container">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              שני מסלולים, מטרה אחת
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              פילוסופיה אינה רק היסטוריה של רעיונות — היא כלי להבנת העולם שבו אנחנו חיים.
              בחר את המסלול שמתאים לך, או שלב ביניהם.
            </p>
          </section>
          
          <section className="grid md:grid-cols-3 gap-8 mb-16">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </section>

          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              המשפך הפדגוגי
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">הקרקע</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  הבן את הקונפליקט הפילוסופי ואת הגנאלוגיה ההיסטורית שלו
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">הכלי</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  הנדס לאחור טענה מודרנית וחשוף את ההנחות הסמויות
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🪞</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">העומק</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  הפנה את המבט פנימה והשתתף בדיון קהילתי
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
