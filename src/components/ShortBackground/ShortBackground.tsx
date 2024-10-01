import "./ShortBackground.scss";

function ShortBackground({ background }: { background: string }) {
  return (
    <section
      className="short-background"
      style={{ background: `url(${background}) center/cover` }}
    />
  );
}

export default ShortBackground;
