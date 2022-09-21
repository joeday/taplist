import Image from "next/future/image";

export default function SlopeSymbol(props) {

  let slopeSymbol;
  switch(props) {
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
      width={18}
      alt="Beer classification symbol"
    />
  )
}