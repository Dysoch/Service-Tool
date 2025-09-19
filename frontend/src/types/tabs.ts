export type TabType = 'FAQ' | 'Contact' | 'Manuals' | 'User' | 'Company' | 'Settings' | 'Register' | 'Login' | 'Logout'

export interface Tab {
  id: TabType
  label: string
  icon: string
  section: 'top' | 'middle' | 'bottom'
  visibleFor?: 'all' | 'loggedIn' | 'Admin' | 'HTV' | 'loggedOut'
}

export const tabs: Tab[] = [
  { id: 'FAQ', label: 'sidebar.faq', icon: '❓', section: 'top', visibleFor: 'loggedIn' },
  { id: 'Contact', label: 'sidebar.contact', icon: '📞', section: 'top', visibleFor: 'loggedIn' },
  { id: 'Manuals', label: 'sidebar.manuals', icon: '📝', section: 'top', visibleFor: 'loggedIn' },
  { id: 'User', label: 'sidebar.userinfo', icon: 'TBD x ', section: 'top', visibleFor: 'loggedIn' },
  { id: 'Company', label: 'sidebar.companyinfo', icon: 'TBD x ', section: 'top', visibleFor: 'loggedIn' },
  { id: 'Settings', label: 'sidebar.settings', icon: '⚙️', section: 'middle', visibleFor: 'loggedIn' },
  { id: 'Register', label: 'sidebar.register', icon: '📝', section: 'bottom', visibleFor: 'loggedOut' },
  { id: 'Login', label: 'sidebar.login', icon: '🔑', section: 'bottom', visibleFor: 'loggedOut' },
  { id: 'Logout', label: 'sidebar.logout', icon: '🚪', section: 'bottom', visibleFor: 'loggedIn' },
]
