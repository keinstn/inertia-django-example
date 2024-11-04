import { Link } from "@inertiajs/react";

const Index = ({ latest_question_list }) => {
  return (
    <ul>
      {latest_question_list.map((e) => {
        return (
          <li key={e.id}>
            <Link href={reverseUrl("polls:detail", e.id)}>
              {e.question_text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
