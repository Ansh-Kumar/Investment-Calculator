import React from "react";

function ResultsTable(props) {

    

    const formatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // let data = [];
    let tableContent = (<tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>)

    // props.value is an array

    // when not empty we want this
    if (props.value.length > 0) {
        // let interestTotal = 0;
        tableContent = props.value.map((year) => (
            <tr key={year.year}>
                <td>{year.year}</td>
                <td>{formatter.format(year.savingsEndOfYear)}</td>
                <td>{formatter.format(year.yearlyInterest)}</td>
                <td>{formatter.format(year.savingsEndOfYear - props.initialInvestment - (year.yearlyContribution * year.year))}</td>
                <td>{formatter.format(props.initialInvestment + (year.yearlyContribution * year.year))}</td>
            </tr>
        ));
    }

    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    )
}

export default ResultsTable;
