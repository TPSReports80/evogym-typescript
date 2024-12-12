import { SelectedPage } from "@/share/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(" ", "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`transition duration-500 hover:text-primary-300 ${selectedPage === lowerCasePage ? "text-primary-500" : ""}`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
