import React from "react";
import Jumbotron from "../components/JumbotronComponent";

const Home = () => {
  return (
    <div>
      <Jumbotron heading="DogDayz" subheading="Where every dog has it's day!" />
      {/* Welcome Block */}
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <h2>Welcome!</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4>
              DogDayz Kennel and Obedience training serves the South Jersey area
              with convienece and the best service possible.
            </h4>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur provident placeat delectus dolores similique
              voluptatem porro commodi, non cum libero atque eius quisquam sequi
              alias accusamus rerum suscipit, labore repudiandae quibusdam odit
              maiores voluptatibus omnis sapiente nihil. Alias rem in quam omnis
              accusantium iusto tempora explicabo, commodi voluptates sed vitae
              quod itaque aut illo modi ipsum dolorem? Nulla vel debitis ipsam?
              Nobis tempora, ullam consequuntur, totam debitis blanditiis quas
              repellat laudantium minima praesentium libero nulla commodi quis
              obcaecati autem culpa omnis! Iure soluta dolore fugiat? Debitis
              voluptatum est officia, rem quam ex fuga dicta sed esse obcaecati
              earum molestiae a deserunt ad consectetur velit eveniet facere
              ratione dolor eum natus? Quis fugiat sapiente neque nihil
              molestiae dolor minima esse, veniam culpa sit necessitatibus!
              Enim, mollitia ad voluptas vitae obcaecati optio dicta! Enim culpa
              optio corporis maxime, asperiores officiis, maiores incidunt
              pariatur voluptatibus vero alias quia autem ducimus? Enim, aut
              veniam.
            </p>
            <h6>Give us a call for an appointment today</h6>
            <h3>
              <a className="text-decoration-none" href={`tel:19999999999`}>
                1-999-999-9999
              </a>
            </h3>
          </div>
          <div className="col-6">
            <img
              className="rounded"
              src="https://via.placeholder.com/500/?text=PuppyPicture"
              alt="Picture Of Dog"
            />
          </div>
        </div>
        <hr />
      </div>
      {/* Services Block */}
      <div className="container p-5">
        <div className="row text-center">
          <div className="col">
            <h1>Services</h1>
            <h3 className="pt-1">
              From pickups, to boarding, we got you covered!
            </h3>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-4">
            <img src="https://via.placeholder.com/300" alt="service photo 1" />
          </div>
          <div className="col-4">
            <img src="https://via.placeholder.com/300" alt="service photo 2" />
          </div>
          <div className="col-4">
            <img src="https://via.placeholder.com/300" alt="service photo 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
