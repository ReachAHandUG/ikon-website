import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "../../images/logos/ikon-logo-gold.png"
import Awards from "../../images/logos/ikon-awards-logo-gold.png"
import Guild from "../../images/logos/ikon-guild.svg"
import Tribe from "../../images/logos/ikon-tribe.svg"
import { useGlobalStateContext } from "../../utilities/context"
import { moveUpSmall } from "./animations"

const Box = styled.div`
    position: absolute; 
    z-index: 10;
    transition: opacity 1s, visibility 1s, transform 1s;

    a {
        width: 100%;
        height: 100%;
        background-image: url('${Img}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: block;
    }

    .page-has-loaded & {
      a {
        animation: ${moveUpSmall} 1.125s cubic-bezier(0.22, 1, 0.36, 1) both 0.75s;
      }
    }

    .clear-splash-delays & {
      a {
        animation-delay: 0.5s; 
      }
    }

    &.awards {
        a {
            background-image: url('${Awards}');
        }   
    }

    &.guild {
        a {
            background-image: url('${Guild}');
        }
    }

    &.tribe {
        a {
            background-image: url('${Tribe}');
        }
    }
    
    &.center {
        top: 2.5vw;
        left: calc(50% - 6.506vw);
        width: 13.012vw;
        height: 4.678vw;
        transform: scale3d(0.75, 0.75, 0.75);

        &.awards, &.guild, &.tribe {
            width: 14.766vw;
            height: 6.506vw;
            top: 3vw;
            left: calc(50% - 7.583vw);
            transform: scale3d(0.7, 0.7, 0.7);
        }
    }

    &.side {
        top: 5.702vw;
        left: 2.778vw;
        width: 8.845vw;
        height: 3.143vw;
        position: fixed;
        visibility: hidden; 
        opacity: 0; 
        transform: translate3d(0, 5rem, 0);

        &.page {
          top: 3vw; 
        }

        &.hide{
            a {
                display: none;
            }
        }

        &.show {
            transform: none; 
            opacity: 1; 
            visibility: visible; 

            a {
                display: block;
            }
        }
    }

    @media screen and (max-width: 1023px){
      &.side {
        width: 10rem;
        height: 4rem;
        top: 2.5rem;
        left: 2rem;
      }
      
      &.center{
        top: 2rem;
        width: 13rem; 
        height: 5rem; 
        left: calc(50% - 6.5rem);
        
        &.awards, &.guild, &.tribe {
          top: 2rem;
          width: 13rem;
          height: 5rem;
          left: calc(50% - 6.5rem);
        }
      }
    }
`

export default ({ location, type }) => {
  const { show_logo, active_section } = useGlobalStateContext()
  let href = ""
  switch (type) {
    case "ikon":
      href = ""
      break

    case "awards":
      href = "awards"
      break

    case "guild":
      href = "guild"
      break

    case "tribe":
      href = "tribe"
      break

    default:
      break
  }

  return (
    <Box className={location + " " + show_logo + " " + type + ' ' + active_section}>
      <Link to={"/" + href} title="IKON - Educate, Connect, Award" />
    </Box>
  )
}
