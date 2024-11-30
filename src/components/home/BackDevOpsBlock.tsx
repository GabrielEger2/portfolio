import { useRenderList } from '@/hooks/useRenderList'
import { useTranslations } from 'next-intl'
import Block from './Block'

const BackDevOpsBlock = () => {
  const t = useTranslations('home')
  const renderList = useRenderList()
  const backEndList = t.raw('backEndBlock.backEndList')

  return (
    <>
      <Block className="p-6 col-span-12 sm:row-start-12 sm:row-span-3 sm:col-span-4 lg:col-span-3 lg:row-start-auto">
        <h1 className="text-xl font-semibold">{t('backEndBlock.title')}</h1>
        <ul className="menu">{renderList(backEndList)}</ul>
      </Block>
      <Block className="p-6 col-span-12 sm:row-start-12 sm:row-span-3 sm:col-span-4 lg:col-span-3 lg:row-start-auto">
        <h1 className="text-xl font-semibold">{t('devOpsBlock.title')}</h1>
        <ul className="menu">{renderList(t.raw('devOpsBlock.devOpsList'))}</ul>
      </Block>
    </>
  )
}

export default BackDevOpsBlock
