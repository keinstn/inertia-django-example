import { Fragment } from "react";
import { useForm } from "@inertiajs/react";

const Detail = ({ question, choice_set }) => {
  const { data, setData, post, errors } = useForm({
    choice: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(reverseUrl("polls:vote", question.id), { forceFormData: true });
  };

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>
          <h1>{question.question_text}</h1>
        </legend>

        {errors.choice ? (
          <p>
            <strong>{errors.choice}</strong>
          </p>
        ) : (
          ""
        )}

        {choice_set.map((choice, index) => (
          <Fragment key={index}>
            <input
              type="radio"
              value={choice.id}
              checked={data.choice == choice.id}
              onChange={(e) => setData("choice", e.target.value)}
            />
            <label htmlFor={`"choice"${index}`}>{choice.choice_text}</label>
            <br />
          </Fragment>
        ))}
      </fieldset>
      <input type="submit" value="Vote" />
    </form>
  );
};

export default Detail;
