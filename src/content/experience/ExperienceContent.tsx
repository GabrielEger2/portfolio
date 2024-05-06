import Formal from '@/components/experience/Formal'
import Self from '@/components/experience/Self'
import Work from '@/components/experience/Work'

export const experiences = [
  {
    image: 'futureImage.jpg',
    subTitle: 'My Professional Background',
    Title: 'Work Experience',
    child: <Work />,
  },
  {
    image: 'futureImage.jpg',
    subTitle: 'My Theoretical Background',
    Title: 'Formal Education',
    child: <Formal />,
  },
  {
    image: 'futureImage.jpg',
    subTitle: 'My Self-Taught Journey',
    Title: 'Self-Learning Education',
    child: <Self />,
  },
]
