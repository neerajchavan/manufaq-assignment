// App.tsx
import React from "react";
import DataTable from "./components/data-table/DataTable";
import { calculateGamma } from "./utils/helpers";
import { WINE_DATA } from "./data/wineData";

const gammaData = calculateGamma(WINE_DATA);

const App: React.FC = () => {
    return (
        <div>
            <DataTable data={WINE_DATA} measure="Flavanoids" heading="Flavanoids Table"/>
            <hr/>
            <DataTable data={gammaData} measure="Gamma" heading="Gamma Table"/>
        </div>
    );
};

export default App;
