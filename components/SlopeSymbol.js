import Image from "next/future/image";

export default function SlopeSymbol(props) {
  const { classification } = props;
  let slopeSymbol;
  switch(classification) {
    case 0:
      slopeSymbol = "/images/greendot.svg";
      break;
    case 1:
      slopeSymbol = "/images/bluesquare.svg";
      break;
    case 2:
      slopeSymbol = "/images/blackdiamond.svg";
      break;
    case 3:
      slopeSymbol = "/images/doubleblackdiamond.svg";
  }
  return (
    <Image
      src={slopeSymbol}
      height={18}
      width={30}
      alt="Beer classification symbol"
    />
  )
}