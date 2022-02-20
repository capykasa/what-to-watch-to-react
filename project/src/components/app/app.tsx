import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  filmsCount: number;
}

function App({ filmsCount }: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      filmsCount={filmsCount}
    />
  );
}

export default App;
