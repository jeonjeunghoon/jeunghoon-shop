import { Link } from "react-router-dom";
import styled from "styled-components";

import { Product as Props } from "../../types/products";
import Text from "../common/Text";

export default function Product({ id, thumbnail, brand, title, price }: Props) {
  return (
    <Container>
      <StyledLink to={`${id}`}>
        <Image src={thumbnail} alt='상품 이미지' />
        <Body>
          <BrandTitleContainer>
            <Text size='small' weight='bold' color='gray'>
              {brand}
            </Text>
            <Text size='small' stretch lineLimit={1}>
              {title}
            </Text>
          </BrandTitleContainer>
          <Text weight='bold'>${price.toLocaleString("en-US")}</Text>
        </Body>
      </StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;
`;

const StyledLink = styled(Link)`
  &:hover {
    & > div > div > span {
      color: ${({ theme }) => theme.colors["--blue"]};
    }
  }
`;

const Image = styled.img`
  min-width: 200px;
  max-width: 200px;

  min-height: 200px;
  max-height: 200px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100px;
  padding: 8px 0;
`;

const BrandTitleContainer = styled.div`
  display: flex;
  gap: 8px;
`;
