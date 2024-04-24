import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors.style.asset';

import {iconProps} from './interface';

const ThumbsUpIcon: React.FC<iconProps> = ({
  width = 24,
  height = 24,
  fill = colors.gray0,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.08 1.902c1.287.438 2.171 1.845 1.885 3.212l-.495 3.168a.244.244 0 00.004.1.09.09 0 00.018.035c.013.015.04.033.088.033h4c.994 0 1.881.404 2.425 1.141.545.74.66 1.705.327 2.65l-2.388 7.262c-.217.828-.758 1.507-1.395 1.973-.646.473-1.453.774-2.269.774h-3.8a4.81 4.81 0 01-1.272-.184c-.388-.111-.861-.302-1.217-.633L6.93 19.062l1.102-1.424 3.145 2.435.04.04c.04.04.191.137.486.222.273.078.565.115.778.115h3.8c.384 0 .827-.149 1.206-.426s.632-.636.72-.992l.009-.032 2.414-7.342.003-.01c.162-.452.076-.782-.077-.989-.156-.213-.468-.409-.975-.409h-4c-1.132 0-2.07-.97-1.891-2.227l.002-.012.504-3.228.006-.028c.093-.418-.211-.986-.706-1.151l-.015-.005-.016-.006c-.164-.062-.394-.064-.641.02-.254.088-.425.233-.494.336l-.002.003-4.1 6.1-1.494-1.004 4.098-6.097.001-.002c.331-.495.86-.85 1.405-1.038.548-.188 1.211-.241 1.843-.01z"
      fill={fill}
      fillOpacity={1}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.465 7.736c-.053.05-.185.216-.185.814v9.8c0 .599.132.764.185.814.072.065.284.186.915.186h1c.631 0 .843-.12.915-.186.053-.05.185-.215.185-.814v-9.8c0-.598-.132-.764-.185-.814-.072-.065-.284-.186-.915-.186h-1c-.631 0-.843.12-.915.186zm-1.22-1.322c.578-.535 1.366-.664 2.135-.664h1c.769 0 1.557.13 2.135.664.597.55.765 1.335.765 2.136v9.8c0 .801-.168 1.586-.765 2.136-.578.535-1.366.664-2.135.664h-1c-.769 0-1.557-.13-2.135-.664-.597-.55-.765-1.335-.765-2.136v-9.8c0-.801.168-1.586.765-2.136z"
      fill={fill}
      fillOpacity={1}
    />
  </Svg>
);
export default ThumbsUpIcon;