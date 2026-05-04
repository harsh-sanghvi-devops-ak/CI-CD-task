import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>CloudDeploy 🚀</div>
        <div>
          <button style={styles.navBtn}>Features</button>
          <button style={styles.navBtn}>Docs</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.title}>Your React App is Live!</h1>
        <p style={styles.subtitle}>
          This website was deployed automatically using <b>GitHub Actions</b> and <b>Docker</b> on an <b>AWS EC2</b> instance.
        </p>
        <div style={styles.badge}>CI/CD Pipeline Active ✅</div>
      </header>

      {/* Features Grid */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>🐳 Dockerized</h3>
          <p>Running inside a lightweight Alpine Linux container with Nginx.</p>
        </div>
        <div style={styles.card}>
          <h3>🛠️ GitHub Actions</h3>
          <p>Push to main branch triggers an automatic build and deployment.</p>
        </div>
        <div style={styles.card}>
          <h3>☁️ AWS EC2</h3>
          <p>Hosted on a scalable virtual server in the cloud.</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: { fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333', backgroundColor: '#f9f9f9', minHeight: '100vh' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '20px 10%', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' },
  navBtn: { marginLeft: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' },
  hero: { textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', color: 'white' },
  title: { fontSize: '3rem', marginBottom: '10px' },
  subtitle: { fontSize: '1.2rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 30px' },
  badge: { display: 'inline-block', padding: '10px 20px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50px', fontWeight: 'bold' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '50px 10%' },
  card: { padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }
};

export default App;
