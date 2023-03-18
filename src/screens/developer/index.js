import DeveloperCard from "components/developerCard";
import AuthLayout from "components/layouts/authLayout";

function Developer() {
  return (
    <AuthLayout className="developer-page">
      <div className="app-width">
        <div className="headline">
          <div className="title">
            Integrate Secret World search into your website.
          </div>
          <div className="text">
            This documentation is intended for developers who intend to
            integrate Secret World functionality into a website or app,
          </div>
        </div>
      </div>
      <div className="wrapper app-width">
        <div className="developers-list">
          {[...Array(3)].map((_, index) => (
            <DeveloperCard key={index} />
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}

export default Developer;
