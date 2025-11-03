import { FC } from 'react';
import {
  FavoriteLabel,
  FavoriteText,
  Symbol,
} from './FavoriteMembershipStatus.styled';

const FavoriteMembershipStatus: FC = () => {
  return (
    <FavoriteLabel>
      <FavoriteText>
        <Symbol>*</Symbol>
        <span>Наш фаворит</span>
      </FavoriteText>
    </FavoriteLabel>
  );
};

export default FavoriteMembershipStatus;
