import figmaLogo from "../../assets/figma.png";

interface PagePanelProps {
  name: string;
}

export default function PagePanel(props: PagePanelProps) {
  const { name } = props;
  return (
    <>
      <div className="website-content">
        <h1>{name}</h1>
        <p className="website-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src={figmaLogo} className="website-picture" alt="Figma logo" />
    </>
  );
}
