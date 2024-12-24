"use client";
interface Props {
  children: React.ReactNode;
}

function button({ children }: Props) {
  return <button onClick={() => alert("clicked")}>{children}</button>;
}

export default button;
