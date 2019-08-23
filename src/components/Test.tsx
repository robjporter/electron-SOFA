import * as React from "react";
import { hot } from "react-hot-loader/root";

function Test() {
  return <div>

      <header class="bg-primary py-3 mb-4">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <h1 class="display-3 text-white mt-2 mb-2">SOFA</h1><h3 class="font-weight-light text-white"><b className="font-weight-bold">S</b>alesforce <b className="font-weight-bold">O</b>pportunity <b className="font-weight-bold">F</b>iltering and <b className="font-weight-bold">A</b>nalytics</h3>
              <p class="lead mb-3 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
            </div>
          </div>
        </div>
      </header>

      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
            <div class="card-body">
              <h4 class="card-title  text-center">Card title</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
            <div class="card-body">
              <h4 class="card-title  text-center">Card title</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
            <div class="card-body  text-center">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
      </div>
  </div>;
}

export default hot(Test);
