import {css} from 'styled-components'

export function mobile (props) {
 return css`
 @media only screen and (max-width: 640px) {
   ${props}
 }
 `
}
