import React, {useState} from "react";
import "./Table.css";

export function Table(props) {
    const {
        mathematics = 0,
        english = 0,
        history = 0,
        biology = 0,
        informatics = 0,
        literature = 0,
        chemistry = 0,
        geography = 0,
    } = props;

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>mathematics</th>
                    <th>english</th>
                    <th>history</th>
                    <th>biology</th>
                    <th>informatics</th>
                    <th>literature</th>
                    <th>chemistry</th>
                    <th>geography</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{mathematics}</td>
                    <td>{english}</td>
                    <td>{history}</td>
                    <td>{biology}</td>
                    <td>{informatics}</td>
                    <td>{literature}</td>
                    <td>{chemistry}</td>
                    <td>{geography}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={8}>Середній бал: {
                        (mathematics + english + history + biology + informatics + literature + chemistry + geography) / 8
                    }
                    </td>
                </tr>
                </tfoot>
            </table>
        </>
    );
}