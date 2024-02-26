import './DataAmbassador.css';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import BtnSubmit from '../../Btns/SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import Filters from '../../Filters/Filters';

export default function DataAmbassador() {
  // fetch('http://178.208.79.39:8000/api/v1/ambassadors', {
  //   headers: {
  //     Authorization: 'Token b1dcbce7fe0dce859496b1c95c290f7423eb665e',
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  return (
    <section className="data-ambassador">
      <div className="data-ambassador__container">
        <div className="search-add">
          <InputWithIcon width="276px" placeholder="Поиск амбассадора" />
          <BtnSubmit
            title="Добавить амбассадора"
            width="250px"
            height="50px"
            fontSize="14px"
            margin="32px 0 28px auto"
          />
        </div>
        <div className="data-ambassador__filters">
          <ResetFilters />
          <Filters />
        </div>
      </div>
    </section>
  );
}
