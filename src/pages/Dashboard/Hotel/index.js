import { HotelPreview, Page } from './style';
// import useHotel from '../../../hooks/api/useHotel';

export default function Hotel() {
  // const { hotels } = useHotel;
  // console.log(hotels);

  const hotels = [
    {
      name: 'cat1',
      img: 'https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-cafe-pet.jpg',
    },
    {
      name: 'cat2',
      img: 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
    }
  ];
  return (
    <Page>
      <div>
        <h1> Escolha de hotel e quarto </h1>
      </div>
      <div>
        <h2> Primeiro, escolha seu hotel </h2>
        <div>
          {hotels.map((e, i) => (
            <HotelPreview key={i}>
              <img src={e.img} alt="hotel_picture" />
              <h1> {e.name} </h1>
            </HotelPreview>
          ))}
        </div>
      </div>
    </Page>
  );
}
