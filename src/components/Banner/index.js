import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  margin: 50px;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

function Banner({ imageSrc, altText }) {
  return (
    <BannerContainer>
      <img src={imageSrc} alt={altText} />
    </BannerContainer>
  );
}

export default Banner;

