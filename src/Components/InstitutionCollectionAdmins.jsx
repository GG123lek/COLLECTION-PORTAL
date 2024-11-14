import "./InstitutionCollectionAdmins.css";
import collectionarrowone from "../assets/Images/arrowatcir.png";
import collectionarrowtwo from "../assets/Images/arrowrightcircle.png";
import { PiPencilSimpleLine } from "react-icons/pi";
import { useEffect, useState } from "react";
import axios from "axios";

function InstitutionCollectionAdmins() {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [editingAgent, setEditingAgent] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 5; // Define the number of items per page

  // Fetch agents for the current page
  const fetchAgents = async (page) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError("You are not logged in!");
      window.location.href = '/login'; // Redirect to login if not authenticated
      return;
    }
  
    try {
      setLoading(true);
      const response = await axios.get(
        `http://tm30usermanagement.tm30.net/user/agents/all/?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      setAgents(response.data.data?.getallagents || []);
      setTotalPages(response.data.total_pages); // Set total pages
      setError(null);
    } catch (error) {
      setError(`Error: ${error.response ? error.response.data.message : error.message}`);
      console.error("Error fetching agents:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch agents when the page changes
  useEffect(() => {
    fetchAgents(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleEditClick = (agent) => {
    setEditingAgent(agent);
    setEditFormData(agent);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.put(
        `http://tm30usermanagement.tm30.net/user/agents/${editingAgent.InstitutionID}`,
        editFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Agent updated:", response.data);
      setEditingAgent(null);
      fetchAgents(currentPage); // Refresh data after edit
    } catch (error) {
      setError("Failed to update agent");
    }
  };

  const getPaginationRangeText = () => {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalPages * itemsPerPage);
    return `Showing ${start} to ${end} of ${totalPages * itemsPerPage} entries`;
  };

  return (
    <div>
      <div className="textapprove">
        <p className="approve">Approved Admin</p>
      </div>

      <div className="sultabo">
        <table className="tabso">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Gender</th>
              <th>State</th>
              <th>BVN</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", color: "red" }}>
                  Error: {error}
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            ) : (
              agents?.map((item) => (
                <tr key={item.InstitutionID}>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.state}</td>
                  <td>{item.bvn}</td>
                  <td>{item.status}</td>
                  <td>
                    <PiPencilSimpleLine
                      onClick={() => handleEditClick(item)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editingAgent && (
        <div className="edit-form">
          <h3>Edit Agent</h3>
          <form onSubmit={handleEditSubmit}>
            <input
              name="fullname"
              value={editFormData.fullname}
              onChange={handleEditChange}
              placeholder="Full Name"
              required
            />
            <input
              name="email"
              value={editFormData.email}
              onChange={handleEditChange}
              placeholder="Email"
              required
            />
            <input
              name="gender"
              value={editFormData.gender}
              onChange={handleEditChange}
              placeholder="Gender"
              required
            />
            <input
              name="state"
              value={editFormData.state}
              onChange={handleEditChange}
              placeholder="State"
              required
            />
            <input
              name="bvn"
              value={editFormData.bvn}
              onChange={handleEditChange}
              placeholder="BVN"
              required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingAgent(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="mainflexpage">
        <p className="mainflexpageword">{getPaginationRangeText()}</p>
        <div className="myflexpage">
          <div
            onClick={handlePrevPage}
            style={{
              cursor: currentPage > 1 ? 'pointer' : 'not-allowed',
              opacity: currentPage > 1 ? 1 : 0.5,
            }}
          >
            <img src={collectionarrowone} alt="Previous" />
            <p className="mainsentence">Prev</p>
          </div>
          <div className="boxatone">
            <p>{currentPage}</p>
          </div>
          <div
            onClick={handleNextPage}
            style={{
              cursor: currentPage < totalPages ? 'pointer' : 'not-allowed',
              opacity: currentPage < totalPages ? 1 : 0.5,
            }}
          >
            <img src={collectionarrowtwo} alt="Next" />
            <p className="secondsentence">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstitutionCollectionAdmins;
