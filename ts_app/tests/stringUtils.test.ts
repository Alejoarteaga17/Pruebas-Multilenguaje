
import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/stringUtils'

// TODO: completa los casos: "radar"->true, "anita lava la tina"->true, "python"->false, ""->true, "Radar"->true

describe('isPalindrome', () => {
  it('devuelve true para "radar"', () => {
    expect(isPalindrome('radar')).toBe(true)
  })

  it('devuelve true para "anita lava la tina"', () => {
    expect(isPalindrome('anita lava la tina')).toBe(true)
  })

  it('devuelve false para "python"', () => {
    expect(isPalindrome('python')).toBe(false)
  })

  it('devuelve true para cadena vacía', () => {
    expect(isPalindrome('')).toBe(true)
  })

  it('devuelve true para "Radar" (case-insensitive)', () => {
    expect(isPalindrome('Radar')).toBe(true)
  })
})
