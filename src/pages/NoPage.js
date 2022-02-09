const NoPage = () => {
    return(
      <div className="container p-5">
      <div className="row">
        <div className="col text-center">
          <h1>404</h1>
          <p>Uh-oh, looks like the page you were looking for does not exist. Click <a href="/" className="text-decoration-none text-muted">here</a> to return to the home page.</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default NoPage;