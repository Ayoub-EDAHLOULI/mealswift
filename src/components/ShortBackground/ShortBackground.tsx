import React from "react";
import "./ShortBackground.scss";

function ShortBackground({
  title,
  background,
}: {
  title: string;
  background: string;
}) {
  return (
    <section
      className="short-background"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background}) center/cover`,
      }}
    >
      <h1>{title}</h1>
    </section>
  );
}

export default ShortBackground;
