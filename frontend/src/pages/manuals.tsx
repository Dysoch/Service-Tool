import { useEffect, useState } from "react";

export default function ManualViewer() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/docs/snel-gids.html")
            .then(res => res.text())
            .then(setContent);
    }, []);

    return (
        <div
            style={{ padding: "20px", textAlign: "left" }}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
