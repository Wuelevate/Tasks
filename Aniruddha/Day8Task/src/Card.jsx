import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="parent">
        <div className="child">
          <h4>Name: {props.name}</h4>
          <p>Designation: {props.desg}</p>
        </div>
      </div>
    </>
  );
}
