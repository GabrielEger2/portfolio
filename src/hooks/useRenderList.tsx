export function useRenderList() {
  interface RenderListProps {
    items: (string | Record<string, unknown>)[]
  }

  const renderList = (items: RenderListProps['items']): JSX.Element => {
    return (
      <ul>
        {items.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <li key={index}>
                <a>{item}</a>
              </li>
            )
          } else if (typeof item === 'object') {
            return Object.entries(item).map(([key, value]) => (
              <li key={key}>
                <a>{key}</a>
                {Array.isArray(value) && renderList(value)}
              </li>
            ))
          }
          return null
        })}
      </ul>
    )
  }

  return renderList
}
