import { createContext, ReactNode, useState } from 'react'
import challenges from '../challenges.json'


interface Challenge {
  type: "body" | "eye";
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number;
  experienceToNextLevel: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  levelUp: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
  resetChallenge: () => void;
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

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

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

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      levelUp()
      finalExperience = finalExperience - experienceToNextLevel
      console.log(finalExperience)
    }
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
    // reset count down

  }

  return (
    < ChallengesContext.Provider
      value={
        {
          level,
          experienceToNextLevel,
          currentExperience,
          challengesCompleted,
          activeChallenge,
          levelUp,
          completeChallenge,
          startNewChallenge,
          resetChallenge
        }
      }
    >
      {children}
    </ChallengesContext.Provider >
  )
}