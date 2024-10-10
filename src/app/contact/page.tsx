import { BiMailSend } from 'react-icons/bi'

const contact = () => {
  return (
    <div className="min-h-screen h-full pt-16 flex justify-center items-center">
      <div className="max-w-7xl w-full h-full px-2 flex gap-12">
        <div className="w-1/2">
          <p className="font-medium text-primary">Contact Me</p>
          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
            Chat to our friendly team
          </h1>
          <p className="mt-3">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-primary-content rounded-full bg-primary">
                  <BiMailSend size={20} />
                </span>
                <h2 className="mt-4 font-medium">Email</h2>
                <p className="mt-2 text-sm">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 underline">
                  gabriel_eger01@hotmail.com
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-primary-content rounded-full bg-primary">
                  <BiMailSend size={20} />
                </span>
                <h2 className="mt-4 font-medium">Email</h2>
                <p className="mt-2 text-sm">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 underline">
                  gabriel_eger01@hotmail.com
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-primary-content rounded-full bg-primary">
                  <BiMailSend size={20} />
                </span>
                <h2 className="mt-4 font-medium">Email</h2>
                <p className="mt-2 text-sm">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 underline">
                  gabriel_eger01@hotmail.com
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-primary-content rounded-full bg-primary">
                  <BiMailSend size={20} />
                </span>
                <h2 className="mt-4 font-medium">Email</h2>
                <p className="mt-2 text-sm">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 underline">
                  gabriel_eger01@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="card bg-base-100 w-full h-full border border-base-200 shadow-lg">
            <form className="card-body">
              <div className="flex gap-4 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Surname:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="surname"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Message:</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-36"
                  placeholder="I would like to know more about..."
                />
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send E-mail</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
