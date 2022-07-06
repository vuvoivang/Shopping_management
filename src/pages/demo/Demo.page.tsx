import { DemoComponents } from 'constants/app.constant';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Demo: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(DemoComponents[0].name);
  const renderTabContent = () => {
    const CurComponent = DemoComponents.filter(item => item.name === currentTab)[0].component;
    return <CurComponent />;
  };
  return (
    <div className="c-demo">
      <h1 className="c-demo__header">Small Demos</h1>
      <p className="u-font-weight--mid-bold">These are some additional demos to React understand more </p>
      <div className="c-demo__content">
        <div className="c-demo__navtab">
          <h3>
            {' '}
            <FontAwesomeIcon icon={faBars} size="sm" style={{ marginRight: 15 }} />
            Choose demo
          </h3>
          <ul className="c-demo__navtab-list">
            {DemoComponents.map(item => (
              <li key={item.name} className="c-demo__navtab-item">
                <button className={currentTab === item.name ? 'active' : ''} type="button" onClick={() => setCurrentTab(item.name)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <NavLink to="/home">
            {' '}
            <button type="button" className="c-demo__btn-back">
              <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ marginRight: 10 }} />
              Back to home
            </button>
          </NavLink>
        </div>
        <div className="c-demo__content-tab">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Demo;
