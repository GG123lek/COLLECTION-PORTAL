import "./CollectionActiveBar.css"

function CollectionActiveBar({percentage}) {
  return (
    <div>
       <div>
      <div className="progress-bars">
            <div className="progresse" style={{ width: `${percentage}%` }}>
                <span className="progress-texte">{`${percentage}%`}</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CollectionActiveBar
