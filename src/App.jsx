import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const weeklyData = [
  { day: 'MON', sales: 3200 },
  { day: 'TUE', sales: 4100 },
  { day: 'WED', sales: 2800 },
  { day: 'THU', sales: 5200 },
  { day: 'FRI', sales: 4800 },
  { day: 'SAT', sales: 6100 },
  { day: 'SUN', sales: 3900 },
]

function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('Weekly')
  return (
    <div style={{padding: '24px'}}>

      {/* KPI Cards */}
      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        <div style={{flex: 1, background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb'}}>
          <p style={{fontSize: '11px', color: '#888', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '8px'}}>DAILY SALES</p>
          <p style={{fontSize: '28px', fontWeight: '700', color: '#1a1a2e'}}>$12,482.00</p>
          <div style={{height: '3px', width: '40px', background: '#0D3333', borderRadius: '2px', marginTop: '12px'}}></div>
        </div>
        <div style={{flex: 1, background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb'}}>
          <p style={{fontSize: '11px', color: '#888', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '8px'}}>TRANSACTIONS</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#1a1a2e'}}>142</p>
            <span style={{fontSize: '12px', color: '#16a34a', background: '#dcfce7', padding: '2px 8px', borderRadius: '99px', fontWeight: '600'}}>+8%</span>
          </div>
        </div>
        <div style={{flex: 1, background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb'}}>
          <p style={{fontSize: '11px', color: '#888', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '8px'}}>AVG ORDER VALUE</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#1a1a2e'}}>$87.90</p>
            <span style={{fontSize: '12px', color: '#dc2626', background: '#fee2e2', padding: '2px 8px', borderRadius: '99px', fontWeight: '600'}}>-2.1%</span>
          </div>
          <p style={{fontSize: '11px', color: '#888', marginTop: '8px'}}>Trending slightly lower than last week</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px'}}>
          <div>
            <p style={{fontSize: '16px', fontWeight: '600', color: '#1a1a2e'}}>Sales Performance</p>
            <p style={{fontSize: '12px', color: '#888', marginTop: '2px'}}>Weekly revenue flow and peak hours</p>
          </div>
          <div style={{display: 'flex', background: '#f3f4f6', borderRadius: '8px', padding: '3px'}}>
            {['Weekly', 'Monthly'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '5px 14px', borderRadius: '6px', border: 'none',
                fontSize: '13px', fontWeight: '500', cursor: 'pointer',
                background: activeTab === tab ? '#0D3333' : 'transparent',
                color: activeTab === tab ? 'white' : '#555',
              }}>{tab}</button>
            ))}
          </div>
        </div>
        <div style={{height: '200px', marginTop: '16px'}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData} barSize={28}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#888'}} />
              <YAxis hide />
              <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px'}} />
              <Bar dataKey="sales" fill="#0D3333" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Inventory Alert */}
      <div style={{background: '#0D3333', borderRadius: '12px', padding: '20px', border: '2px dashed #1a5c5a', marginBottom: '24px'}}>
        <div style={{fontSize: '20px', marginBottom: '8px'}}>🗂️</div>
        <p style={{fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '6px'}}>Inventory Alert</p>
        <p style={{fontSize: '13px', color: '#7ececa', marginBottom: '16px'}}>
          4 items are below critical stock levels. Immediate reorder recommended for Weekend peak.
        </p>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <button style={{flex: 1, padding: '12px', background: 'white', color: '#0D3333', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer'}}>
            Manage Stock
          </button>
          <button style={{width: '40px', height: '40px', background: 'transparent', border: '1px solid #1a5c5a', borderRadius: '8px', color: 'white', fontSize: '20px', cursor: 'pointer'}}>
            +
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
          <p style={{fontSize: '16px', fontWeight: '600', color: '#1a1a2e'}}>Recent Transactions</p>
          <span style={{fontSize: '13px', color: '#0D3333', cursor: 'pointer', fontWeight: '500'}}>View All Registry</span>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr', gap: '8px', padding: '8px 0', borderBottom: '1px solid #e5e7eb', marginBottom: '4px'}}>
          {['TRANSACTION ID', 'CUSTOMER', 'TIME', 'AMOUNT', 'STATUS'].map(h => (
            <p key={h} style={{fontSize: '11px', color: '#888', fontWeight: '600'}}>{h}</p>
          ))}
        </div>
        {[
          { id: '#TR-88219', name: 'Adrian Miller', initials: 'AM', time: '14:22 PM', amount: '$214.50', status: 'COMPLETED', color: '#16a34a', bg: '#dcfce7' },
          { id: '#TR-88218', name: 'Walk-in Customer', initials: 'WC', time: '14:15 PM', amount: '$45.00', status: 'COMPLETED', color: '#16a34a', bg: '#dcfce7' },
          { id: '#TR-88217', name: 'Sarah Parker', initials: 'SP', time: '13:58 PM', amount: '$892.20', status: 'FLAGGED', color: '#dc2626', bg: '#fee2e2' },
        ].map(tx => (
          <div key={tx.id} style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr', gap: '8px', padding: '14px 0', borderBottom: '1px solid #f3f4f6', alignItems: 'center'}}>
            <p style={{fontSize: '13px', color: '#555'}}>{tx.id}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <div style={{width: '28px', height: '28px', borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', color: '#555', flexShrink: 0}}>{tx.initials}</div>
              <p style={{fontSize: '13px', color: '#1a1a2e', fontWeight: '500'}}>{tx.name}</p>
            </div>
            <p style={{fontSize: '13px', color: '#555'}}>{tx.time}</p>
            <p style={{fontSize: '13px', fontWeight: '600', color: '#1a1a2e'}}>{tx.amount}</p>
            <span style={{fontSize: '11px', fontWeight: '600', color: tx.color, background: tx.bg, padding: '3px 10px', borderRadius: '99px', textAlign: 'center'}}>{tx.status}</span>
          </div>
        ))}
      </div>

    </div>  
  )
}

const products = [
  { id: 1, name: 'Premium Cotton Tee', category: 'Apparel', price: 45, emoji: '👕' },
  { id: 2, name: 'Architectural Watch', category: 'Accessories', price: 220, emoji: '⌚' },
  { id: 3, name: 'Linen Throw', category: 'Home Decor', price: 85, emoji: '🛋️' },
  { id: 4, name: 'Noise Cancelling Headphones', category: 'Electronics', price: 350, emoji: '🎧' },
  { id: 5, name: 'Ceramic Vessel', category: 'Home Decor', price: 32, emoji: '🏺' },
  { id: 6, name: 'Heritage Sneaker', category: 'Apparel', price: 110, emoji: '👟' },
  { id: 7, name: 'Observer Shades', category: 'Accessories', price: 185, emoji: '🕶️' },
  { id: 8, name: 'Velocity Runner', category: 'Apparel', price: 145, emoji: '🏃' },
]

function Sales() {
  const [cart, setCart] = React.useState([])
  const [activeCategory, setActiveCategory] = React.useState('All')

  const categories = ['All', 'Apparel', 'Accessories', 'Home Decor', 'Electronics']

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? {...i, qty: i.qty + 1} : i)
      }
      return [...prev, {...product, qty: 1}]
    })
  }

  function changeQty(id, delta) {
    setCart(prev => {
      return prev.map(i => i.id === id ? {...i, qty: i.qty + delta} : i)
             .filter(i => i.qty > 0)
    })
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const tax = subtotal * 0.085
  const total = subtotal + tax

  return (
    <div style={{display: 'flex', height: '100%', overflow: 'hidden'}}>

      {/* LEFT — Product Grid */}
      <div style={{flex: 1, padding: '24px', overflowY: 'auto', borderRight: '1px solid #e5e7eb'}}>

        {/* Category Tabs */}
        <div style={{display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap'}}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '6px 16px', borderRadius: '99px', border: '1px solid #e5e7eb',
              fontSize: '13px', fontWeight: '500', cursor: 'pointer',
              background: activeCategory === cat ? '#0D3333' : 'white',
              color: activeCategory === cat ? 'white' : '#555',
            }}>{cat}</button>
          ))}
        </div>

        {/* Products */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px'}}>
          {filtered.map(product => (
            <div key={product.id} onClick={() => addToCart(product)} style={{
              background: 'white', borderRadius: '12px', padding: '16px',
              border: '1px solid #e5e7eb', cursor: 'pointer',
              transition: 'transform 0.1s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{fontSize: '40px', marginBottom: '10px', textAlign: 'center'}}>{product.emoji}</div>
              <p style={{fontSize: '13px', fontWeight: '600', color: '#1a1a2e', marginBottom: '2px'}}>{product.name}</p>
              <p style={{fontSize: '11px', color: '#888', marginBottom: '8px'}}>{product.category}</p>
              <p style={{fontSize: '15px', fontWeight: '700', color: '#0D3333'}}>${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Current Order */}
      <div style={{width: '320px', display: 'flex', flexDirection: 'column', background: 'white', flexShrink: 0}}>

        {/* Header */}
        <div style={{padding: '20px', borderBottom: '1px solid #e5e7eb'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{fontSize: '16px', fontWeight: '600', color: '#1a1a2e'}}>Current Order</p>
            <span style={{fontSize: '12px', color: '#888', background: '#f3f4f6', padding: '3px 10px', borderRadius: '99px'}}>ORDER #4201</span>
          </div>
          <p style={{fontSize: '12px', color: '#888', marginTop: '4px'}}>👤 Guest Customer</p>
        </div>

        {/* Cart Items */}
        <div style={{flex: 1, overflowY: 'auto', padding: '12px 20px'}}>
          {cart.length === 0 ? (
            <div style={{textAlign: 'center', padding: '40px 0', color: '#888'}}>
              <p style={{fontSize: '32px', marginBottom: '8px'}}>🛒</p>
              <p style={{fontSize: '13px'}}>Tap a product to add it</p>
            </div>
          ) : cart.map(item => (
            <div key={item.id} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f3f4f6'}}>
              <div style={{fontSize: '24px'}}>{item.emoji}</div>
              <div style={{flex: 1}}>
                <p style={{fontSize: '13px', fontWeight: '600', color: '#1a1a2e'}}>{item.name}</p>
                <p style={{fontSize: '12px', color: '#888'}}>${item.price}</p>
              </div>
              {/* Qty Controls */}
              <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <button onClick={() => changeQty(item.id, -1)} style={{width: '24px', height: '24px', borderRadius: '6px', border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>−</button>
                <span style={{fontSize: '13px', fontWeight: '600', minWidth: '16px', textAlign: 'center'}}>{item.qty}</span>
                <button onClick={() => changeQty(item.id, 1)} style={{width: '24px', height: '24px', borderRadius: '6px', border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>+</button>
              </div>
              <p style={{fontSize: '13px', fontWeight: '600', minWidth: '52px', textAlign: 'right'}}>${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div style={{padding: '16px 20px', borderTop: '1px solid #e5e7eb'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
            <span style={{fontSize: '13px', color: '#888'}}>Subtotal</span>
            <span style={{fontSize: '13px'}}>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
            <span style={{fontSize: '13px', color: '#888'}}>Tax (8.5%)</span>
            <span style={{fontSize: '13px'}}>${tax.toFixed(2)}</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
            <span style={{fontSize: '16px', fontWeight: '700'}}>Total</span>
            <span style={{fontSize: '16px', fontWeight: '700', color: '#0D3333'}}>${total.toFixed(2)}</span>
          </div>

          {/* Buttons */}
          <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
            <button style={{flex: 1, padding: '10px', border: '1px solid #e5e7eb', borderRadius: '8px', background: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#555'}}>HOLD</button>
            <button style={{flex: 1, padding: '10px', border: '1px solid #e5e7eb', borderRadius: '8px', background: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#555'}}>DISCOUNT</button>
          </div>
          <button
            onClick={() => { if(cart.length > 0) { alert(`Order complete! Total: $${total.toFixed(2)}`); setCart([]) }}}
            style={{
              width: '100%', padding: '14px', background: cart.length > 0 ? '#0D3333' : '#ccc',
              color: 'white', border: 'none', borderRadius: '8px',
              fontSize: '15px', fontWeight: '700', cursor: cart.length > 0 ? 'pointer' : 'default',
            }}>
            CHECKOUT →
          </button>
        </div>
      </div>
    </div>
  )
}


function Inventory() {
  const [search, setSearch] = React.useState('')
  const [activeTab, setActiveTab] = React.useState('Global Inventory')

  const items = [
    { name: 'Luna Chronograph', sku: 'LUN-24-XT', qty: 142, status: 'IN STOCK', emoji: '⌚' },
    { name: 'Sonic Headset Pro', sku: 'SON-PRO-B', qty: 8, status: 'LOW STOCK', emoji: '🎧' },
    { name: 'Aero Runner v2', sku: 'RUN-V2-RD', qty: 0, status: 'OUT OF STOCK', emoji: '👟' },
    { name: 'Premium Cotton Tee', sku: 'PCT-WHT-M', qty: 54, status: 'IN STOCK', emoji: '👕' },
    { name: 'Ceramic Vessel', sku: 'CER-VES-01', qty: 5, status: 'LOW STOCK', emoji: '🏺' },
    { name: 'Linen Throw', sku: 'LIN-THR-GY', qty: 23, status: 'IN STOCK', emoji: '🛋️' },
  ]

  const batches = [
    { id: '#6821', name: 'Ceramic Vessel Set', phase: 'Kiln Phase', progress: 65, team: ['AM', 'SK'], eta: '4h remaining' },
    { id: '#6825', name: 'Organic Cotton Tote', phase: 'Cutting', progress: 20, team: ['JD'], eta: '12h remaining' },
  ]

  const statusStyle = (status) => {
    if (status === 'IN STOCK') return { color: '#16a34a', background: '#dcfce7' }
    if (status === 'LOW STOCK') return { color: '#d97706', background: '#fef3c7' }
    return { color: '#dc2626', background: '#fee2e2' }
  }

  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.sku.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{padding: '24px'}}>

      {/* Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px'}}>
        <div>
          <p style={{fontSize: '12px', color: '#888', fontWeight: '600', letterSpacing: '0.05em'}}>STOCK CONTROL</p>
          <h1 style={{fontSize: '26px', fontWeight: '700', color: '#1a1a2e', marginTop: '4px'}}>Inventory &{'\n'}Production</h1>
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          {['Global Inventory', 'Production Floor'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '8px 16px', borderRadius: '8px', border: '1px solid #e5e7eb',
              fontSize: '13px', fontWeight: '500', cursor: 'pointer',
              background: activeTab === tab ? '#0D3333' : 'white',
              color: activeTab === tab ? 'white' : '#555',
            }}>{tab}</button>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        <div style={{flex: 1, background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
            <span style={{fontSize: '16px'}}>⚠️</span>
            <p style={{fontSize: '12px', color: '#888', fontWeight: '600'}}>Critical Restock</p>
          </div>
          <p style={{fontSize: '36px', fontWeight: '700', color: '#1a1a2e'}}>12</p>
          <p style={{fontSize: '12px', color: '#888', marginTop: '4px'}}>Items below safety threshold</p>
        </div>
        <div style={{flex: 1, background: '#0D3333', borderRadius: '12px', padding: '20px'}}>
          <p style={{fontSize: '12px', color: '#7ececa', fontWeight: '600', marginBottom: '8px'}}>Active Production</p>
          <p style={{fontSize: '36px', fontWeight: '700', color: 'white'}}>482</p>
          <p style={{fontSize: '12px', color: '#7ececa', marginTop: '4px'}}>Units in work-in-progress</p>
        </div>
        <div style={{flex: 1, background: '#e1f5ee', borderRadius: '12px', padding: '20px', border: '1px solid #9fe1cb'}}>
          <p style={{fontSize: '12px', color: '#0f6e56', fontWeight: '600', marginBottom: '8px'}}>Ready to Ship</p>
          <p style={{fontSize: '36px', fontWeight: '700', color: '#0D3333'}}>1.2k</p>
          <div style={{height: '3px', width: '40px', background: '#0D3333', borderRadius: '2px', marginTop: '8px'}}></div>
        </div>
      </div>

      {/* Master Inventory Table */}
      <div style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
          <p style={{fontSize: '16px', fontWeight: '600', color: '#1a1a2e'}}>Master Inventory</p>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search SKUs..."
            style={{padding: '7px 14px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '13px', outline: 'none', width: '200px'}}
          />
        </div>

        {/* Table Head */}
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr', gap: '8px', padding: '8px 0', borderBottom: '1px solid #e5e7eb', marginBottom: '4px'}}>
          {['PRODUCT', 'SKU', 'QUANTITY', 'STATUS'].map(h => (
            <p key={h} style={{fontSize: '11px', color: '#888', fontWeight: '600'}}>{h}</p>
          ))}
        </div>

        {filtered.map(item => (
          <div key={item.sku} style={{display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr', gap: '8px', padding: '14px 0', borderBottom: '1px solid #f3f4f6', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '36px', height: '36px', borderRadius: '8px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'}}>{item.emoji}</div>
              <p style={{fontSize: '13px', fontWeight: '600', color: '#1a1a2e'}}>{item.name}</p>
            </div>
            <p style={{fontSize: '12px', color: '#888', fontFamily: 'monospace'}}>{item.sku}</p>
            <p style={{fontSize: '14px', fontWeight: '700', color: item.qty === 0 ? '#dc2626' : '#1a1a2e'}}>{item.qty}</p>
            <span style={{fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px', textAlign: 'center', ...statusStyle(item.status)}}>{item.status}</span>
          </div>
        ))}
      </div>

      {/* Live Production */}
      <div style={{marginBottom: '24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
          <p style={{fontSize: '16px', fontWeight: '600', color: '#1a1a2e'}}>Live Production</p>
          <span style={{fontSize: '13px', color: '#0D3333', cursor: 'pointer', fontWeight: '500'}}>View All</span>
        </div>

        {batches.map(batch => (
          <div key={batch.id} style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '12px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px'}}>
              <p style={{fontSize: '12px', color: '#888'}}>BATCH {batch.id}</p>
              <span style={{fontSize: '11px', fontWeight: '600', color: '#d97706', background: '#fef3c7', padding: '3px 10px', borderRadius: '99px'}}>{batch.phase}</span>
            </div>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#1a1a2e', marginBottom: '12px'}}>{batch.name}</p>
            <p style={{fontSize: '12px', color: '#888', marginBottom: '6px'}}>Production Progress</p>
            <div style={{background: '#f3f4f6', borderRadius: '99px', height: '6px', marginBottom: '8px'}}>
              <div style={{width: `${batch.progress}%`, background: '#0D3333', borderRadius: '99px', height: '6px'}}></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{display: 'flex', gap: '4px'}}>
                {batch.team.map(t => (
                  <div key={t} style={{width: '24px', height: '24px', borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', color: '#555'}}>{t}</div>
                ))}
              </div>
              <p style={{fontSize: '12px', color: '#888'}}>{batch.progress}% · {batch.eta}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Initiate Batch Button */}
      <button style={{width: '100%', padding: '14px', background: '#0D3333', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer'}}>
        + Initiate Production Batch
      </button>

    </div>
  )
}


function Customers() {
  const [activeTab, setActiveTab] = React.useState('ALL CUSTOMERS')
  const [selected, setSelected] = React.useState(null)

  const customers = [
    { id: 1, name: 'Julianne Sterling', email: 'j.sterling@executive.com', since: '2021', spend: '$12,450.00', score: 4.9, initials: 'JS', color: '#e1f5ee' },
    { id: 2, name: 'Marcus Thorne', email: 'm.thorne@design.io', since: '2023', spend: '$3,120.45', score: 4.2, initials: 'MT', color: '#e6f1fb' },
    { id: 3, name: 'Elara Vance', email: 'elara.vance@arch.com', since: '2020', spend: '$28,940.00', score: 5.0, initials: 'EV', color: '#faeeda' },
    { id: 4, name: 'Benjamin Wu', email: 'b.wu@techgrowth.net', since: '2022', spend: '$8,675.00', score: 4.6, initials: 'BW', color: '#faece7' },
  ]

  const stats = [
    { label: 'Active Accounts', value: '1,284', sub: '+12% this month' },
    { label: 'Average Lifetime Value', value: '$4,820', sub: 'Top Tier Retail' },
    { label: 'Retention Rate', value: '94.2%', sub: '-0.4% from last qtr' },
  ]

  const history = [
    { item: 'Architectural Draft Set', date: 'Nov 12, 2023', inv: 'INV-9042', amount: '$1,240.00' },
    { item: 'Custom Oak Workstation', date: 'Oct 28, 2023', inv: 'INV-8521', amount: '$4,500.00' },
    { item: 'Fine Art Prints (x3)', date: 'Sep 15, 2023', inv: 'INV-8010', amount: '$890.00' },
  ]

  function Stars({ score }) {
    return (
      <div style={{display: 'flex', gap: '2px'}}>
        {[1,2,3,4,5].map(i => (
          <span key={i} style={{color: i <= Math.round(score) ? '#f59e0b' : '#e5e7eb', fontSize: '13px'}}>★</span>
        ))}
        <span style={{fontSize: '12px', color: '#888', marginLeft: '4px'}}>{score}</span>
      </div>
    )
  }

  if (selected) {
    return (
      <div style={{padding: '24px'}}>
        <button onClick={() => setSelected(null)} style={{marginBottom: '16px', background: 'none', border: 'none', color: '#0D3333', fontSize: '14px', cursor: 'pointer', fontWeight: '600'}}>← Back to Customers</button>

        {/* Profile Header */}
        <div style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '16px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '50%', background: selected.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#0D3333'}}>{selected.initials}</div>
            <div style={{flex: 1}}>
              <p style={{fontSize: '16px', fontWeight: '700', color: '#1a1a2e'}}>{selected.name}</p>
              <p style={{fontSize: '12px', color: '#888'}}>{selected.email} · Since {selected.since}</p>
            </div>
            <div style={{textAlign: 'right'}}>
              <p style={{fontSize: '18px', fontWeight: '700', color: '#1a1a2e'}}>{selected.spend}</p>
              <Stars score={selected.score} />
            </div>
          </div>
          <span style={{fontSize: '11px', fontWeight: '700', color: '#0D3333', background: '#e1f5ee', padding: '4px 12px', borderRadius: '99px'}}>VIP CLIENT</span>
        </div>

        {/* Recent History */}
        <div style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '16px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#1a1a2e'}}>Recent History</p>
            <span style={{fontSize: '13px', color: '#0D3333', cursor: 'pointer', fontWeight: '500'}}>SEE ALL</span>
          </div>
          {history.map(h => (
            <div key={h.inv} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f3f4f6'}}>
              <div>
                <p style={{fontSize: '14px', fontWeight: '500', color: '#1a1a2e'}}>{h.item}</p>
                <p style={{fontSize: '12px', color: '#888'}}>{h.date} · {h.inv}</p>
              </div>
              <p style={{fontSize: '14px', fontWeight: '600', color: '#1a1a2e'}}>{h.amount}</p>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div style={{background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb', marginBottom: '16px'}}>
          <p style={{fontSize: '15px', fontWeight: '600', color: '#1a1a2e', marginBottom: '12px'}}>Executive Notes</p>
          <div style={{background: '#f9fafb', borderRadius: '8px', padding: '14px', border: '1px solid #e5e7eb'}}>
            <p style={{fontSize: '13px', color: '#555', fontStyle: 'italic', lineHeight: '1.6'}}>
              "Prefer direct communication via encrypted mail. Interested in artisanal office furniture series launching in Q1."
            </p>
          </div>
        </div>

        <button style={{width: '100%', padding: '14px', background: '#0D3333', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer'}}>
          📄 Generate Statement
        </button>
      </div>
    )
  }

  return (
    <div style={{padding: '24px'}}>

      {/* Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
        <div>
          <p style={{fontSize: '12px', color: '#888', fontWeight: '600', letterSpacing: '0.05em'}}>EXECUTIVE DIRECTORY</p>
          <h1 style={{fontSize: '26px', fontWeight: '700', color: '#1a1a2e', marginTop: '4px'}}>Customers</h1>
        </div>
        <button style={{padding: '10px 18px', background: '#0D3333', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>
          + New Customer
        </button>
      </div>

      {/* Stats */}
      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        {stats.map(s => (
          <div key={s.label} style={{flex: 1, background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb'}}>
            <p style={{fontSize: '11px', color: '#888', fontWeight: '600', marginBottom: '8px'}}>{s.label.toUpperCase()}</p>
            <p style={{fontSize: '24px', fontWeight: '700', color: '#1a1a2e'}}>{s.value}</p>
            <p style={{fontSize: '12px', color: '#888', marginTop: '4px'}}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{display: 'flex', gap: '4px', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '0'}}>
        {['ALL CUSTOMERS', 'TOP SPENDERS', 'FREQUENT VISITORS'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: '8px 16px', border: 'none', background: 'none',
            fontSize: '12px', fontWeight: '600', cursor: 'pointer',
            color: activeTab === tab ? '#0D3333' : '#888',
            borderBottom: activeTab === tab ? '2px solid #0D3333' : '2px solid transparent',
          }}>{tab}</button>
        ))}
      </div>

      {/* Customer List */}
      <div style={{background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden'}}>
        {customers.map((c, i) => (
          <div key={c.id} onClick={() => setSelected(c)} style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            padding: '16px 20px', cursor: 'pointer',
            borderBottom: i < customers.length - 1 ? '1px solid #f3f4f6' : 'none',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
          onMouseLeave={e => e.currentTarget.style.background = 'white'}
          >
            <div style={{width: '44px', height: '44px', borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#0D3333', flexShrink: 0}}>{c.initials}</div>
            <div style={{flex: 1}}>
              <p style={{fontSize: '14px', fontWeight: '600', color: '#1a1a2e'}}>{c.name}</p>
              <p style={{fontSize: '12px', color: '#888'}}>{c.email} · Since {c.since}</p>
            </div>
            <div style={{textAlign: 'right'}}>
              <p style={{fontSize: '14px', fontWeight: '700', color: '#1a1a2e'}}>{c.spend}</p>
              <p style={{fontSize: '11px', color: '#888'}}>TOTAL SPEND</p>
            </div>
            <Stars score={c.score} />
          </div>
        ))}
      </div>
    </div>
  )
}


function Locations() {
  const [activeView, setActiveView] = React.useState('Map View')

  const locations = [
    { name: 'SoHo Atelier', address: '110 Greene St', volume: '$18,420.00', rating: 4.9, reviews: 214, badge: '+16.4% vs last week', isTop: true },
    { name: 'Brooklyn Heights', address: '122 Atlantic Ave', volume: '$8,240.00', rating: 4.7, reviews: 142 },
    { name: 'Tribeca Loft', address: '34 Hudson St', volume: '$14,110.00', rating: 4.9, reviews: 89 },
  ]

  const reviews = [
    { name: 'Elena Rodriguez', location: 'SOHO ATELIER', time: '12M AGO', stars: 5, text: 'The curated selection here is unparalleled. The staff at SoHo recognized my preferences immediately. Truly an executive experience.' },
    { name: 'Marcus Chen', location: 'TRIBECA LOFT', time: '19M AGO', stars: 4, text: 'Great atmosphere and very efficient checkout process. Only feedback is the lighting near the back gallery could be brighter.' },
    { name: 'Sarah Jenkins', location: 'BROOKLYN HEIGHTS', time: '31M AGO', stars: 2, text: 'Wait times were longer than expected today. Usually seamless but I was standing in line for 15 minutes.', escalate: true },
  ]

  function Stars({ score, size = 13 }) {
    return (
      <div style={{display: 'flex', gap: '2px'}}>
        {[1,2,3,4,5].map(i => (
          <span key={i} style={{color: i <= Math.round(score) ? '#f59e0b' : '#e5e7eb', fontSize: size + 'px'}}>★</span>
        ))}
      </div>
    )
  }

  return (
    <div style={{padding: '24px'}}>

      {/* Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px'}}>
        <div>
          <h1 style={{fontSize: '26px', fontWeight: '700', color: '#1a1a2e'}}>Regional Insights</h1>
          <p style={{fontSize: '13px', color: '#888', marginTop: '4px'}}>Performance mapping and customer sentiment analysis across your retail network.</p>
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          {['Map View', 'List View'].map(v => (
            <button key={v} onClick={() => setActiveView(v)} style={{
              padding: '8px 16px', borderRadius: '8px', border: '1px solid #e5e7eb',
              fontSize: '13px', fontWeight: '500', cursor: 'pointer',
              background: activeView === v ? '#0D3333' : 'white',
              color: activeView === v ? 'white' : '#555',
            }}>{v}</button>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div style={{background: '#e8f0e9', borderRadius: '12px', height: '200px', marginBottom: '16px', position: 'relative', overflow: 'hidden', border: '1px solid #d1e8d3'}}>
        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p style={{fontSize: '13px', color: '#888'}}>🗺️ Interactive map — connects to Google Maps API with backend</p>
        </div>
        {/* Fake map pins */}
        {[{top: '40%', left: '45%', label: 'SoHo'}, {top: '65%', left: '35%', label: 'Brooklyn'}, {top: '35%', left: '55%', label: 'Tribeca'}].map(pin => (
          <div key={pin.label} style={{position: 'absolute', top: pin.top, left: pin.left}}>
            <div style={{background: '#0D3333', color: 'white', borderRadius: '8px', padding: '4px 10px', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap'}}>📍 {pin.label}</div>
          </div>
        ))}
        {/* Top performer card */}
        <div style={{position: 'absolute', bottom: '16px', left: '16px', background: 'white', borderRadius: '10px', padding: '10px 14px', border: '1px solid #e5e7eb'}}>
          <p style={{fontSize: '10px', color: '#888', fontWeight: '600'}}>TOP PERFORMER</p>
          <p style={{fontSize: '14px', fontWeight: '700', color: '#0D3333'}}>SoHo Atelier</p>
          <span style={{fontSize: '11px', color: '#16a34a', background: '#dcfce7', padding: '2px 8px', borderRadius: '99px', fontWeight: '600'}}>+16.4% vs last week</span>
        </div>
        {/* Rating card */}
        <div style={{position: 'absolute', bottom: '16px', right: '16px', background: 'white', borderRadius: '10px', padding: '10px 14px', border: '1px solid #e5e7eb'}}>
          <p style={{fontSize: '10px', color: '#888', fontWeight: '600'}}>REGIONAL AVG. RATING</p>
          <p style={{fontSize: '20px', fontWeight: '700', color: '#1a1a2e'}}>4.82</p>
          <Stars score={5} size={14} />
        </div>
      </div>

      {/* Location Cards */}
      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        {locations.map(loc => (
          <div key={loc.name} style={{flex: 1, background: 'white', borderRadius: '12px', padding: '20px', border: `1px solid ${loc.isTop ? '#0D3333' : '#e5e7eb'}`}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
              <div>
                <p style={{fontSize: '15px', fontWeight: '700', color: '#1a1a2e'}}>{loc.name}</p>
                <p style={{fontSize: '12px', color: '#888'}}>{loc.address}</p>
              </div>
              <span style={{fontSize: '16px'}}>{loc.isTop ? '🏆' : '🏪'}</span>
            </div>
            <p style={{fontSize: '22px', fontWeight: '700', color: '#0D3333', marginBottom: '4px'}}>{loc.volume}</p>
            <p style={{fontSize: '12px', color: '#888'}}>DAILY VOLUME</p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #f3f4f6'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <span style={{color: '#f59e0b', fontSize: '13px'}}>★</span>
                <span style={{fontSize: '13px', fontWeight: '600'}}>{loc.rating}</span>
              </div>
              <span style={{fontSize: '12px', color: '#888'}}>{loc.reviews} reviews</span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Sentiment */}
      <div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
          <p style={{fontSize: '16px', fontWeight: '600', color: '#1a1a2e'}}>Live Sentiment</p>
          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#dc2626', animation: 'pulse 1.5s infinite'}}></div>
        </div>

        {reviews.map((r, i) => (
          <div key={i} style={{background: 'white', borderRadius: '12px', padding: '18px', border: `1px solid ${r.escalate ? '#fca5a5' : '#e5e7eb'}`, marginBottom: '12px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: r.escalate ? '#fee2e2' : '#e1f5ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: '#0D3333'}}>
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p style={{fontSize: '13px', fontWeight: '600', color: '#1a1a2e'}}>{r.name}</p>
                  <p style={{fontSize: '11px', color: '#888'}}>{r.location} · {r.time}</p>
                </div>
              </div>
              <Stars score={r.stars} />
            </div>
            <p style={{fontSize: '13px', color: '#555', lineHeight: '1.6', fontStyle: 'italic'}}>"{r.text}"</p>
            {r.escalate && (
              <button style={{marginTop: '10px', padding: '6px 14px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>
                ESCALATE TO MANAGER
              </button>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}


function Layout({ children }) {
  const navStyle = (isActive) => ({
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '10px 14px', borderRadius: '8px',
    textDecoration: 'none', fontSize: '14px',
    fontWeight: '500', marginBottom: '4px',
    background: isActive ? '#0D3333' : 'transparent',
    color: isActive ? 'white' : '#555',
  })
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#F0F2F5' }}>
      <aside style={{ width: '220px', background: 'white', borderRight: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', padding: '16px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '8px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#0D3333', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>EP</div>
          <span style={{ fontWeight: '600', fontSize: '13px' }}>The Editorial POS</span>
        </div>
        <nav>
          <NavLink to="/" end style={({ isActive }) => navStyle(isActive)}>📊 Dashboard</NavLink>
          <NavLink to="/sales" style={({ isActive }) => navStyle(isActive)}>🛒 Sales</NavLink>
          <NavLink to="/inventory" style={({ isActive }) => navStyle(isActive)}>📦 Inventory</NavLink>
          <NavLink to="/customers" style={({ isActive }) => navStyle(isActive)}>👥 Customers</NavLink>
          <NavLink to="/locations" style={({ isActive }) => navStyle(isActive)}>📍 Locations</NavLink>
        </nav>
      </aside>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <header style={{ height: '56px', background: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
          <span style={{ fontWeight: '600', fontSize: '14px' }}>The Editorial POS</span>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>🔔</div>
        </header>
        <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}