import React from "react";

export function Number(props) {
    const {num1 = 0, num2 = 0} = props;
    return (
        <div>Математична операція x<sup>&radic;y</sup> = {Math.pow(num1, Math.sqrt(num2))}</div>
    );
}