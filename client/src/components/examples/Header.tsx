import Header from "../Header";

export default function HeaderExample() {
  return (
    <Header
      user={{
        name: "Marie Dubois",
        email: "marie.dubois@entreprise.fr",
        avatar: "",
        authProvider: "google",
      }}
      onAuthClick={() => console.log("Auth clicked")}
      onLogout={() => console.log("Logout clicked")}
      onNavigate={(section) => console.log("Navigate to:", section)}
    />
  );
}
