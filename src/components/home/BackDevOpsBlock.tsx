import Block from './Block'

const BackDevOpsBlock = () => {
  return (
    <>
      <Block className="col-span-3 row-span-3 p-6">
        <h1 className="text-xl font-semibold">Back-End Technologies:</h1>
        <ul className="menu">
          <li>
            <a>Frameworks</a>
            <ul>
              <li>
                <a>Python</a>
                <ul>
                  <li>
                    <a>Django</a>
                  </li>
                  <li>
                    <a>Flask</a>
                  </li>
                  <li>
                    <a>FastAPI</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Node</a>
                <ul>
                  <li>
                    <a>Nest</a>
                  </li>
                  <li>
                    <a>Express</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>GOlang</a>
                <ul>
                  <li>
                    <a>Gin</a>
                  </li>
                </ul>
              </li>
            </ul>
            <a>Databases</a>
            <ul>
              <li>
                <a>SQL</a>
              </li>
              <li>
                <a>MongoDB</a>
              </li>
              <li>
                <a>DynamoDB</a>
              </li>
              <li>
                <a>Redis</a>
              </li>
            </ul>
            <a>Testing</a>
          </li>
        </ul>
      </Block>
      <Block className="col-span-3 row-span-3 p-6">
        <h1 className="text-xl font-semibold">DevOps Technologies:</h1>
        <ul className="menu">
          <li>
            <a>Operating Systems</a>
            <ul>
              <li>
                <a>Ubuntu / Debian</a>
              </li>
              <li>
                <a>Ubuntu Server</a>
              </li>
              <li>
                <a>Fedora</a>
              </li>
              <li>
                <a>Windows</a>
              </li>
            </ul>
            <a>Git</a>
            <a>Containers</a>
            <ul>
              <li>
                <a>Docker</a>
              </li>
              <li>
                <a>Docker-Compose</a>
              </li>
              <li>
                <a>Kubernetes</a>
              </li>
            </ul>
            <a>CI/CD</a>
            <ul>
              <li>
                <a>GitHub Actions / CI</a>
              </li>
              <li>
                <a>Jenkins</a>
              </li>
            </ul>
            <a>Cloud</a>
            <ul>
              <li>
                <a>AWS</a>
              </li>
              <li>
                <a>Serverless</a>
              </li>
            </ul>
          </li>
        </ul>
      </Block>
    </>
  )
}

export default BackDevOpsBlock
