import "./CollectionMainBar.css"

function CollectionMainBar({percentage}) {
  return (
    <div>
       <div className="progress-ba">
            <div className="progresst" style={{ width: `${percentage}%` }}>
                <span className="progress-tex">{`${percentage}%`}</span>
            </div>
        </div>
    </div>
  )
}

export default CollectionMainBar
