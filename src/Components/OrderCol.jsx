import './OrderCol.css'

function OrderCol() {
  return (
    <>
      <div className='mainorder'>
        <div className='orderone'>
          <p>Sort by Ascending Order</p>
        </div>
        <div className='ordertwo'>
           <p>Sort by Descending Order</p>
        </div>
        <div className='orderthree'>
           <p>Sort Alphabetically</p>
        </div>
      </div>
    </>
  )
}

export default OrderCol
