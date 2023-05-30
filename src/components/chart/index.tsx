import React, { useRef } from 'react';
import styled from 'styled-components';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

// import IconLoading from 'components/iconloading';
const ChartView = ({ productSelect }) => {
    const containerId = useRef(
        `tv_container_${Math.random().toString(36).substring(7)}`
    );

    const handleReturnCoin = (product) => {
        if (!product) {
            return 'BTCUSD';
        }
        if (`${product}`.toLowerCase().includes('eth')) {
            return 'ETHUSD';
        }
        if (`${product}`.toLowerCase().includes('sol')) {
            return 'SOLUSD';
        }
        return 'BTCUSD';
    };

    return (
        <WrapperChart>
            <AdvancedRealTimeChart
                symbol={`PYTH:${handleReturnCoin(productSelect)}`}
                theme="dark"
                interval="1"
                locale="en"
                height={500}
                width={650}
                container_id={containerId.current}
            />
        </WrapperChart>
    );
};


export default ChartView;

const WrapperChart = styled.div`
  width: 60%;
  min-width: 706px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #262c2e;
  position: relative;

  article {
    z-index: 2;
  }
`;
