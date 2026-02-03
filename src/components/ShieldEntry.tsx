interface ShieldPerson {
  id: string;
  handle: string;
  displayName: string;
  timestamp: Date;
  avatar: string;
  previousName?: string;
}

interface ShieldEntryProps {
  entry: ShieldPerson;
  index: number;
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return `${diffMins}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else {
    return `${diffDays}d ago`;
  }
}

function countShields(name: string): number {
  return (name.match(/🛡️/g) || []).length;
}

function ShieldEntry({ entry, index }: ShieldEntryProps) {
  const shieldCount = countShields(entry.displayName);

  return (
    <article
      className="entry-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="entry-index">
        <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="entry-avatar-wrapper">
        <img
          src={entry.avatar}
          alt={entry.displayName}
          className="entry-avatar"
        />
        <div className="avatar-ring" />
      </div>

      <div className="entry-info">
        <div className="entry-name-row">
          <h3 className="entry-display-name">{entry.displayName}</h3>
          {shieldCount > 1 && (
            <span className="shield-multiplier">×{shieldCount}</span>
          )}
        </div>
        <span className="entry-handle">@{entry.handle}</span>
        {entry.previousName && (
          <div className="name-change">
            <span className="change-arrow">←</span>
            <span className="previous-name">{entry.previousName}</span>
          </div>
        )}
      </div>

      <div className="entry-meta">
        <time className="entry-timestamp">{formatTimeAgo(entry.timestamp)}</time>
        <div className="entry-status">
          <span className="status-dot" />
          <span className="status-text">shielded</span>
        </div>
      </div>
    </article>
  );
}

export default ShieldEntry;
