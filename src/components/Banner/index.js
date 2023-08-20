import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  img {
    height: 250px;
    width: calc(100% - 40px);
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

