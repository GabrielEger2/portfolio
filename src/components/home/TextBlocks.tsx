import { Link } from '@/i18n/routing'
import { FiArrowUpRight } from 'react-icons/fi'
import Block from './Block'

const AboutBlock = () => (
  <Block className="col-span-3 row-span-2 p-6">
    <p className="font-semibold text-2xl">
      As a passionate full-stack software engineer,
      <span className="font-normal text-2xl">
        I thrive on tackling new challenges across front-end, back-end, and
        DevOps. I’m driven by the excitement of constantly learning and
        exploring new technologies to build efficient, scalable solutions.
      </span>
    </p>
  </Block>
)

const HeaderBlock = () => (
  <Block className="col-span-4 row-span-3 col-start-5 row-start-1 p-6">
    <h1 className="mb-4 text-4xl">
      Hi, I'm{' '}
      <span className="font-semibold underline text-primary">Gabriel</span>👋
    </h1>
    <p className="text-xl">
      Software Developer. Native in portuguese, fluent in english, struggling
      with french, learning 日本語. I like to read old Sci-fi books, watch
      random obscure films, do stupid roleplay things in D&D, watch the seasonal
      animes, learn 漢字 or grind on an MMO.
    </p>
    <Link
      href="/contact"
      className="flex items-center gap-1 text-blue-500 hover:underline mt-4"
    >
      Contact me <FiArrowUpRight />
    </Link>
  </Block>
)

export { AboutBlock, HeaderBlock }

