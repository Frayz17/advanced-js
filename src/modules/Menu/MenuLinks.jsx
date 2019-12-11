import React from 'react';
import { getState } from 'Services/Store';
import { useLocation } from 'react-router-dom';
import isLinkActive from './isLinkActive';
import { ButtonLink } from 'components/Button';
import Typography from 'components/Typography';

export default React.memo(() => {
  const location = useLocation();

  const {
    nav: { links = [] }
  } = getState();

  return (
    <>
      {links.map(({ path = '/', title = 'noname' }, i) => {
        const isActiveFlag = location.pathname === path;

        return (
          <ButtonLink
            key={i}
            to={path}
            disabled={isActiveFlag}
            className='menu__links'
            style={isLinkActive(isActiveFlag)}>
            <Typography>{title}</Typography>
          </ButtonLink>
        );
      })}
    </>
  );
});
