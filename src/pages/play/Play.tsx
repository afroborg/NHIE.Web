import { getAsync } from '@/helpers/api-service';
import { IQuestion } from '@/models/IQuestion';
import React, { useEffect, useState } from 'react';
import styles from './play.module.scss';

const Play = () => {
  const [question, setQuestion] = useState<string>();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      const LIMIT = 100;
      const response = await getAsync<IQuestion[]>(
        `questions/random?limit=${LIMIT}`
      );

      setQuestions(response.data);
    };

    fetchQuestions();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!question && questions.length) {
      newQuestion();
      setIsLoading(false);
    }
  }, [questions]); // eslint-disable-line react-hooks/exhaustive-deps

  const newQuestion = () => {
    if (questions.length < 1) {
      setQuestion('');
      return;
    }
    const idx = random(questions.length);
    setQuestion(questions[idx].title);

    const temp = [...questions];
    temp.splice(idx, 1);

    setQuestions(temp);
  };

  const random = (max: number) => Math.floor(Math.random() * max);

  return (
    <div className={styles.container} onClick={newQuestion}>
      {isLoading ? (
        <div>Laddar...</div>
      ) : question ? (
        <>
          <h1>Jag har aldrig</h1>
          <h2>{question}</h2>
          <p>Klicka varsomhelst för att gå vidare</p>
        </>
      ) : (
        <div>Frågorna är slut, ladda om för att hämta nya, slumpade</div>
      )}
    </div>
  );
};

export default Play;
