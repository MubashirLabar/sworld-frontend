import AuthLayout from "components/layouts/authLayout";
import Hero from "./hero";
import HowItWork from "./howItWork";

function Home() {
  return (
    <AuthLayout className="home-page">
      <Hero />
      <HowItWork />
    </AuthLayout>
  );
}

export default Home;
