import { getDictionary } from "@/app/libs/dictionary";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
