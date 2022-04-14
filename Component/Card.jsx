import React from "react";
import Image from "next/image";
export function Card(props) {
    const style = {
        // textAlign: 'center',
        // // background: 'grey',
        // padding: '0 0 100px 0',
        // margin: '10px',
        // fontSize: '30px'
      };
      
  return (
    //   <div className="card" style={{width: "18rem"}}>
    //         <Image 
    //             src={props.img}
    //             placeholder="blur"
    //             alt='presentation'
    //             layout='responsive'
    //             width={298} 
    //             height={269} />
    //         <div className="card-body">
    //             <p className='card-title beba-font'>{props.title}</p>
    //             <div className="card-line"></div>
    //             <p className='card-text text-card'>{props.text}</p>
    //         </div>
    //     </div>
                <div className="card" style={style}>
                    <Image 
                        src={props.img}
                        placeholder="blur"
                        alt='presentation'
                        layout='responsive'
                        width={298}
                        height={277}  />
                        <p className='card-title beba-font' style={{height:'20px'}}>{props.title}</p>
                        <div className="card-line"></div>
                        <p style={{height:'80px'}} className='card-text text-card'>{props.text}</p>
                </div>
  )   
}
  