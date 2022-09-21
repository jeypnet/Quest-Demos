/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PicImage from './assets/images/pic.png';
import { ProductCard1Props } from './types';
import useProductCard1 from './useProductCard1';
 
const TypeQuest: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 2px 6px rgba(0, 0, 0, 0.15)`,  
  borderRadius: `14px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `417px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Pic: any = styled("div")({  
  backgroundImage: `url(${PicImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: `480px`,  
  margin: `0px`,  
});
  
const About: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `20px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const AboutProduct: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Text: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px 0px 10px 0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Product: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.87)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `26px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `133.39999914169312%`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Price: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(140, 140, 140, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `600`,  
  fontSize: `20px`,  
  letterSpacing: `1px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
});
  
const ButtonContained: any = styled(Button)({  
  margin: `2px 0px 0px 0px`,  
});
 
function ProductCard1(props: ProductCard1Props): JSX.Element {
  const {data, fns} = useProductCard1();
  return (
    <TypeQuest >
      <Pic >
      </Pic>
      <About >
        <AboutProduct >
          <Text >
            <Product >
              {`Non-selfie camera`}
                </Product>
            <Price >
              {data.getPrice()}
                </Price>
          </Text>
          <ButtonContained variant="contained" size="large" color="primary"  onClick={fns.handleClick()}  > Buy Now </ButtonContained>
        </AboutProduct>
      </About>
    </TypeQuest>
  );
}

export default ProductCard1;
