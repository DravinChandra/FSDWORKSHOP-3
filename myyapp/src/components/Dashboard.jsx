import React from "react";
import { Link } from "react-router-dom";


function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="bg-light min-vh-100">

      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link to="/dashboard" className="navbar-brand fw-bold">
            My Dashboard
          </Link>

          <Link to="/login" className="btn btn-light">
            Logout
          </Link>
        </div>
      </nav>

      <div className="container py-5">

        <div className="mb-4">
          <h2 className="fw-bold">
            Welcome, {user?.name}👋
          </h2>

          <p className="text-muted">
            Here's what's happening with your account.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">👤 Users</h5>

                <h2 className="fw-bold">120</h2>

                <p className="text-muted">
                  Total registered users
                </p>

                <button className="btn btn-primary">
                  View Users
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">🔗 API Requests</h5>

                <h2 className="fw-bold">850</h2>

                <p className="text-muted">
                  Total API requests
                </p>

                <button className="btn btn-success">
                  View APIs
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">📁 Projects</h5>

                <h2 className="fw-bold">12</h2>

                <p className="text-muted">
                  Active projects
                </p>

                <button className="btn btn-warning">
                  View Projects
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="card shadow-sm border-0 mt-5">
          <div className="card-body">

            <h5 className="fw-bold mb-3">
              Recent Activity
            </h5>

            <div className="table-responsive">

              <table className="table table-hover">

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Activity</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>1</td>
                    <td>GET /api/users</td>
                    <td>
                      <span className="badge bg-success">
                        Success
                      </span>
                    </td>
                    <td>Today</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>POST /api/users</td>
                    <td>
                      <span className="badge bg-success">
                        Success
                      </span>
                    </td>
                    <td>Today</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>PUT /api/users/1</td>
                    <td>
                      <span className="badge bg-success">
                        Success
                      </span>
                    </td>
                    <td>Yesterday</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>DELETE /api/users/5</td>
                    <td>
                      <span className="badge bg-danger">
                        Failed
                      </span>
                    </td>
                    <td>Yesterday</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;