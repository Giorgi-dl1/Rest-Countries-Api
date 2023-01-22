import Country from '../components/Country';
import { Home } from '../interfaces';

const Home = ({ countries }: Home) => {
  console.log(countries);
  return (
    <main className="padding-x">
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const countries = await fetch('https://restcountries.com/v3.1/all').then(
    (res) => res.json()
  );
  return {
    props: {
      countries,
    },
  };
};
