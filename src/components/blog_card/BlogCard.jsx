import "./blog_card.css";
import img_1 from "./img_1_bg.jpg";
import img_2 from "./img_4_bgp.jfif";
function BlogCard() {
  return (
    <div className="row">

  

    <div className="card-deck">
      <div className="col-lg-4">
        <div className="card">
          <img className="i1c1 img" src={img_1} alt="Card image cap"/>

          <p className="subscript">
          <img className="i2c1 imgs" src={img_2} alt="famous personality images"/>
          Steve Jobs
          <br/>
          Apple
          </p>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

     
      <div className="col-lg-4">
        <div className="card">
          <img className="i1c1 img" src={img_1} alt="Card image cap"/>


          <p className="subscript">
          <img className="i2c1 imgs" src={img_2} alt="famous personality images"/>
          Steve Jobs
          <br/>
          Apple
          </p>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
     
      <div className="col-lg-4">
        <div className="card">
          <img className="i1c1 img" src={img_1} alt="Card image cap"/>

          <p className="subscript">
          <img className="i2c1 imgs" src={img_2} alt="famous personality images"/>
          Steve Jobs
          <br/>
          Apple
          </p>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default BlogCard;
