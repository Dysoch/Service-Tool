import { useState } from "react";

export default function TopBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="top-bar">
            <div>
                <a href="https://htverboom.com" target="_blank">
                    <img src="/HTV_icoontje_micro.png" />
                </a>
            </div>
            <div>
                announcements variable zooi is wel leuk om ooit te hebben, soort van message van de dag, maar dan globaler dat iedereen  het kan lezen, in welke taal dan ook. geen idee hoe we dit gaan toepassen, maar komt vast goed. nou dat is mijn gezeur erover, laat ik maar weer eens verder gaan
            </div>
            <div>
                welkom message. Zou zelfdemoeten worden als hier links, maarja, dit ziet er ook niet uit 
                Gelukkig spreid het geleidelijk, maar nog niet helemaal goedcd
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
