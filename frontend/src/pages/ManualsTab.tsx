import { useState, useEffect } from "react";
import ManualViewer from "./ManualViewer";

type ManualsTabProps = {
  initialManual?: string; // name OR file passed in from parent (e.g. sidebar)
};

export default function ManualsTab({ initialManual }: ManualsTabProps) {
  const manuals = [
    { name: "hoofdsysteem", file: "/docs/hoofdsysteem.html" },
    { name: "hortitrack", file: "/docs/hortitrack.html" },
    { name: "kraan", file: "/docs/kraan.html" },
    { name: "lift", file: "/docs/lift.html" },
    { name: "lineair", file: "/docs/lineair.html" },
    { name: "snel-gids", file: "/docs/snel-gids.html" },
    { name: "stapelaar", file: "/docs/stapelaar.html" },
    { name: "wasser-100gr", file: "/docs/wasser-100gr.html" },
    { name: "wasser-180gr", file: "/docs/wasser-180gr.html" },
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
