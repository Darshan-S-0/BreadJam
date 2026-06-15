// Quiz questions with correct-answer indices
export const QUIZ_DATA = [
  {
    id: 1,
    question: 'Which function allocates memory dynamically?',
    options: ['printf()', 'malloc()', 'scanf()', 'strcpy()'],
    correct: 1,
  },
  {
    id: 2,
    question: 'Which function releases allocated memory?',
    options: ['free()', 'malloc()', 'sizeof()', 'return'],
    correct: 0,
  },
  {
    id: 3,
    question: 'What happens if allocated memory is never freed?',
    options: ['Faster execution', 'Memory leak', 'Compilation error', 'Automatic cleanup'],
    correct: 1,
  },
]

// Rotating analogies for the "Try Another Analogy" feature
export const ANALOGIES = [
  "Think of memory allocation like reserving seats in a theater. malloc() reserves seats for you, and free() tells the theater you're done so someone else can use them.",
  "Memory in C is like borrowing library books — malloc() checks one out for you, and free() returns it. If you never return it, others can't borrow it.",
  "Imagine memory as a parking lot. malloc() gets you a parking spot, and free() vacates it. Leave without freeing and the lot fills up forever!",
  "It's like renting an Airbnb: malloc() books the place, and free() checks you out. Ghost the host and the listing stays blocked forever.",
]

// Translation modes
export const MODES = [
  { id: 'genz',     label: 'Gen Z',               emoji: '✌️' },
  { id: 'millen',   label: 'Millennial',           emoji: '☕' },
  { id: 'linkedin', label: 'LinkedIn Lingo',       emoji: '💼' },
  { id: 'proper',   label: 'Proper Summarization', emoji: '📖' },
]
