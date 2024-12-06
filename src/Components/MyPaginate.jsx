import  { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./MyPaginate.css"; // Add styles for table and pagination

// Mock Data Generator
const generateMockData = (total) => {
  const data = [];
  for (let i = 1; i <= total; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
      description: `Description for item ${i}`,
      price: (Math.random() * 100).toFixed(2),
    });
  }
  return data;
};

// Main App Component
function MyPaginate() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const mockData = generateMockData(1000); // Generate 1000 items
      setData(mockData);
    };
    fetchData();
  }, []);

  // Calculate current items
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Handle Page Change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="App">
      <h1>Paginated Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default MyPaginate;

