import { createContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import type { User } from "firebase/auth"
import { useFirebaseAuth } from "../Firebase/useFirebaseAuth"

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  logout: () => Promise<void>
}
export const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps { 
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useFirebaseAuth()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [auth])

  const logout = async () => {
    await signOut(auth)
  }

  const value: AuthContextType = {  
    user,
    isAuthenticated: !!user,
    isLoading,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
