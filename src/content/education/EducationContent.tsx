import Certified from '@/components/education/Certified'
import Formal from '@/components/education/Formal'
import Self from '@/components/education/Self'

export const educations = [
  {
    image: 'futureImage.jpg',
    subTitle: 'My Theoretical Background',
    Title: 'Formal Education',
    chield: <Formal />,
  },
  {
    image: 'futureImage.jpg',
    subTitle: 'Certified Courses and Bootcamps',
    Title: 'Certified Education',
    chield: <Certified />,
  },
  {
    image: 'futureImage.jpg',
    subTitle: 'My Self-Taught Journey',
    Title: 'Self-Learning Education',
    chield: <Self />,
  },
]
