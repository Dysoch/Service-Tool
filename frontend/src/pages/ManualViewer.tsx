import { useEffect, useState } from "react";

type ManualViewerProps = {
  file: string; // relative path like "/docs/manual1.html"
};

export default function ManualViewer({ file }: ManualViewerProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!file) return;
    fetch(file)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("<p>Could not load manual.</p>"));
  }, [file]);

  return (
    <div
      style={{ padding: "20px", textAlign: "left" }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}