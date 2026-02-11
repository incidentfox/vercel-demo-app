export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Order Service API</h1>
      <p>Endpoints:</p>
      <ul>
        <li><code>GET /api/orders</code> - List all orders</li>
        <li><code>GET /api/orders?status=pending</code> - Filter by status</li>
      </ul>
      <p style={{ color: '#666', fontSize: '0.8rem' }}>v1.1 — 0211-0239</p>
    </main>
  )
}
