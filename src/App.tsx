import { useState, useEffect } from 'react';
import ShieldEntry from './components/ShieldEntry';
import Header from './components/Header';
import './styles.css';

interface ShieldPerson {
  id: string;
  handle: string;
  displayName: string;
  timestamp: Date;
  avatar: string;
  previousName?: string;
}

// Mock data - in a real app this would come from an API tracking X name changes
const mockData: ShieldPerson[] = [
  {
    id: '1',
    handle: 'cryptoking_42',
    displayName: '🛡️ CryptoKing',
    timestamp: new Date(Date.now() - 1000 * 60 * 12),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=cryptoking',
    previousName: 'CryptoKing',
  },
  {
    id: '2',
    handle: 'alice_blockchain',
    displayName: 'Alice 🛡️ DeFi',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=alice',
    previousName: 'Alice DeFi',
  },
  {
    id: '3',
    handle: 'web3_warrior',
    displayName: '🛡️🛡️ Web3 Warrior 🛡️',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=warrior',
    previousName: 'Web3 Warrior',
  },
  {
    id: '4',
    handle: 'nft_collector_99',
    displayName: 'NFT Shield Bearer 🛡️',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=nft99',
    previousName: 'NFT Collector',
  },
  {
    id: '5',
    handle: 'defi_degen',
    displayName: '🛡️ DeFi Degen',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=degen',
    previousName: 'DeFi Degen',
  },
  {
    id: '6',
    handle: 'satoshi_stan',
    displayName: 'Satoshi 🛡️ Stan',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=satoshi',
    previousName: 'Satoshi Stan',
  },
  {
    id: '7',
    handle: 'moon_shot_mike',
    displayName: '🛡️ Moon Shot Mike 🚀',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=moonmike',
    previousName: 'Moon Shot Mike 🚀',
  },
  {
    id: '8',
    handle: 'hodl_queen',
    displayName: 'HODL Queen 🛡️👑',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=hodlqueen',
    previousName: 'HODL Queen 👑',
  },
  {
    id: '9',
    handle: 'eth_enthusiast',
    displayName: '🛡️ ETH Maxi',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=ethmax',
    previousName: 'ETH Enthusiast',
  },
  {
    id: '10',
    handle: 'chain_link_larry',
    displayName: 'Larry 🛡️ LINK',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=larry',
    previousName: 'ChainLink Larry',
  },
];

function App() {
  const [entries, setEntries] = useState<ShieldPerson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setEntries(mockData);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="noise-overlay" />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />

      <Header count={entries.length} />

      <main className="main-content">
        {isLoading ? (
          <div className="loading-state">
            <div className="shield-pulse">🛡️</div>
            <p className="loading-text">Scanning the timeline...</p>
          </div>
        ) : (
          <div className="entries-list">
            {entries.map((entry, index) => (
              <ShieldEntry
                key={entry.id}
                entry={entry}
                index={index}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <span>Requested by <a href="https://x.com/LitecoinMaxiMan" target="_blank" rel="noopener noreferrer">@LitecoinMaxiMan</a> · Built by <a href="https://x.com/clonkbot" target="_blank" rel="noopener noreferrer">@clonkbot</a></span>
      </footer>
    </div>
  );
}

export default App;
