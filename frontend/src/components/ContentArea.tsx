import type { TabType } from '../types/tabs'
import ManualViewer from '../pages/manuals'

interface ContentAreaProps {
    activeTab: TabType
    setIsLoggedIn: (val: boolean) => void
}

export default function ContentArea({ activeTab, setIsLoggedIn }: ContentAreaProps) {
    switch (activeTab) {
        case 'FAQ':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>FAQ</h1>
                    <h2>Coming Soon</h2>
                </div>
            )

        case 'Contact':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Contact Page</h1>
                    <h2>Coming Soon</h2>
                </div>
            )

        case 'Manuals':
            return (
                <div>
                    <h1>Manuals Page</h1>
                    <h2>Coming Soon</h2>
                    <ManualViewer />
                </div>
            )

        case 'Settings':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Settings Page</h1>
                    <h2>Coming Soon</h2>
                </div>
            )

        case 'Register':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Register Page</h1>
                    <h2>Coming Soon</h2>
                </div>
            )

        case 'Login':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Login Page</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            // TODO: replace with real auth
                            setIsLoggedIn(true)
                        }}
                    >
                        <div>
                            <label>
                                Username: <input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password: <input type="password" />
                            </label>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            )

        case 'Logout':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Logout</h1>
                    <button onClick={() => setIsLoggedIn(false)}>Confirm Logout</button>
                </div>
            )

        default:
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>HTV Service Tool</h1>
                    <p>This should not be visible normally.</p>
                </div>
            )
    }
}
