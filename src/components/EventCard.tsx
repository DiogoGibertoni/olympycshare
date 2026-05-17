interface EventCardProps {
  title: string;
  sport: string;
  date: string;
  location: string;
  spotsLeft: number;
}

export function EventCard({ title, sport, date, location, spotsLeft }: EventCardProps) {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: "1rem",
      marginBottom: "1rem",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "var(--primary)" }}>{title}</h3>
        <span style={{
          background: spotsLeft > 0 ? "#E8F5E9" : "#FFEBEE",
          color: spotsLeft > 0 ? "#1B5E20" : "#B71C1C",
          padding: "0.25rem 0.75rem",
          borderRadius: 20,
          fontSize: "0.8rem",
          fontWeight: 600,
        }}>
          {spotsLeft > 0 ? spotsLeft + " vagas" : "Lotado"}
        </span>
      </div>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
        {sport} | {date} | {location}
      </p>
    </div>
  );
}
