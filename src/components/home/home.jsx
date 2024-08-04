export const Home = () => {
  return (
    <div className="container mt-5 h-75">
      <div className="row h-100 d-flex align-items-center text-center">
        <div className="col">
          <h1>&lt;Code&gt;</h1>
          <p className="text-muted">
            Aspiring web developer mastering the art of coding through
            auto-didact learning.
          </p>
        </div>
        <div className="col">
          <i
            style={{ color: "lightblue", fontSize: "350px" }}
            className="bi bi-person-circle display-1"
          ></i>
        </div>
        <div className="col">
          <h1>&lt;/Code&gt;</h1>
          <p className="text-muted">
            Passionate about creating innovative and user-friendly web
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
