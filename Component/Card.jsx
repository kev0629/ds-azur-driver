import React from "react";
import Image from "next/image";
export function Card(props) {
  return <div className="card" style={{width: "18rem"}}>
                    <Image 
                        src={props.img}
                        placeholder="blur"
                        alt='presentation'
                        layout='responsive'
                        width={298} 
                        height={269} />
                    <div className="card-body">
                        <p className='card-title beba-font'>{props.title}</p>
                        <div className="card-line"></div>
                        <p className='card-text text-card'>{props.text}</p>
                    </div>
                </div>;
}
  