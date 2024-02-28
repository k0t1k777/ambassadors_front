import './DataAmbassador.css';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
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
    <>
      <Header title='Данные амбассадоров' />
      <section className='data-ambassador'>
        <div className='data-ambassador__container'>
          {!ambassadorFieldsIsOpen && (
            <>
              <div className='search-add'>
                <InputWithIcon width='276px' placeholder='Поиск амбассадора' />
                <SubmitBtn
                  title='Добавить амбассадора'
                  width='250px'
                  height='50px'
                  fontSize='14px'
                  margin='32px 0 28px auto'
                  onClick={() => {
                    handleIsOpen();
                  }}
                />
              </div>
              <div className='data-ambassador__filters'>
                <Filters />
                <ResetFilters />
              </div>
              <div className='ambassadors'>
                <AmbassadorsHeadline />
                <ul className='ambassadors__items'>
                  {ambassadors?.map((item: Ambassador) => (
                    <AmbassadorsItem
                      key={item.id}
                      name={item.name}
                      sex={item.sex}
                      created={item.created}
                      status={item.status}
                      country={item.country}
                      city={item.city}
                      onboarding={item.onboarding_status}
                      item={item}
                      setSelectedItem={() => setSelectedItem(item)}
                      setAmbassadorFieldsIsOpen={() =>
                        setAmbassadorFieldsIsOpen(true)
                      }
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
          {ambassadorFieldsIsOpen && (
            <>
              <div className='send-merch'>
                <ReturnBtn onClick={handleIsOpen} />
                <SubmitBtn
                  title={
                    selectedItem !== undefined ? 'Отправить мерч' : 'Сохранить'
                  }
                  width={selectedItem !== undefined ? '148px' : '100px'}
                  height='40px'
                  fontSize='14px'
                  margin='0 0 0 auto'
                  onClick={() => {
                    handleIsOpen();
                  }}
                />
              </div>
              <AmbassadorFields selectedItem={selectedItem} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
