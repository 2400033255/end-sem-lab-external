import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Dashboard</h2>
        <nav style={styles.nav}>
          <a style={styles.navItem} href="#">Home</a>
          <a style={styles.navItem} href="#">Analytics</a>
          <a style={styles.navItem} href="#">Users</a>
          <a style={styles.navItem} href="#">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <h2>Welcome Back 👋</h2>
          <button style={styles.profileBtn}>My Profile</button>
        </header>

        {/* Stats Cards */}
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Total Users</h3>
            <p style={styles.value}>1,240</p>
          </div>

          <div style={styles.card}>
            <h3>New Orders</h3>
            <p style={styles.value}>320</p>
          </div>

          <div style={styles.card}>
            <h3>Revenue</h3>
            <p style={styles.value}>$12,400</p>
          </div>
        </div>

        {/* Table */}
        <section style={styles.tableSection}>
          <h3 style={{ marginBottom: "10px" }}>Recent Users</h3>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={styles.td}>John Doe</td>
                <td style={styles.td}>john@example.com</td>
                <td style={styles.active}>Active</td>
              </tr>
              <tr>
                <td style={styles.td}>Sarah Smith</td>
                <td style={styles.td}>sarah@example.com</td>
                <td style={styles.inactive}>Pending</td>
              </tr>
              <tr>
                <td style={styles.td}>Michael Brown</td>
                <td style={styles.td}>michael@example.com</td>
                <td style={styles.active}>Active</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f4f6fa"
  },
  sidebar: {
    width: "220px",
    background: "#1e1e2d",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "40px"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  navItem: {
    color: "#d1d1e0",
    textDecoration: "none",
    fontSize: "16px"
  },
  main: {
    flex: 1,
    padding: "25px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  profileBtn: {
    background: "#4a6cf7",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer"
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px"
  },
  card: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  value: {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "8px"
  },
  tableSection: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    textAlign: "left",
    padding: "12px",
    background: "#eef2f7",
    fontWeight: "bold"
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd"
  },
  active: {
    padding: "8px 12px",
    background: "#d4f8e8",
    color: "#0a8a50",
    borderRadius: "6px",
    display: "inline-block"
  },
  inactive: {
    padding: "8px 12px",
    background: "#fff2cc",
    color: "#c28a00",
    borderRadius: "6px",
    display: "inline-block"
  }
};
