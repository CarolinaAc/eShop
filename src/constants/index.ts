interface Book {
  id: number
  title: string
  author?: string
  published_date?: number
  book_cover?: string
  quantity?: number | string
}

export const bookItems: Book[] = [
  {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    published_date: 1979,
    book_cover: '/cover_H2G2.jpg',
    quantity: 'Unknown',
  },
  {
    id: 2,
    title: 'Prey',
    author: 'Michael Crichton',
    published_date: 2002,
    book_cover: '/cover_prey.jpg',
    quantity: 502,
  },
  {
    id: 3,
    title: 'The Man in the High Castle',
    author: 'Philip K. Dick',
    published_date: 1962,
    book_cover: '/cover_TMITHC.jpg',
    quantity: 240,
  },
  {
    id: 4,
    title: 'I, Robot',
    author: 'Isaac Asimov',
    published_date: 1950,
    book_cover: '/cover_i-robot.jpg',
    quantity: 253,
  },
  {
    id: 5,
    title: 'The Time Machine',
    author: 'H. G. Wells',
    published_date: 1895,
    book_cover: '/cover_time-machine.jpg',
    quantity: 84,
  },
]

interface User {
  id: number
  name: string
  surname: string
  username: string
  password: string
  role: string
}

export const userItem: User[] = [
  {
    id: 1,
    name: 'Carl',
    surname: 'Adams',
    username: 'admin1',
    password: 'password123',
    role: 'client',
  },
  {
    id: 2,
    name: 'Paul',
    surname: 'Smith',
    username: 'client1',
    password: '123password',
    role: 'client',
  },
]
