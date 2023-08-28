import { usePageContext } from "@/context/usePageContext";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

const Link = ({ 
  page
 }: Props) => {
  const { selectedPage, setSelectedPage} = usePageContext();
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage ;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : "" }
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
