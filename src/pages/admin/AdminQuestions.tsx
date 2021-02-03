import AddButton from '@/components/button/AddButton';
import Input from '@/components/input/Input';
import { postAsync } from '@/helpers/api-service';
import { IQuestion } from '@/models/IQuestion';
import { useEffect, useState } from 'react';
import styles from './questions.module.scss';

const AdminQuestions = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      // const questions = await getAsync<IQuestion[]>(
      //   'questions/details?limit=999'
      // );
      // setQuestions(questions.data);
    };

    fetchQuestions();
  }, []);

  const addQuestion = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (newQuestion) {
      await postAsync('questionsaa', { title: newQuestion });
    }
  };

  return (
    <div className={styles.container}>
      <h3>
        Frågor <span className={styles.counter}>{questions.length}</span>
      </h3>
      <div className={styles.questions}>
        {questions.map((q) => (
          <div key={q.id} className={styles.question}>
            <p>{q.title}</p>
          </div>
        ))}
      </div>

      <AddButton onSave={addQuestion}>
        <form onSubmit={addQuestion}>
          <Input
            value={newQuestion}
            onChange={setNewQuestion}
            placeholder="Fråga"
          />
        </form>
      </AddButton>
    </div>
  );
};

export default AdminQuestions;
