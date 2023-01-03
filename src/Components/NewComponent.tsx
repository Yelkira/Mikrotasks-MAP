type NewComponentPropsType = {
    cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <table>
            {props.cars.map((el, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{el.manufacturer} </td>
                            <td> {el.model} </td>
                        </tr>
                    </tbody>
                )
            })}
        </table>

        /*<table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            <tr>
                <td>January</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>February</td>
                <td>$80</td>
            </tr>
        </table>*/
    )
}