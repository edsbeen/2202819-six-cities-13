import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {changeCity, getSortedOffers} from '../../store/action';
import {CityMap} from '../../const';
import classNames from 'classnames';

type CitiesListProps = {
  activeCity: string;
}

function CitiesList({activeCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityMap).map((city, i) => {
        const keyValue = `${city.name}-${i}`;
        return (
          <li className="locations__item" key={keyValue}>
            <Link
              className={classNames({
                'locations__item-link': true,
                'tabs__item': true,
                'tabs__item--active': activeCity === city.name
              })}
              to="#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity(city));
                dispatch(getSortedOffers(city));
              }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;