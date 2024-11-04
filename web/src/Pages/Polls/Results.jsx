import { Link } from "@inertiajs/react";

const Results = ({ question, choice_set }) => {
  return (
    <>
      <h1>{question.question_text}</h1>

      <ul>
        {choice_set.map((choice, index) => (
          <li>
            {choice.choice_text} -- {choice.votes} vote{choice.votes}
          </li>
        ))}
      </ul>

      <Link href={`${reverseUrl("polls:detail", question.id)}`}>
        Vote again?
      </Link>
    </>
  );
};

export default Results;
