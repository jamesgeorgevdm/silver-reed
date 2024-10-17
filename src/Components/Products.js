import React, { useState } from "react";
import { Card, Button, Dropdown, DropdownButton } from "react-bootstrap";
import "./Products.css";
import YamahaAltoGold from "../SaxPics/YamahaAltoGold.png";
import Series3TenorGold from "../SaxPics/Series3TenorGold.png";
import Series3BaritoneGold from "../SaxPics/Series3BaritoneGold.png";
import Series3SopranoGold from "../SaxPics/Series3SopranoGold.png";
import SignatureTenorGold from "../SaxPics/SignatureTenorGold.png";
import SignatureAltoGold from "../SaxPics/SignatureAltoGold.png";
import Series2BaritoneGold from "../SaxPics/Series2BaritoneGold.png";
import Series2SopranoGold from "../SaxPics/Series2SopranoGold.png";
import SupremeTenorGold from "../SaxPics/SupremeTenorGold.png";
import SupremeAltoGold from "../SaxPics/SupremeAltoGold.png";
import YamahaTenorGold from "../SaxPics/YamahaTenorGold.png";
import YamahaSopranoGold from "../SaxPics/YamahaSopranoGold.png";
import YaniAltoGold from "../SaxPics/YaniAltoGold.png";
import YaniTenorGold from "../SaxPics/YaniTenorGold.png";
import YaniCurvedSoprano from "../SaxPics/YaniCurvedSoprano.png";

/*Object containing the products to be mapped */
const products = [
  {
    id: 1,
    title: "Selmer Paris Supreme Alto Sax",
    description:
      "After 100 years of innovation, design and manufacturing of the saxophone, Henri SELMER Paris redefines the modern identity of the alto saxophone with the SUPREME.",
    price: "R120,000",
    image: SupremeAltoGold,
  },
  {
    id: 2,
    title: "Selmer Paris Supreme Tenor Sax",
    description:
      "Following the huge success of the alto version, the tenor has been highly acclaimed by various World-leading saxophonists who have had access to the Supreme before its Worldwide release.",
    price: "R170,000",
    image: SupremeTenorGold,
  },
  {
    id: 3,
    title: "Selmer Paris SA80 Series II Soprano Saxophone",
    description:
      "The Super Action Series II is a more traditional saxophone with a more laid back feel. It is a little more resistant with a tone that does not dominate, allowing the player to tailor his own sound.",
    price: "R115,000",
    image: Series2SopranoGold,
  },
  {
    id: 4,
    title: "Selmer Paris SA80 Series II Baritone Saxophone",
    description:
      "The Super Action Series II is a more traditional saxophone with a more laid back feel. It is a little more resistant with a tone that does not dominate, allowing the player to tailor his own sound.",
    price: "R240,000",
    image: Series2BaritoneGold,
  },
  {
    id: 5,
    title: "Selmer Paris Signature Alto Saxophone",
    description:
      "The Signature brings us the same acoustic qualities the Series II - a warm, round and full bodied sound, but the re-designed neck now opens up the low note response, offering more comfort around this area, plus it corrects the octave relationships from the left hand stack area up through the palm keys.",
    price: "R110,000",
    image: SignatureAltoGold,
  },
  {
    id: 6,
    title: "Selmer Paris Signature Tenor Saxophone",
    description:
      "Fundamentally, we have the same bore structure as the Series II, but Selmer have developed a new neck bore which has the effect of improving the pitch accuracy around the left hand notes and upper register, plus facilitating a better response in the lower range.",
    price: "R148,000",
    image: SignatureTenorGold,
  },
  {
    id: 7,
    title: "Selmer Paris Series III Soprano Saxophone",
    description:
      "A little less reserved than the Super Action 80 Series II with a more sophisticated keying mechanism and improved intonation make the Series III a popular choice for classical players and those looking for a slightly funkier response.",
    price: "R120,000",
    image: Series3SopranoGold,
  },
  {
    id: 8,
    title: "Selmer Paris Series III Baritone Saxophone",
    description:
      "Some new features such as the double C# mechanism help create stable overall tuning and a well-balanced high register. The Series 3 is a fantastic instrument.",
    price: "R260,000",
    image: Series3BaritoneGold,
  },
  {
    id: 9,
    title: "Selmer Paris Series III Tenor Saxophone",
    description:
      "A little less reserved than the Super Action 80 Series II with a more sophisticated keying mechanism and improved intonation make the Series III a popular choice for classical players and those looking for a slightly funkier response.",
    price: "R150,000",
    image: Series3TenorGold,
  },
  {
    id: 10,
    title: "Yamaha YAS-82ZB - Alto Saxophone",
    description:
      "Yamaha Custom series saxophones are designed with some of the greatest players in the world and hand-built by the cream of Yamaha expert craftsman.",
    price: "R95,000",
    image: YamahaAltoGold,
  },
  {
    id: 11,
    title: "Yamaha YTS-82Z - Tenor Saxophone Saxophone",
    description:
      "The Yamaha 82Z has a remarkably expressive sound with a solid core that comes as a result of the hand-hammered bell. An improved low B - low C# connection ensures that the low C# closes securely, giving players real confidence when playing in the lower register.",
    price: "R97,000",
    image: YamahaTenorGold,
  },
  {
    id: 12,
    title: "Yamaha Custom YSS-875EXHG - Soprano Saxophone",
    description:
      "The YSS-875EXHG has been developed over several decades of painstaking research and trials involving some of the world's greatest saxophonists. Featuring a smooth response and a refined sound full of rich colours.",
    price: "R97,000",
    image: YamahaSopranoGold,
  },
  {
    id: 13,
    title: "Yanagisawa AWO20U Alto Saxophone",
    description:
      "The Yanagisawa A992U developed a reputation over the past 30 years as one of the finest alto saxophones on the market. It was the preferred choice of many Yanagisawa endorsees such as Snake Davis. Its replacement, the AWO20U is even better! Over and above the less expensive AWO2U model, the AWO20U has double key arms, a fully ribbed construction, and an underslung octave mechanism. The bronze offers a richer, broader, more harmonically complex tone.",
    price: "R88,000",
    image: YaniAltoGold,
  },
  {
    id: 14,
    title: "Yanagisawa SCWO10 Curved Soprano Saxophone",
    description:
      "Here is the final piece in the jigsaw puzzle – the WO series curved sopranos! The SCWO10 brings us another level of excellence beyond the 900 series models. One of the finest curved sopranos in the world, this sax will deliver impeccable tone and intonation, whilst giving the player a perfectly engineered and incredibly comfortable keywork and mechanism.",
    price: "R70,000",
    image: YaniCurvedSoprano,
  },
  {
    id: 15,
    title: "Yanagisawa TWO20 - Tenor Saxophone",
    description:
      "The upgraded replacement for the T992, this TWO20 bronze model is one of the World's finest tenor saxophones. The bronze offers a richer, broader, more harmonically complex tone, it also looks stunning!",
    price: "R95,000",
    image: YaniTenorGold,
  },
];

function Products({ addToCart }) {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce(
      (acc, product) => ({ ...acc, [product.id]: "Select Color" }),
      {}
    )
  );

  const handleColorChange = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  const getColorStyle = (color) => {
    switch (color.toLowerCase()) {
      case "black":
        return { color: "black" };
      case "gold":
        return { color: "#FFD700" }; // Gold color
      case "silver":
        return { color: "#C0C0C0" }; // Silver color
      default:
        return { color: "black" }; // Default color
    }
  };

  const handleBuy = (product) => {
    addToCart(product); // Call addToCart with the entire product object
  };

  return (
    <div className="container-products">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <span style={getColorStyle(selectedColors[product.id])}>
                      {selectedColors[product.id]}
                    </span>
                  }
                >
                  <Dropdown.Item
                    onClick={() => handleColorChange(product.id, "Black")}
                  >
                    Black
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleColorChange(product.id, "Gold")}
                  >
                    Gold
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleColorChange(product.id, "Silver")}
                  >
                    Silver
                  </Dropdown.Item>
                </DropdownButton>
                <h5>{product.price}</h5>
                <Button
                  variant="primary"
                  onClick={() => handleBuy(product)} // Pass the entire product object
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
