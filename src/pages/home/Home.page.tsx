import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Introduction from '../../components/home/Introduction';

import { languageActions } from '../../redux/language';
import { LANGUAGES } from '../../constants/app.constant';

const HomePage: React.FC = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const updateLocale = (locale: LANGUAGES) => {
    dispatch(languageActions.setLocale(locale));
  };

  if (isError) {
    throw new Error('This is a error message!');
  }

  return (
    <div className="c-home">
      <Introduction />
    </div>
  );
};

export default HomePage;
