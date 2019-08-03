import React from 'react'
import { Card } from '../../components/card';
import InputForm from '../input-form';
import { Button } from '../../components/Button'
import MenuListComposition from '../drop-down-menu'
import { Input } from '../../components/input'
class PriceCard extends React.Component {

    state = {
        value: this.props.value
    }


    onChangeText = (e) => this.setState({ value: e.target.value })


    render() {
        const { value } = this.state
        const {CCY, getCCY} = this.props 
        return (
            <Card
                MenuList={<MenuListComposition getCCY={getCCY}/>}
                Input={<Input
                    onChange={this.onChangeText}
                    value={value}
                />}
                CCY={CCY}
            />
        )
    }
}



export { PriceCard }