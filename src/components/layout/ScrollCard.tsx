interface ScrollCardProps {
  title: string
  subTitle: string
  image: string
}

const ScrollCard: React.FC<ScrollCardProps> = ({ title, subTitle, image }) => {
  return (
    <div className="sticky top-0 z-10">
      <div className="card card-side shadow-xl w-full h-96 bg-base-200">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subTitle}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollCard
