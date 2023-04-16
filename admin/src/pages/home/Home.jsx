import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import { Months } from "./../../utils/months";
import { getStatsList } from "../../utils/apiCall";

export default function Home() {
  const MONTHS = useMemo(() => Months, []);
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getUserStats = async () => {
      const userStats = await getStatsList();
      userStats.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], "New User": item.total },
        ])
      );
    };
    getUserStats();
  }, [MONTHS]);

  return (
    <div className="home">
      {userStats ? (
        <>
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="New User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <img
              width="700px"
              src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/netfilix-la-gi-h1.jpg"
              alt=""
            />
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
