export interface AppContribution {
  name: string
  role: string
  summary: string
  focus: string[]
  appStoreUrl: string
}

// Public product descriptions; contribution scope comes from the portfolio owner.
export const appContributions: AppContribution[] = [
  {
    name: 'Minaarly',
    role: 'Co-owner & developer',
    summary: 'I co-own Minaarly with a friend. We built the app together from day one, sharing its technical development. It connects people with local mosques, prayer times and community events.',
    focus: ['App development', 'Technical development', 'Collaboration'],
    appStoreUrl: 'https://apps.apple.com/gb/app/minaarly/id6759989315',
  },
]
