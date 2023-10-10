import { Locale } from "../../i18n.config";
import { getDictionary } from "../libs/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

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
