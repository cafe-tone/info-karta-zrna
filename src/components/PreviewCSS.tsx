import { useState } from "react";

const initialData = {
  name: "Suto due",
  country: "Etiopie",
  taste1: "Chuť 1",
  taste2: "Chuť 2",
  taste3: "Chuť 3",
};

export default function PreviewCSS() {
  const [data, setData] = useState(initialData);

  return (
    <div id="preview-card">
      <div className="name-headers">
        <NameHeader label="Název" value={data.name} />
        <NameHeader label="Země původu" value={data.country} />
      </div>

      <svg width="100%" height="2">
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#000000" strokeWidth="1" />
      </svg>

      <div id="taste-section">
        <h2>Chuťový profil</h2>
        <p>{data.taste1}</p>
        <p>{data.taste2}</p>
        <p>{data.taste3}</p>
      </div>
    </div>
  );
}

type NameHeaderProps = {
  label: string;
  value: string;
};

function NameHeader({ label, value }: NameHeaderProps) {
  return (
    <div className="name-header">
      <h1>{label}</h1>
      <p>{value}</p>
    </div>
  );
}
