import { useParams } from 'react-router-dom';
import Cola from '@/components/day01/Cola';

const comps = {
  cola: Cola,
};

function Day01() {
  const { name } = useParams();
  const Comp = comps[name];

  return (
    <>
      Day01
      {Comp && <Comp />}
    </>
  );
}

export default Day01;
