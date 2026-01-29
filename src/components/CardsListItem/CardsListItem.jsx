import { useCards } from '@/store/CardsContext';
import PrimaryButton from '@/components/PrimaryButton';
import Button from '@/components/Button';

export const CardsListItem = (props) => {
  const { code, price } = props;
  const { addCard, updateCard, removeCard } = useCards();

  return (
    <li>
      <p>{code}</p>
      <p>{price}</p>
      <PrimaryButton
        onClick={() => {
          console.log('XXX ADD:', { code, price });
        }}
      >
        Add
      </PrimaryButton>
      <Button
        onClick={() => {
          console.log('XXX REMOVE:', { code, price });
        }}
      >
        Remove
      </Button>
    </li>
  );
};

export default CardsListItem;
