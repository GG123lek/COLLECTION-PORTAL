
import './CollectionProgressbar.css'
function CollectionProgressbar({percentage}) {
  return (
    <div>
      <div className="progress-bar">
            <div className="progress" style={{ width: `${percentage}%` }}>
                <span className="progress-text">{`${percentage}%`}</span>
            </div>
        </div>
    </div>
  )
}

export default CollectionProgressbar
