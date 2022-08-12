import "../../css/createOrUpdateTemplate.css";
function CreateOrUpdate(props) {
  return (
    <div>
      <label className="COU__title__lable">
        Title:
        <input
          className="COU__title"
          placeholder="What heading?"
          value={props.title}
          name="title"
          onChange={(event) => props.setTitle(event.target.value)}
        />
      </label>
      <label className="COU__text__lable">
        Post:
        <textarea
          className="COU__text"
          placeholder="What is the text?"
          value={props.text}
          name="text"
          rows="6"
          onChange={(event) => props.setText(event.target.value)}
        ></textarea>
      </label>
    </div>
  );
}
export default CreateOrUpdate;
