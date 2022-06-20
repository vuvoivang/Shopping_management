import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
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
    <div className="c-exam-home">
      <button className="c-exam-home__btn" type="button" onClick={() => updateLocale(LANGUAGES.EN)}>EN</button>
      <button className="c-exam-home__btn" type="button" onClick={() => updateLocale(LANGUAGES.VI)}>VI</button>
      <p className="c-exam-home__message">
        <FormattedMessage id="HELLO" />
      </p>

      <button className="c-exam-home__btn" type="button" onClick={() => setIsError(true)}>Throw error</button>
    </div>
  );
};

export default HomePage;
