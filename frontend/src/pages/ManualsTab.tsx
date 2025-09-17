import { useState, useEffect } from "react";
import ManualViewer from "./ManualViewer";

type ManualsTabProps = {
  initialManual?: string; // name OR file passed in from parent (e.g. sidebar)
};

export default function ManualsTab({ initialManual }: ManualsTabProps) {
  const base = import.meta.env.BASE_URL
  const manuals = [
    { name: "Hoofdsysteem", file: `${base}docs/hoofdsysteem.html` },
    { name: "Hortitrack", file: `${base}docs/hortitrack.html` },
    { name: "Kraan", file: `${base}docs/kraan.html` },
    { name: "Lift", file: `${base}docs/lift.html` },
    { name: "Lineair Robot", file: `${base}docs/lineair.html` },
    { name: "Snel Gids", file: `${base}docs/snel-gids.html` },
    { name: "Stapelaar", file: `${base}docs/stapelaar.html` },
    { name: "Wasser 100gr", file: `${base}docs/wasser-100gr.html` },
    { name: "Wasser 180gr", file: `${base}docs/wasser-180gr.html` },
  ];

  // Find file by manual name OR fallback to first
  const findManualFile = (manualName?: string) => {
    if (!manualName) return manuals[0].file;
    const manual = manuals.find(
      (m) => m.name === manualName || m.file === manualName
    );
    return manual ? manual.file : manuals[0].file;
  };

  const [selectedManual, setSelectedManual] = useState(
    findManualFile(initialManual)
  );

  // If initialManual changes later (e.g. navigation), update selection
  useEffect(() => {
    setSelectedManual(findManualFile(initialManual));
  }, [initialManual]);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {manuals.map((m) => (
          <button
            key={m.file}
            className="manual-button"
            onClick={() => setSelectedManual(m.file)}
          >
            {m.name}
          </button>
        ))}
      </div>

      <ManualViewer file={selectedManual} />
    </div>
  );
}
