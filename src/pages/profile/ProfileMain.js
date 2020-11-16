import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import ProfileChronicle from './ProfileChronicle';
import ProfileFriend from './ProfileFriend';
import ProfileInformation from './ProfileInformation';
import ProfilePhoto from './ProfilePhoto';

import './ProfileMain.scss';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function ProfileMain({ relativeUrl }) {
  const location = useLocation();
  return (
    <div className="ProfileMain">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 100 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path={relativeUrl} component={ProfileChronicle} />
              <Route path={relativeUrl + '/information'} component={ProfileInformation} />
              <Route path={relativeUrl + '/friends'} component={ProfileFriend} />
              <Route path={relativeUrl + '/photos'} component={ProfilePhoto} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default ProfileMain;
