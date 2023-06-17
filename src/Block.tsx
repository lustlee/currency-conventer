import React from 'react';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

interface IBlockProps {
    value?: string;
    currency?: unknown;
    onChangeValue?: (value: string) => void;
    onChangeCurrency?: (cur: string) => void;
}
const Block: React.FC<IBlockProps> = ({ value, currency, onChangeValue, onChangeCurrency }) => {
    return (
        <div className="block">
            <ul className="currencies">
                {defaultCurrencies.map((cur) => (
                    <li
                        onClick={() => onChangeCurrency ? onChangeCurrency(cur) : null}
                        className={currency === cur ? 'active' : ''}
                        key={cur}>
                        {cur}
                    </li>
                ))}
                <li>
                    <svg height="50px" viewBox="0 0 50 50" width="50px">
                        <rect fill="none" height="50" width="50" />
                        <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                    </svg>
                </li>
            </ul>
            <input
                onChange={(e) => onChangeValue ? onChangeValue(e.target.value) :null}
                value={value}
                type="number"
                placeholder={'0'}
            />
        </div>
    );
};

export default Block;
