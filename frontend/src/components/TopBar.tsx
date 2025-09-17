import { useState } from "react";

export default function TopBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="top-bar">
            <div>
                <a href="https://htverboom.com" target="_blank">
                <img src={`${import.meta.env.BASE_URL}HTV_icoontje_micro.png`} alt="HTV Icon" />
                </a>
            </div>
            <div>
                Announcements TBD
            </div>
            <div>
                Welcome Message TBD
            </div>
            <div style={{ position: 'relative' }}>
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    style={{
                        backgroundColor: '#444',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                  🌐
                </button>

                {showDropdown && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        backgroundColor: '#333',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        padding: '8px 0',
                        minWidth: '150px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                    }}>
                        <button
                            //onClick={() => { reset(); setShowDropdown(false); }}
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '8px 16px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            🇬🇧
                        </button>
                        <button
                            //onClick={handleExport}
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '8px 16px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            🇳🇱
                        </button>
                        <button
                            //onClick={handleImport}
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '8px 16px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            🇵🇱
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
