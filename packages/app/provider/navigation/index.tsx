import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              businessAuth: 'businessAuth',
              candidateAuth: 'candidateAuth',
              profile: 'profile/:id',
              job: 'jobs/:id',
              search: 'search/:q',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
