import React from "react";
import { mean, median, mode, WineData } from "../../utils/helpers";
import "./DataTableStyles.css";

type Props = {
    data: WineData[];
    measure: "Flavanoids" | "Gamma";
    heading?: string;
};

const StatsTable: React.FC<Props> = ({ data = [], measure = "", heading = "" }) => {
    const classes = [...new Set(data.map((item) => item.Alcohol))].sort();
    const stats = {
        Mean: mean,
        Median: median,
        Mode: mode,
    };

    return (
        <>
            {heading && <h3>{heading}</h3>}
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {classes.map((cls) => (
                            <th key={cls}>Class {cls}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(stats).map((statName, idx) => (
                        <tr key={`stat-row-${statName}`}>
                            <td>
                                {measure} {statName}
                            </td>
                            {classes.map((cls) => {
                                const filteredData = data.filter((item) => item.Alcohol === cls);
                                const values: number[] = filteredData.map((item) => {
                                    const value = item[measure as keyof typeof item];
                                    if (typeof value !== "number") {
                                        return Number(value);
                                    }
                                    return value;
                                });
                                return (
                                    <td key={`state-data-row-${cls}`}>
                                        {stats[statName as keyof typeof stats](values)}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default StatsTable;
