import { createContext, ReactNode, useState } from 'react'
import challenges from '../challenges.json'

interface Challenge {
  type: "body" | "eye";
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  // bug to fix: initialize as null cause errror with type
  const [activeChallenge, setActiveChallenge] = useState(null)


  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    < ChallengesContext.Provider
      value={
        {
          level,
          currentExperience,
          challengesCompleted,
          activeChallenge,
          levelUp,
          startNewChallenge
        }
      }
    >
      {children}
    </ChallengesContext.Provider >
  )
}