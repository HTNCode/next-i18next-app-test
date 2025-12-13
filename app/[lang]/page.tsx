import { Locale } from "../../i18n.config";
import { getDictionary } from "../libs/dictionary";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const { page } = await getDictionary(lang as Locale);

  if (!page) return null;

  return (
    <>
      <div className="main_container">
        <section>
          <h1>{page.home.title}</h1>
          <p>{page.home.description}</p>
        </section>
      </div>
    </>
  );
}
