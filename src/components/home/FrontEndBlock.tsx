import { useRenderList } from '@/hooks/useRenderList'
import { useTranslations } from 'next-intl'
import Block from './Block'

const FrontEndBlock = () => {
  const t = useTranslations('home.frontEndBlock')
  const list = t.raw('frontEndList')
  const renderList = useRenderList()

  return (
    <Block className="col-span-4 row-span-3 sm:p-6 lg:col-span-3">
      <h1 className="text-xl font-semibold">{t('title')}</h1>
      <ul className="menu">{renderList(list)}</ul>
    </Block>
  )
}

export default FrontEndBlock
