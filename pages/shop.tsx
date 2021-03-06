import Link from "next/link";
import React, { useRef } from "react";

interface peopleVehicles {
  vehicle: string;
  name: string;
}

interface peopleType {
  [key: string]: peopleVehicles;
}

const people = {
  id1: { vehicle: "car", name: "bob" },
  id2: { vehicle: "bike", name: "john" },
  id3: { vehicle: "airplane", name: "Mick" },
};

// const people: peopleType = {
//   id1: { vehicle: "car", name: "bob" },
//   id2: { vehicle: "bike", name: "john" },
//   id3: { vehicle: "airplane", name: "Mick" },
// };

interface Props {}

const shop = (props: Props) => {
  return (
    <div>
      {Object.values(people).map((e) => {
        console.log(e.vehicle);
        return (
          <div className="">
            <Link as={`/${e.vehicle}/${e.name}`} href="/[vehicle]/[person]">
              <a href="">
                {e.name}'s {e.vehicle}
              </a>
            </Link>
            ;
          </div>
        );
      })}
    </div>
  );
};

const ref = useRef(shop);

export default shop;
