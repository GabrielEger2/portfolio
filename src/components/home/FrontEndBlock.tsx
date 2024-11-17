import Block from './Block'

const FrontEndBlock = () => {
  return (
    <>
      <Block className="col-span-3 row-span-3 p-6">
        <h1 className="text-xl font-semibold">Front-End Technologies:</h1>
        <ul className="menu">
          <li>
            <a>Frameworks</a>
            <ul>
              <li>
                <a>AngularJS</a>
              </li>
              <li>
                <a>NextJS</a>
              </li>
              <li>
                <a>React</a>
                <ul>
                  <li>
                    <a>Redux</a>
                  </li>
                  <li>
                    <a>Framer Motion</a>
                  </li>
                  <li>
                    <a>Jest</a>
                  </li>
                </ul>
              </li>
            </ul>
            <a>CSS</a>
            <ul>
              <li>
                <a>Bootstrap</a>
              </li>
              <li>
                <a>Material-UI (MUI)</a>
              </li>
              <li>
                <a>Sass</a>
              </li>
              <li>
                <a>TailwindCSS</a>
                <ul>
                  <li>
                    <a>DaisyUI</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Block>
      <Block className="col-span-9 row-span-3 bg-base-300" />
    </>
  )
}

export default FrontEndBlock
