import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { languageSelector } from '../../redux/language';
import { getLanguageMessages } from '../../utilities/i18n/i18n.utility';

const mapStateToProps = state => { // Bọc IntlProvider cho app và với state language
  const locale = languageSelector.getLocale(state);
  const { languageMessages } = getLanguageMessages(locale);
  return { locale, messages: languageMessages };
};

export default connect(mapStateToProps)(IntlProvider); // add props: locale ('en'), messages {en: {...}, vi: {...}}
