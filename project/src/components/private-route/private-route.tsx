import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { render } = props;

  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? render()
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
