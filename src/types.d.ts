import 'styled-components';
import {Theme} from './utils/theme'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
   
  }
}