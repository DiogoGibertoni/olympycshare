export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
          OlympycShare
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
          Encontre parceiros de treino. Organize eventos. Pratique esportes.
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem",
      }}>
        {[
          { icon: "??", title: "Crie Eventos", desc: "Organize partidas de qualquer esporte com data, local e vagas." },
          { icon: "??", title: "Descubra", desc: "Encontre eventos proximos filtrados por esporte e localizacao." },
          { icon: "??", title: "Conecte-se", desc: "Conheca pessoas com os mesmos interesses esportivos." },
          { icon: "??", title: "Combine", desc: "Chat integrado para alinhar detalhes com os participantes." },
        ].map((feature) => (
          <div key={feature.title} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "1.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{feature.icon}</div>
            <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>{feature.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{feature.desc}</p>
          </div>
        ))}
      </section>

      <footer style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
        <p>PUCPR - Metodos Ageis 2026/1 - Sprint 1 em andamento</p>
      </footer>
    </main>
  );
}
