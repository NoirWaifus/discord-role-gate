export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif',padding:'40px',maxWidth:'720px',margin:'0 auto'}}>
      <h1>Verificacion Discord</h1>
      <p>Pulsa aqui para verificarte y recibir el rol.</p>
      <a href="/api/login" style={{display:'inline-block',padding:'12px 18px',background:'#5865F2',color:'#fff',textDecoration:'none',borderRadius:'10px'}}>
        Entrar con Discord
      </a>
    </main>
  )
}
