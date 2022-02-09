import React, { Children } from "react";
import Link from 'next/link'
import { useRouter } from "next/router"
import {Link as ScrollLink} from 'react-scroll'

export default function Route(props){
    const router = useRouter()
    if (props.nav==true){
    }
    return(
        <>
        {router.asPath=='/'?(
            <ScrollLink to={props.to}
                        spy={props.nav===true?true:false}
                        hashSpy={props.nav===true?true:false}
                        smooth={true}
                        duration={500} 
                        // className={props.nav===true?'nav-title':''}
                        // activeClass={props.nav===true?'active':''}
                        offset={-150}>    
                {props.children}
            </ScrollLink>
        ):(
        <Link href={props.link}>
            <a>{props.children}</a>
        </Link>
        )}
        </>
    )
}