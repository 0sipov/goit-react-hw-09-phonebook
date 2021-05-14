import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticated = useSelector(state =>
    authSelectors.getIsAuthorization(state),
  );
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
