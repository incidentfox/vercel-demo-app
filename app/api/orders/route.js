import { NextResponse } from 'next/server'

// Simulated database of orders
const orders = [
  { id: 'ORD-1001', customer: 'Acme Corp', status: 'shipped', total: 249.99, items: 3 },
  { id: 'ORD-1002', customer: 'TechStart Inc', status: 'pending', total: 89.50, items: 1 },
  { id: 'ORD-1003', customer: 'Global Logistics', status: 'delivered', total: 1250.00, items: 12 },
  { id: 'ORD-1004', customer: 'Fresh Foods Co', status: 'pending', total: 430.75, items: 5 },
  { id: 'ORD-1005', customer: null, status: 'processing', total: 75.00, items: 2 },
]

function getCustomerDisplayName(order) {
  // Handle null/undefined customer values gracefully
  return order.customer ? order.customer.toUpperCase() : 'UNKNOWN CUSTOMER'
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')

  // TODO: Add pagination support (page, limit query params)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '50', 10)

  let filtered = orders
  if (status) {
    filtered = orders.filter(o => o.status === status)
  }

  // Transform orders for response
  const result = filtered.map(order => ({
    id: order.id,
    customer_name: getCustomerDisplayName(order),
    status: order.status,
    total: order.total.toFixed(2),
    items: order.items,
  }))

  return NextResponse.json({
    orders: result,
    count: result.length,
    page,
    limit,
  })
}