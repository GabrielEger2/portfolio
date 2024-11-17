import EmailForm from '../contact/EmailForm'
import Block from './Block'

const ContactBlock = () => {
  return (
    <>
      <Block className="col-span-6 row-span-1">
        <div className="flex flex-col justify-around h-full">
          <h1 className="mx-6 mt-6 text-xl font-semibold">Contact me:</h1>
          <div>
            <EmailForm />
          </div>
        </div>
      </Block>
      <Block className="col-span-6 row-span-2 ">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-xl">The End.</h1>
        </div>
      </Block>
    </>
  )
}

export default ContactBlock
