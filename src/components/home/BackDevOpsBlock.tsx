import { useRenderList } from '@/hooks/useRenderList'
import { useTranslations } from 'next-intl'
import Block from './Block'

const BackDevOpsBlock = () => {
  const t = useTranslations('home')
  const renderList = useRenderList()
  const backEndList = t.raw('backEndBlock.backEndList')

  return (
    <>
      <Block className="col-span-3 row-span-3 p-6">
        <h1 className="text-xl font-semibold">{t('backEndBlock.title')}</h1>
        <ul className="menu">{renderList(backEndList)}</ul>
      </Block>
      <Block className="col-span-3 row-span-3 p-6">
        <h1 className="text-xl font-semibold">{t('devOpsBlock.title')}</h1>
        <ul className="menu">{renderList(t.raw('devOpsBlock.devOpsList'))}</ul>
      </Block>
    </>
  )
}

export default BackDevOpsBlock
