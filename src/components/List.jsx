import Card from './Card.jsx'

const List = ({title, users}) => {
    return (
        <div style={styles.section}>
        <h2>{title}</h2>
        <div style={styles.container}>
          {users.map((user) => (
          <Card key={user.id} user={user} />
    ))}
            
        </div>

        </div>
    );
};

export default List;

const styles = {
    section: { marginTop: "28px", maxWidth: "1100px", marginInline: "auto" },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "20px",
      marginTop: "16px",
      alignItems: "stretch",
    },
  };

