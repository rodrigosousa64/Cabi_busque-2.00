import './App.css'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'var(--accent-blue)', fontSize: '3rem' }}>
        &gt; CABI_BUSQUE_2.0
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '20px' }}>
        // Bem-vindo ao novo sistema de simulação e buscas do ENEM.
      </p>
      <div style={{ marginTop: '40px' }}>
        <a 
          href="/calculadora" 
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            background: 'var(--accent-blue)',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          [ ACESSAR CALCULADORA TRI ]
        </a>
      </div>
    </div>
  )
}

export default App
