import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

function Link({ page }: Props) {
  const lowerCasePage = page.toLowerCase().replace(" ", "");
  return (
    <AnchorLink href={`#${lowerCasePage}`} onClick={} className="">
      {page}
    </AnchorLink>
  );
}

export default Link;
