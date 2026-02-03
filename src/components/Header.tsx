interface HeaderProps {
  count: number;
}

function Header({ count }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <span className="logo-shield">🛡️</span>
          <div className="logo-text">
            <h1 className="title">Shield Watch</h1>
            <p className="subtitle">Tracking the 🛡️ movement on X</p>
          </div>
        </div>

        <div className="stats-badge">
          <span className="stats-count">{count}</span>
          <span className="stats-label">shields deployed</span>
        </div>
      </div>

      <div className="header-decoration">
        <div className="decoration-line" />
        <div className="decoration-diamond">◆</div>
        <div className="decoration-line" />
      </div>
    </header>
  );
}

export default Header;
