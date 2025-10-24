import Card from './components/Card.jsx'

const List = ({title, users}) => {
    return (
        <div style={styles.section}>
        <h2>{title}</h2>
        <div style={styles.container}>
            {users.map((users)=> (
                <Card key={user.id} user = {user} />
            ))}
        </div>

        </div>
    );
};

const styles = {
  section: { marginTop: "20px"},
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "10px",
  },
};

export default List;